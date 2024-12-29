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
            style={{ fontFamily: 'var(--font-kablammo)' }}
            className="mx-auto w-fit rounded-2xl px-1 text-6xl font-bold tracking-wider text-lime-400"
          >
            <h1 className="mb-2 text-center">The Mountains Are Calling</h1>
          </div>
          <div className="mx-auto">
            <iframe
              width="610"
              height="365"
              src="https://www.youtube.com/embed/1Ax3euD-pyE?si=Jwe7tVkvLs9T0LuZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </main>
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  )
}
