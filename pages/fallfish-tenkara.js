import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Fallfish = () => {
  return (
    <div className="h-screen bg-gray-400 heropattern-bubbles-gray-800">
      <Header />
      <div className="mx-auto max-w-6xl px-1">
        <h2 className="mx-auto w-fit rounded-t-md bg-red-900 p-1 text-2xl font-semibold text-neutral-100">
          Fallfish Tenkara
        </h2>
        <div className="rounded-md bg-red-900 p-1 text-neutral-100">
          <p className="mt-1">
            2013 I was living in the Mid-Atlantic region of the United States of America, when I
            stumbled upon a method of fishing called tenkara. I immediately fell in love with this
            style of fishing...
          </p>
          <p className="mt-1">
            In the Mid-Atlantic one of the most prevalent fresh water fish is the Fallfish and I
            caught a lot of them with my tenkara rod. Many anglers considered the Fallfish a trash
            fish. I did not share that sentiment...
          </p>
          <p className="mt-1">
            In 2014 I moved to Japan and I started a blog about my fishing exploits in the Land of
            the Rising Sun. I named it Fallfish Tenkara. The site grew every year and became more
            and more polished. I commissioned a logo, wrote articles for tenkara publications, and
            even gave video presentations at tenkara events around the world.
          </p>
          <p className="mt-1">
            Now there are nearly 140 pages chronicling my adventures in Japan within the confines of
            Fallfish Tenkara. The whole site is dedicated to my adventures in Japan.
          </p>
          <p className="mt-1">So, go check it out by clicking the logo below.</p>
        </div>
        <div className="flex justify-center pt-2">
          <Link
            href="https://fallfishtenkara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src="/images/FfT_logo.png"
              height={258}
              width={262}
              className="rounded-lg"
              alt={'Project'}
            />
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Fallfish
