import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../../components/Header'
import Footer from '../../components/Footer';

const Summer = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
        <Header />
            <header className='lg:flex lg:flex-wrap lg:justify-center mx-1'>
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='h-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} className='h-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold mr-4'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} className='h-10'/>
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='max-w-6xl mx-auto h-screen px-1'>
                <h1 className="text-2xl bg-rose-400 flex flex-row justify-center text-neutral-100 rounded-xl mt-1">Summer</h1>
                    <Link href="/summer/chanterelle-adventure">
                        <a className='underline text-amber-500'>
                            <p>Chanterelle Adventure</p>
                        </a>
                    </Link>
                    <p>After a pleasant, yet jam packed, with yard work, 4th of July weekend I was itching to catch some fish...</p>
                    <Link href="/summer/kayaking">
                        <a className='underline text-amber-500'>
                            <p>Have kayak, will travel</p>
                        </a>
                    </Link>
                    <p>For the past month or two I have been dreaming about buying a kayak and using it to access water that had proven to be out of reach by foot. Well last week I found a really good deal for one on Craigslist and took the plunge...</p>
            </div>
            <Footer />
        </div>
    );
}

export default Summer;