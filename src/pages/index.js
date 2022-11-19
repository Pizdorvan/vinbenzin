import useSWR from 'swr'
import { useState } from 'react'
import Head from 'next/head'
import Search from '../components/HomePage/Search/Search'
import Services from '../components/HomePage/Services/Services'
import Advantage from '../components/HomePage/Advantage/Advantage'

const HomePage = () => {
  const [vin, setVin] = useState('')
  const { data, error } = useSWR(vin.toUpperCase()?.length === 17 ? `api/car-list/${vin}/` : null)
  const isLoading = vin.toUpperCase()?.length === 17 && !data && !error

  if (error) return 'An error has occurred.'

  return (
    <>
      <Head>
        <title>
          История продаж и повреждений битых
          автомобилей из США со страховых аукционов Copart и IAAI.
        </title>
        <meta
          name="description"
          content="Сайт VinBenzin предоставляет
          достоверную информацию повреждений страховых автомобилей в Америке,
          после ДТП, града, наводнения, угона или любого другого страхового случая.
          Доступны тысячи VIN-кодов."
        />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="w7tS-2bBy0G3y0l4fZSX9SXAE1Y_oMOdKBWYBddN8ZY" />
      </Head>
      <Search setVin={setVin} isLoading={isLoading} data={data} />
      <Services />
      <Advantage />
    </>
  )
}

export default HomePage
