import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Skiing = () => {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl px-1">
        <h1 className="mx-auto w-fit rounded-xl bg-teal-400 p-1 text-2xl font-semibold text-rose-400">
          Winter
        </h1>

        <Link href="/winter/koselig">
          <span className="font-semibold text-teal-400 underline">Koselig</span>
          <p>
            Let's get cozy for a second and have a quick chat about creating a positive mental state
            surrounding winter and all her cold & dark glory...
          </p>
        </Link>

        <Link href="/winter/nordic-skiing">
          <span className="font-semibold text-teal-400 underline">Nordic Skiing</span>
          <p>
            I thought you had to be wealthy to go skiing; that is until I discovered nordic
            skiing...
          </p>
        </Link>

        <Link href="/winter/new-england">
          <span className="font-semibold text-teal-400 underline">New England</span>
          <p>I have fallen in love with New England. I don't think I could ever leave...</p>
        </Link>

        <Link href="/winter/father-son">
          <span className="font-semibold text-teal-400 underline">Father Son Ski Trip</span>
          <p>
            I used to be entirely opposed to skiing during the holidays. I tried it once and the
            crowds (and prices) were insane. Well now that my son is in school I had no choice. Well
            it was a great trip and I was pleasantly surprised by the solitude and adventure...
          </p>
        </Link>

        <Link href="/winter/100-mile-wilderness">
          <span className="font-semibold text-teal-400 underline">100 Mile Wilderness</span>{' '}
          <p>
            In the far north of Maine lies a wilderness area called the 100 Mile Wilderness. There
            are several huts that you can ski to and from that make visiting this winter wonderland
            a truly special experience...
          </p>
        </Link>

        <Link href="/winter/deconstruction">
          <span className="font-semibold text-teal-400 underline">Deconstruction</span>
          <p>
            2023 was an exhausting, challenging, and sometimes down right scary journey of growing,
            stretching, unlearning, and learning. I fished a lot, not as much as last year but still
            a decent amount...
          </p>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Skiing
