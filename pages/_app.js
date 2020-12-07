import {ThemeProvider} from 'theme-ui'
import theme from '../utils/theme'
import '../styles/header.scss'
import '../styles/layout.scss'
import '../styles/footer.scss'
import '../styles/component.scss'
import {initGA, trackGAEvent} from '../utils/googleAnalytics'

// for more info on measuring app performance
// visit https://nextjs.org/docs/advanced-features/measuring-performance
export function reportWebVitals(metric) {
  /* Google Analytics */
  const {id, name, label, value} = metric
  initGA()
  trackGAEvent(
    'Web Vitals',
    'NextJS Custom Metric',
    name,
    Math.round(name === 'CLS' ? value * 1000 : value)
  )
}

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
