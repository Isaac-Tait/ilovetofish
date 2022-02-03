import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer';

const Spring = () => {
    return (
        <div className='heropattern-topography-rose-100'>
            <header className='lg:flex lg:flex-wrap lg:justify-between mx-1'>
                <Header />
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} className='h-10' />
                            </a>
                        </Link>
                        
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} className='h-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold mr-4'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} className='h-10'/>
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='max-w-6xl mx-auto h-screen px-1'>
                <h1 className="text-2xl bg-lime-400 flex flex-row justify-center text-neutral-100 rounded-xl mt-1">Spring</h1>
                <Link href="/spring/pat-metheny">
                        <a className='underline text-amber-500'>
                        <p>Pat Metheny</p>
                        </a>
                    </Link>
                <p>My most favorite musician of all time has to be Pat Metheny. The man is a prodigy and his music is such a joy to listen too imho...</p>

            </div>
            <Footer />
        </div>
    );
}

export default Spring;