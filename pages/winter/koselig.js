import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer'

const Koselig = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <header className='w-full ml-2 flex flex-wrap justify-between'>
                <Header />
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-xl font-semibold mr-4'>
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold mr-4'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>Koselig</h1>
                    <p className='flex justify-center'>I posted a collage of photos to&nbsp;
                    <a 
                        href="https://www.instagram.com/p/CY2pJkbtud0/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-teal-400 hover:text-indigo-400'
                    >Instagram</a>&nbsp;this evening (1/17/2022) all about Koselig.</p>
                    <p>I was inspired by two articles that I wanted to share here. The first was written in &quot;The Atlantic&quot;. It is an older article that was first published in 2015 (a simpler time for sure...) but I only just recently discovered it because well I did not really need to think about cold gray winters in San Diego California... Here is the <a href='https://www.theatlantic.com/health/archive/2015/07/the-norwegian-town-where-the-sun-doesnt-rise/396746/' target="_blank" rel="noopener noreferrer" className='underline text-teal-400 hover:text-indigo-400'>Link</a></p>
                        <div className='flex justify-center'>
                        <Image 
                            src='/images/koselig1-750.jpg'
                            height={562}
                            width={750}
                            className='rounded-lg'
                            alt={"Project"}
                        />
                        </div>
                        <p className='flex justify-center text-xs italic'>Yesterday all the lakes, bogs, and puddles were frozen. Then a warm storm blew in and the ice sunk, which I thought was pretty cool looking...</p>
                    <p>The second article can be found <a 
                        href="https://www.thatscandinavianfeeling.com/lifestyle/norwegian-concept-koselig" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline text-teal-400 hover:text-indigo-400'
                    >here</a>.</p>
                    <p>There now I feel a lot better. As a writer I would seriously dislike someone stealing my words and claiming them as my own. I quoted the second article in my Instagram post and since you cannot put links in posts I decided the next best thing to do was blog about it...</p>
                <div className='flex justify-center'>
                    <Image 
                        src='/images/koselig2-500.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This small brook by my house is almost completely frozen solid. Pretty wild!</p>
            </div>
            <Footer />
        </div>
        )
    }

    export default Koselig;