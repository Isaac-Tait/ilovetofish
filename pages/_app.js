import 'tailwindcss/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'

library.add(fal)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp