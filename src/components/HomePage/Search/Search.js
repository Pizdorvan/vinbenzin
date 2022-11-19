/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import styles from './Search.module.scss'
import Spinner from '../../Spinner/Spinner'
import Error from '../../Error/Error'

const Search = ({ setVin, data, isLoading }) => {
  const inputRef = useRef(null)

  function handleButtonClick(e) {
    e.preventDefault()
    setVin((inputRef.current.value).toUpperCase())
  }

  const car = data?.results?.[0]

  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles.searchWrap}>
          <div className={styles.search}>
            <h1>Проверьте ваш автомобиль по <span>VIN</span> перед покупкой.</h1>
            <h2>Мы сохраняем историю данных с аукционов США Copart и IAAI</h2>
            <form className={styles.handling}>
              <input type="text" placeholder="введите VIN состоящий из 17 символов" ref={inputRef} />
              <button type="submit" onClick={handleButtonClick}>Поиск</button>
            </form>
          </div>
          {isLoading && <Spinner />}
          {!isLoading && !car && (inputRef.current?.value.length === 17) && <Error title="Упс, возможно в нашей базе нет вашего автомобиля" />}
          {!isLoading && !car && (inputRef.current?.value.length !== 17) && inputRef.current?.value.length && <Error title="Упс, возможно вы допустили ошибку. Vin должен содержать 17 символов!" />}
          {!isLoading && car && (
            <Link href={`/catalogue/${car.vin}`}>
              <a className={data ? `${styles.cardLink}` : `${styles.cardLink} ${styles.fade}`}>
                <div className={styles.card}>
                  <img src={car.photo[0]} alt={car.vin} />
                  <ul className={styles.description}>
                    <li>{car.brand + car.model}</li>
                    <li>{car.vin}</li>
                    <li>Перейти по ссылкке</li>
                  </ul>
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

Search.propTypes = {
  setVin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Search
