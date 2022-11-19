import PropTypes from 'prop-types'
import styles from './Card.module.scss'

const Card = (
  {
    photos,
    year,
    brand,
    model,
    // eslint-disable-next-line react/prop-types
    vin, odometer, engine, gearbox, driveTrain, auctionDate, saleType, damage, handleImage
  }
) => {
  const carPhotos = photos.filter((photo) => photo.endsWith('.JPG') || photo.endsWith('.jpg'))

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{vin}</h2>
      <h1 className={styles.subtitle}>{`${brand} ${model}`}</h1>
      {carPhotos.length > 0 && (
      <ul className={styles.images}>
        {carPhotos.map((photo) => (
          <button type="button" key={photo} onClick={handleImage}>
            <img src={photo} alt={vin} />
          </button>
        ))}
      </ul>
      )}
      <div className={styles.descriptions}>
        <ul>
          <li className={styles.title}>
            Описание автомобиля
          </li>
          <li>
            <span className={styles.check}>
              VIN
            </span>
            <span>
              {vin}
            </span>
          </li>
          <li>
            <span className={styles.year}>
              Год выпуска
            </span>
            <span>
              {year}
            </span>
          </li>
          <li>
            <span className={styles.odometer}>
              Пробег
            </span>
            <span>
              {odometer}
            </span>
          </li>
          <li>
            <span className={styles.engine}>
              Двигатель
            </span>
            <span>
              {engine}
            </span>
          </li>
          <li>
            <span className={styles.gearbox}>
              Коробка передач
            </span>
            <span>
              {gearbox}
            </span>
          </li>
          <li>
            <span className={styles.drive}>
              Привод
            </span>
            <span>
              {driveTrain}
            </span>
          </li>
        </ul>
        <ul>
          <li className={styles.title}>
            Детали продажи автомобиля
          </li>
          <li>
            <span className={styles.auction}>
              Дата аукциона
            </span>
            <span>
              {auctionDate}
            </span>
          </li>
          <li>
            <span className={styles.sale}>
              Тип продажи
            </span>
            <span>
              {saleType}
            </span>
          </li>
          <li>
            <span className={styles.damage}>
              Повреждения
            </span>
            <span>
              {damage}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

Card.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  vin: PropTypes.string.isRequired,
  odometer: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  gearbox: PropTypes.string.isRequired,
  driveTrain: PropTypes.string.isRequired,
  auctionDate: PropTypes.string.isRequired,
  saleType: PropTypes.string.isRequired,
  damage: PropTypes.string.isRequired
}

export default Card
