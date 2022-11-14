{/* https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1 */}

import React, { useState } from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return <>
    <nav className='flex items-center flex-wrap p-3 '>
      <Link
        href='/'
        className='inline-flex items-center p-2 mr-4 lg:w-1/3 text-amber-400 text-6xl'
        legacyBehavior>

        <span className='flex'>I&nbsp;<FontAwesomeIcon icon={['fal', 'heart']} className='h-16'/>&nbsp;to&nbsp;<FontAwesomeIcon icon={['fal', 'fish']} className='h-16'/></span>

      </Link>
      <button
        className=' inline-flex p-3 bg-amber-400 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {/*Note that in this div I use a ternary operator to decide whether or not to display the content of the div*/}
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
          <Link
            href='/fallfish-tenkara'
            className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-amber-400 font-bold items-center justify-center hover:bg-indigo-200 hover:text-white'>
            
              Fallfish Tenkara
            
          </Link>
          <Link
            href='/about'
            className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-amber-400 font-bold items-center justify-center hover:bg-indigo-200 hover:text-white'>
            
              About
            
          </Link>
          <Link
            href='/contact'
            className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-amber-400 font-bold items-center justify-center hover:bg-indigo-200 hover:text-white'>
            
              Contact
            
          </Link>
        </div>
      </div>
    </nav>
  </>;
};

export default Header;