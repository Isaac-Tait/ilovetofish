import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="heropattern-bubbles-neutral-100 h-screen">
      <Head>
        <title>I Love To Fish</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="pl-1">
        <Header />
      </div>
      <main className="h-4/5 grid place-content-center">
        <div className="flex flex-col md:flex-row">
          <h3 className="mx-14 mb-8 md:mb-0 hover:animate-spin-slow">
            <Link href="/spring" legacyBehavior>
              <a className="text-lime-400 hover:text-blue-500 flex flex-col">
                <FontAwesomeIcon icon={faRainbow} className="text-5xl" />
                <p className="text-center">Spring</p>
              </a>
            </Link>
          </h3>

          <h3 className="mx-14 mb-8 md:mb-0 hover:animate-spin-slow">
            <Link href="/summer" legacyBehavior>
              <a className="text-rose-400 hover:text-indigo-500 flex flex-col">
                <FontAwesomeIcon icon={faSun} className="text-5xl" />
                <p className="text-center">Summer</p>
              </a>
            </Link>
          </h3>

          <h3 className="mx-14 mb-8 md:mb-0 hover:animate-spin-slow">
            <Link href="/fall" legacyBehavior>
              <a className="text-fuchsia-400 hover:text-indigo-500 flex flex-col">
                <FontAwesomeIcon icon={faTree} className="text-5xl" />
                <p className="text-center">Fall</p>
              </a>
            </Link>
          </h3>

          <h3 className="mx-14 mb-8 md:mb-0 hover:animate-spin-slow">
            <Link href="/winter" legacyBehavior>
              <a className="text-teal-400 hover:text-indigo-500 flex flex-col">
                <FontAwesomeIcon icon={faSnowflake} className="text-5xl" />
                <p className="text-center">Winter</p>
              </a>
            </Link>
          </h3>
        </div>
      </main>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
