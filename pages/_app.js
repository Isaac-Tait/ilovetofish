import 'tailwindcss/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
config.autoAddCss = false

library.add(fal)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp