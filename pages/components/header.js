import React from 'react'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className='lg:w-1/3 text-amber-400 text-6xl'>
      <Link href="/"> 
        <a>
          <span className='flex'>I&nbsp;<FontAwesomeIcon icon={['fal', 'heart']} className='h-16'/>&nbsp;to&nbsp;<FontAwesomeIcon icon={['fal', 'fish']} className='h-16'/></span>
        </a>
      </Link>
    </div>
  )
}

export default Header;