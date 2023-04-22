import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Breadcrumbs from 'nextjs-breadcrumbs'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Blank = () => {
  return (
    <div className="heropattern-topography-neutral-100">
      <Header />
      {/* <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} /> */}
      <div className="h-screen max-w-6xl mx-auto overflow-y-scroll px-1">
        <h1 className="text-2xl font-semibold text-emerald-600 flex justify-center mb-8">
          An encounter with angry animals
        </h1>
        <p
          className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
        >
          There is a river I visited in the fall last year{' '}
          <Link
            href="https://youtu.be/LEaS8Xs3sVs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-teal-400 hover:text-indigo-400"
          >
            it was cold, it was a crisp fall day, and I caught one fish.
          </Link>
          I was itching for a second go at the river to see how the trout had done through our
          mostly mild winter.
        </p>
        <p>
          There is a roughly one mile hike to get to the river. When I got close I spotted another
          angler but he was wearing jeans and a flannel shirt{' '}
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/koselig2-500.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">This is a photo caption</p>
      </div>
      <div className="max-w-6xl mx-auto">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default Blank
