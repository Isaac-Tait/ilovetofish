import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between bg-rose-200'>
      <div className='text-slate-500'>
        <p className='ml-1'>© 2021 - {new Date().getFullYear()}, Built with&nbsp;
          <a href="https://nextjs.org/" className="text-indigo-500 hover:text-amber-400" target="_blank" rel="noopener noreferrer">Next.js</a> &&nbsp;
          <a  href="https://tailwindcss.com" className="text-indigo-500 hover:text-lime-400" target="_blank" rel="noopener noreferrer">TailwindCSS</a>.
        </p>
      </div>
      <div className='text-slate-500'>
        <p className='mr-1'>Another&nbsp;
            <a 
              href="https://mountaintopcoding.dev"
              className="text-indigo-500 hover:text-fuchsia-400" 
              target="_blank" 
              rel="noopener noreferrer"
            >mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project
        </p>
      </div>
    </div>
  )
}

export default Footer;
