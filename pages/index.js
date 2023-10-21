import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="h-screen heropattern-bubbles-neutral-100">
      <Head>
        <title>I Love To Fish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pl-1">
        <Header />
      </div>
      <main className="grid h-4/5 place-content-center">
        <div className="flex flex-col md:flex-row">
          <h3 className="mx-14 mb-8 hover:animate-spin-slow md:mb-0">
            <Link href="/spring" legacyBehavior>
              <a className="flex flex-col text-lime-400 hover:text-blue-500">
                <FontAwesomeIcon icon={faRainbow} className="text-5xl" />
                <p className="text-center">Spring</p>
              </a>
            </Link>
          </h3>

          <h3 className="mx-14 mb-8 hover:animate-spin-slow md:mb-0">
            <Link href="/summer" legacyBehavior>
              <a className="flex flex-col text-rose-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faSun} className="text-5xl" />
                <p className="text-center">Summer</p>
              </a>
            </Link>
          </h3>

          <h3 className="mx-14 mb-8 hover:animate-spin-slow md:mb-0">
            <Link href="/fall" legacyBehavior>
              <a className="flex flex-col text-fuchsia-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faTree} className="text-5xl" />
                <p className="text-center">Fall</p>
              </a>
            </Link>
          </h3>

          <h3 className="mx-14 mb-8 hover:animate-spin-slow md:mb-0">
            <Link href="/winter" legacyBehavior>
              <a className="flex flex-col text-teal-400 hover:text-indigo-500">
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
