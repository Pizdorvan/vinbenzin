/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import Head from 'next/head'
import styles from '../components/ErrorPage/ErrorPage.module.scss'

const ErrorPage = () => (
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
    </Head>
    <section>
      <div className="container">
        <div className={styles.errorPage}>
          <h1>Ошибочка вышла. Вот ссылочка на
            <Link href="/"><a className={styles.link}> главную</a></Link>, чтобы не теряться :)
          </h1>
          <img src="./img/Bot.svg" alt="404" />
        </div>
      </div>
    </section>
  </>
)

export default ErrorPage
