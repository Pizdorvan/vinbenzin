/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Services.module.scss'
import Locatiton from './Location/Location'
import Calendar from './Calendar/Calendar'
import Car from './Car/Car'

const Services = () => (
  <section className={styles.servicesWrap}>
    <div className="container">
      <div className={styles.services}>
        <h3 className={styles.subtitle}>
          Как это работает
        </h3>
        <a id="services">
          <h2 className={styles.title}>
            Мы предоставляем
          </h2>
        </a>
        <div className={styles.servicesItems}>
          <div className={styles.item}>
            <div className={styles.image}>
              <Locatiton />
            </div>
            <h3>
              Большая база VIN номеров
            </h3>
            <p>
              мы собираем базу с аукционов США
            </p>
          </div>
          <div className={styles.item}>
            <div className={`${styles.image} ${styles.calendar}`}>
              <Calendar />
            </div>
            <h3>
              В любое время
            </h3>
            <p>
              никаких ограничений по количеству проверок
            </p>
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <Car />
            </div>
            <h3>
              Большая база фотографий авто
            </h3>
            <p>
              Проверьте начальное состояние вашего авто
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
