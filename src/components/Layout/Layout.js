import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
