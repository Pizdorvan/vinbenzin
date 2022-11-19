import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import Spinner from '../../components/Spinner/Spinner'
import Card from '../../components/Card/Card'
import Popup from '../../components/Popup/Popup'

const Page = () => {
  const [modal, setModal] = useState(false)
  const { query: { vin } } = useRouter()
  const { data, error } = useSWR(vin ? `/api/car-list/${vin}` : null)
  const handleImage = useCallback(() => {
    setModal((currentModal) => !currentModal)
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')

    if (modal) {
      body.classList.add('hidden')
    } else {
      body.classList.remove('hidden')
    }
  }, [modal])

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setModal(!modal)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }

  useEffect(() => {
    if (modal) {
      document.addEventListener('keydown', handleKeyDown)
    }
  })

  if (!data) {
    return <Spinner />
  }

  if (error) return 'An error has occurred.'

  const car = data.results[0]

  return (
    <>
      <Head>
        <title>{car.vin} {car.brand} {car.model} история автомобиля</title>
        <meta name="description" content={`Автомобиль ${car.vin} ${car.brand} ${car.model} с повреждениями ${car.damage}. На момент продажи пробег авто составлял ${car.odometer}`} />
      </Head>
      <section className="background">
        <div className="container">
          {!data && <Spinner />}
          {modal && (
          <Popup
            images={car.photo}
            vin={car.vin}
            handleImage={handleImage}
          />
          )}
          {data && data.results.map((item) => (
            <Card
              key={item.vin}
              photos={item.photo}
              brand={item.brand}
              year={item.year}
              model={item.model}
              vin={item.vin}
              odometer={item.odometer}
              engine={item.engine}
              gearbox={item.gearbox}
              driveTrain={item.drive_train}
              auctionDate={item.auction_date}
              saleType={item.sale_type}
              damage={item.damage}
              handleImage={handleImage}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Page
