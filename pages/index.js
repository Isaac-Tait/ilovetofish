import Head from 'next/head'
import Link from 'next/link'

import Footer from '../pages/components/footer'

export default function Home() {
  return (
    <div className='bg-neutral-500'>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>I Love To Fish</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <Link href="/">
            <a className="text-blue-600">iloveto.fish</a>
          </Link>!
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/blog">
          <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Blog &rarr;</h3>
              <p className="mt-4 text-xl">
                Read about fishing here...
              </p>
            </a>
          </Link>

          <Link href="/about">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about stuff!
              </p>
            </a>
          </Link>

          <Link href="/landskein">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Landskein &rarr;</h3>
              <p className="mt-4 text-xl">
                What the heck is landskein?
              </p>
            </a>
          </Link>

          <Link href="/stuff">
            <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Stuff &rarr;</h3>
              <p className="mt-4 text-xl">
                Stuff!
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
    <Footer />
    </div>
  )
}
