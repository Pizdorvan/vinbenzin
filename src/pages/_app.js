import PropTypes from 'prop-types'
import '../styles/reset.scss'
import { SWRConfig } from 'swr'
import Layout from '../components/Layout/Layout'

const swrConfig = {
  fetcher: (resource, init) => fetch(resource, init).then((response) => response.json())
}

const App = ({ Component, pageProps }) => (
  <SWRConfig value={swrConfig}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SWRConfig>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired
}

export default App
