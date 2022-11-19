/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import Pagination from '@etchteam/next-pagination'
import Spinner from '../../components/Spinner/Spinner'
import styles from './Catalogue.module.scss'

const CataloguePage = () => {
  const { query } = useRouter()
  const queryParams = new URLSearchParams(query)
  const { data, error } = useSWR(`api/car-list?${queryParams}`)

  if (!data) {
    return <Spinner />
  }

  if (error) return 'An error has occurred.'

  const { results } = data

  return (
    <>
      <Head>
        <title>
          Найдите настоящую информацию о своем автомобиле.
        </title>
        <meta
          name="description"
          content="Сайт VinBenzin предоставляет
          достоверную информацию повреждений страховых автомобилей в Америке,
          после ДТП, града, наводнения, угона или любого другого страхового случая.
          Доступны тысячи VIN-кодов. Данные по аукциона Copart и предоставления всей доступной информации."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className={styles.catalogue}>
        <div className="container">
          <h1 className={styles.title}>Каталог аукционных <span>автомобилей</span></h1>
          <ul className={styles.list}>
            {results.map((item) => (
              <li className={styles.item}>
                <Link href={`catalogue/${item.vin}`} key={item.vin}>
                  <a>
                    <div className={styles.image}>
                      <img src={item.photo[0]} alt={item.vin} />
                    </div>
                    <div className={styles.description}>
                      <h2>{item.vin}</h2>
                      <h3>{item.brand}</h3>
                      <h3>{item.model}</h3>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.link}>
            <Pagination total={data.count} sizes={[10]} />
          </div>
        </div>
      </section>
    </>
  )
}

export default CataloguePage
