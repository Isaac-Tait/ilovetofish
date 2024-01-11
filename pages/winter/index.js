import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Skiing = () => {
  return (
    <div className="heropattern-topography-neutral-100">
      <Header />
      <header className="mx-1 lg:flex lg:flex-wrap lg:justify-center">
        <div className="my-auto flex justify-between lg:w-2/3">
          <h3 className="mr-4 text-2xl font-semibold">
            <Link href={'/spring'} legacyBehavior>
              <a className="text-lime-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faRainbow} className="h-10" />
              </a>
            </Link>
          </h3>
          <h3 className="text-2xl font-semibold">
            <Link href={'/summer'} legacyBehavior>
              <a className="text-rose-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faSun} className="h-10" />
              </a>
            </Link>
          </h3>
          <h3 className="text-2xl font-semibold">
            <Link href={'/fall'} legacyBehavior>
              <a className="text-fuchsia-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faTree} className="h-10" />
              </a>
            </Link>
          </h3>
        </div>
      </header>
      <div className="mx-auto h-screen max-w-6xl px-1">
        <h1 className="mt-1 flex flex-row justify-center rounded-xl bg-teal-400 text-2xl text-neutral-100">
          Winter
        </h1>
        <Link href="/winter/koselig" legacyBehavior>
          <a className="text-amber-500 underline">
            <p>Koselig</p>
          </a>
        </Link>
        <p>
          Let us get cozy for a second and have a quick chat about a positive mental state
          surrounding winter and all her cold, dark, and gray glory...
        </p>

        <Link href="/winter/nordic-skiing" legacyBehavior>
          <a className="text-amber-500 underline">
            <p>Nordic Skiing</p>
          </a>
        </Link>
        <p>I thought you had to be wealthy to go skiing until I discovered nordic skiing...</p>

        <Link href="/winter/new-england" legacyBehavior>
          <a className="text-amber-500 underline">
            <p>New England</p>
          </a>
        </Link>
        <p>I have fallen in love with New England. I do not think I will ever leave...</p>
        <Link href="/winter/father-son" legacyBehavior>
          <a className="text-amber-500 underline">
            <p>Father Son Ski Trip</p>
          </a>
        </Link>
        <p>
          I used to be entirely opposed to skiing during the holidays. I tried it once and the
          crowds (and prices) were insane. Well now that my son is in school I had no choice. Well
          it was a great trip and I was pleasantly surprised by the solitude and adventure...
        </p>
        <Link href="/winter/100-mile-wilderness" legacyBehavior>
          <a className="text-amber-500 underline">
            <p>100 Mile Wilderness</p>
          </a>
        </Link>
        <p>
          In the far north of Maine lies a wilderness area called the 100 Mile Wilderness. There are
          several huts that you can ski to and from that make visiting this winter wonderland a
          truly special experience...
        </p>

        <Link href="/winter/deconstruction" legacyBehavior>
          <a className="text-amber-500 underline">
            <p>Deconstruction</p>
          </a>
        </Link>
        <p>
          2023 was an exhausting, challenging, and sometimes down right scary journey of growing,
          stretching, unlearning, and learning. I fished a lot, not as much as last year but still a
          decent amount...
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Skiing
