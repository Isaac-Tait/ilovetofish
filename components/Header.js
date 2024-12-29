/* https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1 */

import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

const Header = () => {
  const [active, setActive] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setActive(!active)
  }

  const isHomePage = router.pathname === '/'

  return (
    <div className="rounded-b-lg bg-gray-800">
      <nav className="flex flex-wrap items-center">
        {isHomePage ? (
          <div className="mr-4 inline-flex items-center p-2 text-6xl text-yellow-400 lg:w-1/3">
            <span className="flex text-yellow-400">
              I&nbsp;
              <FontAwesomeIcon icon={faHeart} />
              &nbsp;to&nbsp;
              <FontAwesomeIcon icon={faFish} />
            </span>
          </div>
        ) : (
          <Link
            href="/"
            className="mr-4 inline-flex items-center p-2 text-6xl text-yellow-400 lg:w-1/3"
          >
            <span className="flex text-yellow-400">
              I&nbsp;
              <FontAwesomeIcon icon={faHeart} />
              &nbsp;to&nbsp;
              <FontAwesomeIcon icon={faFish} />
            </span>
          </Link>
        )}
        <button
          className="ml-auto mr-2 inline-flex rounded bg-yellow-400 p-3 text-white outline-none hover:text-white lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div I use a ternary operator to decide whether or not to display the content of the div*/}
        <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:w-auto lg:flex-grow`}>
          <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto lg:w-auto lg:flex-row lg:items-center">
            <Link
              href="/fallfish-tenkara"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-lime-400 hover:bg-yellow-400 hover:text-white lg:inline-flex lg:w-auto"
            >
              Fallfish Tenkara
            </Link>
            <Link
              href="https://wormwoodsaga.com"
              target="__blank"
              rel="noopener noreferrer"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-rose-400 hover:bg-yellow-400 hover:text-white lg:inline-flex lg:w-auto"
            >
              My Novel
            </Link>
            <Link
              href="https://docs.eandp.cc/"
              target="_blank"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-yellow-400 hover:bg-teal-400 hover:text-white lg:inline-flex lg:w-auto"
            >
              E&P
            </Link>
            <Link
              href="/about"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-fuchsia-400 hover:bg-yellow-400 hover:text-white lg:inline-flex lg:w-auto"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-teal-400 hover:bg-yellow-400 hover:text-white lg:inline-flex lg:w-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <header className="mx-1 lg:flex lg:flex-wrap lg:justify-center">
        <div className="my-auto flex justify-between lg:w-2/3">
          <div>
            <h3 className="flex items-center justify-center text-3xl hover:animate-spin-slow">
              <Link href={'/winter'}>
                <FontAwesomeIcon
                  icon={faSnowflake}
                  className="text-teal-400 hover:text-yellow-400"
                />
              </Link>
            </h3>
            <Link href={'/winter'} className="text-teal-400 hover:text-yellow-400">
              Winter
            </Link>
          </div>

          <div>
            <h3 className="flex items-center justify-center text-3xl hover:animate-spin-slow">
              <Link href={'/spring'}>
                <FontAwesomeIcon icon={faRainbow} className="text-lime-400 hover:text-yellow-400" />
              </Link>
            </h3>
            <Link href={'/spring'} className="text-lime-400 hover:text-yellow-400">
              Spring
            </Link>
          </div>

          <div>
            <h3 className="flex items-center justify-center text-3xl hover:animate-spin-slow">
              <Link href={'/summer'}>
                <FontAwesomeIcon icon={faSun} className="text-rose-400 hover:text-yellow-400" />
              </Link>
            </h3>
            <Link href={'/summer'} className="text-rose-400 hover:text-yellow-400">
              Summer
            </Link>
          </div>

          <div>
            <h3 className="flex items-center justify-center text-3xl hover:animate-spin-slow">
              <Link href={'/fall'}>
                <FontAwesomeIcon icon={faTree} className="text-fuchsia-400 hover:text-yellow-400" />
              </Link>
            </h3>
            <Link href={'/fall'} className="text-fuchsia-400 hover:text-yellow-400">
              Fall
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
