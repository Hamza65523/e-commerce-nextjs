import '../styles/globals.css'
import Navbar from './Navbar'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {ThemeProvider} from 'next-themes'
import store from './store'
import {Provider} from 'react-redux'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>

  <ThemeProvider>
    <Navbar/>
    <Component {...pageProps} />
  </ThemeProvider>
    </Provider>
  )
}

export default MyApp
