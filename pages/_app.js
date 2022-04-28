import 'tailwindcss/tailwind.css'
import 'nextjs-breadcrumbs/dist/index.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'
config.autoAddCss = false

library.add(fal)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp