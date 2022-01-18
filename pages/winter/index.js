import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer';

const Skiing = () => {
    return (
        <div className='heropattern-topography-violet-100'>
            <header className='flex flex-wrap justify-between'>
                <Header />
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} className='h-10' />
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
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='h-10' />
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='max-w-6xl mx-auto h-screen px-1'>
                <h1 className="text-2xl bg-teal-400 flex flex-row justify-center text-neutral-100 rounded-xl mt-1">Winter</h1>
                    <Link href="/winter/koselig">
                        <a className='underline text-amber-500'>
                        <p>Koselig</p>
                        </a>
                    </Link>
                <p>Let us get cozy for a second and have a quick chat about a positive mental state surrounding winter and all her cold, dark, and gray glory...</p>
            </div>
            <Footer />
        </div>
    );
}

export default Skiing;