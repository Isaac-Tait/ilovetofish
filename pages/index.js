import Head from 'next/head'
import Link from 'next/link'

import Footer from '../pages/components/footer'

export default function Home() {
  return (
    <div className='heropattern-bubbles-neutral-100 flex flex-col h-screen'>
      
        <Head>
          <title>I Love To Fish</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <header className='w-full ml-2'>
          <h1 className="text-6xl font-bold">
              <a className="text-amber-400">iloveto.fish</a>
          </h1>
        </header>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          {/*Grid columns */}
          <div className='md:grid grid-cols-6 md:gap-4'>
          
            <div className='col-start-2 col-span-4 h-20 md:h-48 flex justify-center'>
              <Link href="/fall">
              <a className="text-fuchsia-400 hover:text-indigo-500">
                  <h3 className="text-2xl font-extrabold">Fall &rarr;</h3>
                </a>
              </Link>
            </div>

            <div className='col-start-1 col-end-3 h-20 md:h-48 flex justify-center'>
              <Link href="/summer">
                <a className="text-rose-400 hover:text-indigo-500">
                  <h3 className="text-2xl font-extrabold">Summer &rarr;</h3>
                </a>
              </Link>
            </div>

            <div className='col-end-7 col-span-2 h-20 md:h-48 flex justify-center'>
              <Link href="/winter">
                <a className="text-teal-400 hover:text-indigo-500">
                  <h3 className="text-2xl font-extrabold">Winter &rarr;</h3>
                </a>
              </Link>
            </div>

            <div className='col-start-1 col-span-7 h-20 md:h-48 flex justify-center'>
              <Link href="/spring">
                <a className="text-lime-400 hover:text-blue-600">
                  <h3 className="text-2xl font-extrabold">Spring &rarr;</h3>
                </a>
              </Link>
            </div>
          </div>
        </main>
      
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}
