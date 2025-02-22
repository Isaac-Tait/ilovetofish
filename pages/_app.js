import 'tailwindcss/tailwind.css'
import { Kablammo } from 'next/font/google'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const kablammoFont = Kablammo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-kablammo',
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={kablammoFont.variable}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default MyApp
