import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='text-slate-700 '>
        <p className='ml-1'>© 2021 - {new Date().getFullYear()}, Built with&nbsp;
          <a href="https://nextjs.org/" class="text-white hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Next.js</a> &&nbsp;
          <a  href="https://tailwindcss.com" class="text-white hover:text-indigo-500" target="_blank" rel="noopener noreferrer">TailwindCSS</a>.
        </p>
      </div>
      <div>
        <p className='mr-1'>Another&nbsp;
            <a 
              href="https://mountaintopcoding.dev"
              className="text-white hover:text-indigo-500" 
              target="_blank" 
              rel="noopener noreferrer"
            >mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project
        </p>
      </div>
    </div>
  )
}

export default Footer;
