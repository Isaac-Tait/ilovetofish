import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-between text-xs mx-1">
        <div className="text-slate-500 w-1/3">
          <p className="">
            © 2021 - {new Date().getFullYear()}, Built with&nbsp;
            <Link
              href="https://nextjs.org/"
              className="text-indigo-500 hover:text-amber-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>{' '}
            &&nbsp;
            <Link
              href="https://tailwindcss.com"
              className="text-indigo-500 hover:text-lime-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </Link>
            .
          </p>
        </div>
        <div className="mt-2 flex justify-center w-1/3 pb-1">
          <Link
            href="https://github.com/Isaac-Tait/ilovetofish"
            target="_blank"
            rel="noopener noreferrer"
            legacyBehavior
          >
            <Image src="/GitHub.png" height={20} width={20} alt={'GitHub'} />
          </Link>
        </div>
        <div className="text-slate-500 w-1/3 flex justify-end">
          <p className="">
            Another&nbsp;
            <Link
              href="https://mountaintopcoding.dev"
              className="text-indigo-500 hover:text-fuchsia-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              mountainTopCoding(&#127956;);
            </Link>{' '}
            project
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
