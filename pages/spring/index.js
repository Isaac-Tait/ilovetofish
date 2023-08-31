import React from 'react'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Spring = () => {
  return (
    <div className="heropattern-topography-neutral-100">
      <Header />
      <header className="mx-1 lg:flex lg:flex-wrap lg:justify-center">
        <div className="my-auto flex justify-between lg:w-2/3">
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

          <h3 className="mr-4 text-2xl font-semibold">
            <Link href={'/winter'} legacyBehavior>
              <a className="text-teal-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faSnowflake} className="h-10" />
              </a>
            </Link>
          </h3>
        </div>
      </header>
      <div className="mx-auto h-screen max-w-6xl px-1">
        <h1 className="mt-1 flex flex-row justify-center rounded-xl bg-lime-400 text-2xl text-neutral-100">
          Spring
        </h1>
        <Link href="/spring/pat-metheny">
          <p className="text-amber-500 underline">
            <span className="text-lg font-bold">March 2022 -&nbsp;</span>Pat Metheny
          </p>
        </Link>
        <p>
          My most favorite musician of all time has to be Pat Metheny. The man is a prodigy and his
          music is such a joy to listen too imho...
        </p>
        <Link href="/spring/trout" legacyBehavior>
          <p className="text-amber-500 underline">
            <span className="text-lg font-bold">April 2022 -&nbsp;</span>Trout
          </p>
        </Link>
        <p>
          It was exactly 180 days since I last caught a wild trout. I was itching to bring one to
          hand. So, I set off for a river that has become my favorite - for some reason...
        </p>
        <Link href="/spring/finesse-fishing" legacyBehavior>
          <p className="text-amber-500 underline">
            <span className="text-lg font-bold">May 2022 -&nbsp;</span>Finesse Fishing
          </p>
        </Link>
        <p>
          One of the last things I bought before moving back to the USA from Japan was a JDM finesse
          spin rod and reel as well as a few dozen ultralight spoons. Little did I know how much use
          I would get out of that rod over the years...
        </p>
        <Link href="/spring/mountain-laurel" legacyBehavior>
          <p className="text-amber-500 underline">
            <span className="text-lg font-bold">June 2022 -&nbsp;</span>Mountain Laurel
          </p>
        </Link>
        <p>
          After five years of faithful service my Daiwa spin reel seized up and the internal spring
          snapped. I took the plunge and got a BFS reel. To break it in I checked out a stream near
          the border of Rhode Island...
        </p>
        <Link href="/spring/when-raccoons-attack" legacyBehavior>
          <p className="text-amber-500 underline">
            <span className="text-lg font-bold">April 2023 -&nbsp;</span>An intense moment on the
            river...
          </p>
        </Link>
        <p>
          There I was just minding my own business switching out my spoon for hard bait when
          suddenly just upstream and around a bend I heard the most horrific sound of animals
          fighting, splashing in the water, and a sound like that of deer dying...
        </p>
        <Link href="/spring/lyme-disease" legacyBehavior>
          <p className="text-amber-500 underline">
            <span className="text-lg font-bold">June 2023 -&nbsp;</span>Dealing with ticks...
          </p>
        </Link>
        <p>
          This season I have had a much bigger problem with ticks than I did last season. I am not
          sure what the cause is but if I had to venture a guess I would say that our lame (read:
          warm and hardly any snow) winter is to blame...
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Spring
