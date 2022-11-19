import PropTypes from 'prop-types'
import styles from './Error.module.scss'

const Error = ({ title }) => (
  <div className={styles.error}>
    <img src="./img/Bot.svg" alt="Error" />
    <h2 className={styles.title}>{title}</h2>
  </div>
)

Error.propTypes = {
  title: PropTypes.string
}

Error.defaultProps = {
  title: ''
}

export default Error
