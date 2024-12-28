import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-gray-400 heropattern-bubbles-gray-800">
      <Head>
        <title>I Love To Fish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="grow place-content-center justify-between">
        <main className="mt-6 flex flex-col justify-center">
          <div
            style={{ fontFamily: 'var(--font-eater)' }}
            className="text-center text-5xl font-bold tracking-wider text-yellow-400"
          >
            <h1 className="mb-2">The Mountains Are Calling</h1>
          </div>
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1735332491/nathan-dumlao-q3YZ4g7j9yc-unsplash_j2gmzi.jpg"
            width={700}
            height={300}
            alt="Photo by Nathan Dumlao on Unsplash"
            className="mx-auto rounded-full md:rounded-xl"
          />
        </main>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  )
}
