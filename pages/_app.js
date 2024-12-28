import 'tailwindcss/tailwind.css'
import 'nextjs-breadcrumbs/dist/index.css'
import { Eater } from 'next/font/google'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const eaterFont = Eater({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-eater',
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={eaterFont.variable}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default MyApp
