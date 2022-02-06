import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../pages/components/header'
import Footer from '../pages/components/footer'

export default function Home() {
  return (
    <div className='heropattern-bubbles-neutral-100 h-screen'>
      <Head>
        <title>I Love To Fish</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className='flex flex-col'>
        <div className='pl-1'>
          <Header />
        </div>
        <main className='pt-20'>
          <div className='grid grid-cols-6 md:gap-4 max-w-6xl mx-auto'>
            <div className='col-start-2 col-span-4 h-20 md:h-48 flex justify-center'>
              <Link href="/spring">
                <a className="text-lime-400 hover:text-blue-600 my-auto">
                  <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='h-14' />
                </a>
              </Link>
            </div>

            <div className='col-start-1 col-end-3 h-20 md:h-48 flex justify-center'>
              <Link href="/summer">
                <a className="text-rose-400 hover:text-indigo-500 my-auto">
                  <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} className='h-14' />
                </a>
              </Link>
            </div>

            <div className='col-end-8 col-span-3 flex justify-center'>
              <Link href="/fall">
                <a className="text-fuchsia-400 hover:text-indigo-500 my-auto">
                  <FontAwesomeIcon icon={['fal', 'leaf-maple']} className='h-14' />
                </a>
                </Link>
            </div>

            <div className='col-start-1 col-span-7 h-20 md:h-48 flex justify-center'>
              <Link href="/winter">
                <a className="text-teal-400 hover:text-indigo-500 my-auto">
                  <FontAwesomeIcon icon={['fal', 'snowflakes']} className='h-14'/>
                </a>
              </Link>
            </div>
          </div>
        </main>
        <p></p>    
      </div>
      
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  )
}
