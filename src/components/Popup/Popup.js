/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types'
import styles from './Popup.module.scss'

const Popup = ({ images, vin, handleImage }) => (
  <div className={styles.popup}>
    <ul>
      <button type="button" className={styles.cross} onClick={handleImage} />
      {images.map((item) => (
        <li key={vin}>
          <img src={item} alt={vin} />
        </li>
      ))}
    </ul>
  </div>
)

Popup.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  vin: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired
}

export default Popup
