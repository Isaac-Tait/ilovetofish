{
  /* https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1 */
}

import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFish } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className="flex flex-wrap items-center pr-3">
        <Link
          href="/"
          className="mr-4 inline-flex items-center p-2 text-6xl text-amber-400 lg:w-1/3"
        >
          <span className="flex text-amber-400">
            I&nbsp;
            <FontAwesomeIcon icon={faHeart} />
            &nbsp;to&nbsp;
            <FontAwesomeIcon icon={faFish} />
          </span>
        </Link>
        <button
          className="ml-auto inline-flex rounded bg-amber-400 p-3 text-white outline-none hover:text-white lg:hidden"
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
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-amber-400 hover:bg-indigo-200 hover:text-white lg:inline-flex lg:w-auto"
            >
              Fallfish Tenkara
            </Link>
            <Link
              href="https://wormwoodsaga.com"
              target="__blank"
              rel="noopener noreferrer"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-amber-400 hover:bg-indigo-200 hover:text-white lg:inline-flex lg:w-auto"
            >
              My Novel
            </Link>
            <Link
              href="/about"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-amber-400 hover:bg-indigo-200 hover:text-white lg:inline-flex lg:w-auto"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="w-full items-center justify-center rounded px-3 py-2 font-bold text-amber-400 hover:bg-indigo-200 hover:text-white lg:inline-flex lg:w-auto"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <header className="mx-1 mb-2 lg:flex lg:flex-wrap lg:justify-center">
        <div className="my-auto flex justify-between lg:w-2/3">
          <h3 className="text-3xl font-semibold">
            <Link href={'/spring'} legacyBehavior>
              <a className="text-lime-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faRainbow} />
              </a>
            </Link>
          </h3>
          <h3 className="text-3xl font-semibold">
            <Link href={'/summer'} legacyBehavior>
              <a className="text-rose-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faSun} />
              </a>
            </Link>
          </h3>
          <h3 className="text-3xl font-semibold">
            <Link href={'/fall'} legacyBehavior>
              <a className="text-fuchsia-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faTree} />
              </a>
            </Link>
          </h3>
          <h3 className="mr-4 text-3xl font-semibold">
            <Link href={'/winter'} legacyBehavior>
              <a className="text-teal-400 hover:text-indigo-500">
                <FontAwesomeIcon icon={faSnowflake} />
              </a>
            </Link>
          </h3>
        </div>
      </header>
    </>
  )
}

export default Header
