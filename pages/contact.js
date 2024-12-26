import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="h-screen heropattern-bubbles-neutral-100">
      <Header />
      {/* <header className='lg:flex lg:flex-wrap lg:justify-center mx-1'>
        <div className='lg:w-2/3 flex my-auto justify-between'>
          <h3 className='text-3xl font-semibold'>
            <Link href={'/spring'} legacyBehavior>
              <a className='text-lime-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faRainbow} />
              </a>
            </Link>
          </h3>
          <h3 className='text-3xl font-semibold'>
            <Link href={'/summer'} legacyBehavior>
              <a className='text-rose-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faSun} />
              </a>
            </Link>
          </h3>
          <h3 className='text-3xl font-semibold'>
            <Link href={'/fall'} legacyBehavior>
              <a className='text-fuchsia-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faTree} />
              </a>
            </Link>
          </h3>
          <h3 className='text-3xl font-semibold mr-4'>
            <Link href={'/winter'} legacyBehavior>
              <a className='text-teal-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faSnowflake} />
              </a>
            </Link>
          </h3>
        </div>
      </header> */}
      <h2 className="text-center text-2xl font-semibold text-red-500">
        How to get a hold of me...
      </h2>

      <p className="pt-10 text-center text-lg">
        The best way to reach me is through my{' '}
        <Link
          href="https://www.instagram.com/iloveto.fish/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 hover:text-fuchsia-400 hover:underline"
        >
          Instagram
        </Link>
        &nbsp;account. Cheers!
      </p>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}
