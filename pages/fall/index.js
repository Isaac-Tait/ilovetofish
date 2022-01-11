import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header';
import Footer from '../components/footer';

const Blog = () => {
    return (
        <div className='heropattern-topography-indigo-100'>
            <header className='flex flex-wrap justify-between'>
                <Header />
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='h-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                            <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} className='h-10' />
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
            <h1 className="text-2xl bg-fuchsia-400 flex flex-row justify-center text-neutral-100 rounded-xl mt-1">Venue for my thoughts, adventures, and ideas. Read at your own risk...</h1>
            <Link href="/fall/bouldering">
                <a className='underline text-amber-500'>
                <p>Boulders</p>
                </a>
            </Link>
            <p>I like to climb rocks. So, imagine my excitement when I discoverd a collection of boulders not too far from home...</p>
        </div>
            <Footer />
        </div>
    );
}

export default Blog;