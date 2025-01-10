import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 px-2 text-xs">
      <div className="w-1/3 text-yellow-400">
        <p className="hidden md:block">
          © 2021 - {new Date().getFullYear()}, Built with&nbsp;
          <Link
            href="https://nextjs.org/"
            className="text-lime-400 hover:text-rose-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>{' '}
          &&nbsp;
          <Link
            href="https://tailwindcss.com"
            className="text-fuchsia-400 hover:text-teal-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </Link>
          .
        </p>
      </div>
      <div className="flex w-fit justify-center rounded-full bg-gray-400 p-1">
        <Link
          href="https://github.com/Isaac-Tait/ilovetofish"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <Image src="/GitHub.png" height={20} width={20} alt={'GitHub'} />
        </Link>
      </div>
      <div className="flex w-1/3 justify-end text-yellow-400">
        <p className="hidden md:block">
          Made with 🏳️‍🌈 by&nbsp;
          <Link
            href="https://mountaintopcoding.dev"
            className="text-rose-400 hover:text-fuchsia-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            mountainTopCoding(&#127956;);
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
