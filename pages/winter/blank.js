import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer'

const Blank = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <header className='w-full px-2 flex flex-wrap justify-between'>
                <div className='flex flex-row justify-between w-full'>
                    <Header />
                </div>

                <div className='w-full flex my-auto justify-between'>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} />
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>Title</h1>
                <p>More text here{' '}<a 
                    href="https://www.thatscandinavianfeeling.com/lifestyle/norwegian-concept-koselig" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >here</a>.</p>
                <p>Text</p>
                <div className='flex justify-center'>
                    <Image 
                        src='/images/koselig2-500.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This is a photo caption</p>
            </div>
            <Footer />
        </div>
        )
    }

    export default Blank;