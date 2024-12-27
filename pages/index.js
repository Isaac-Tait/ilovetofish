import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="h-screen bg-gray-400 heropattern-bubbles-gray-800">
      <Head>
        <title>I Love To Fish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
      </div>
      <main className="grid h-4/5 place-content-center">
        <div className="flex flex-col md:flex-row"></div>
      </main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
