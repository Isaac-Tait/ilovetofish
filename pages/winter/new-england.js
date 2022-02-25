import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer'

const NewEngland = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
        <Header />
            <header className='w-full px-2 flex flex-wrap justify-between'>
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
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>Lakes and Rivers</h1>
                <p>Today I am experiencing my first sleet storm. It is pretty gnarly out there. I woke up expecting the predicted 4-6 inches of snow (perhaps enough for a lap or two on my favorite{' '}
                <a 
                    href="https://www.thatscandinavianfeeling.com/lifestyle/norwegian-concept-koselig" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >trail</a> with my skis). Instead there was an eighth of an inch of snow and thinning fast from the 33&#176; rain.</p>
                <p>A little snow cannot dampen my new found love for New England though. It offered a perfect opportunity to curl up with my tea and bang out the final touches on a video I have been working on in my mind for the last few months.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1645799125/newEngland/cranberry_xe3br7.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Earlier this week, when it was 65&#176; I went for a mountain bike ride and discovered a stream perfect for tenkara.</p>
                <p>On my other{' '}
                <a 
                    href="https://www.youtube.com/c/Fallfishtenkara1/videos" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >channel</a> I have 30+ videos mixed to a sound track. For this video though I felt it was better to highlight the natural soundtrack. Listen closely and you will hear{' '}
                 <a 
                    href='https://seattlebackpackersmagazine.com/cherish-the-silence-of-nature/'
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >the silence of nature</a>. The video was shot over the course of several months and numerous trips into the wild places of Connecticut.</p>
                <p className='pt-2'>Having recently moved from here from San Diego my soul has come alive at the prospect of so much to explore. The trails, rivers, ponds, and lakes seem endless - and if they ever do run out here I have other states to explore within a one to two hour drive as well.</p>
                <p className='text-center my-4'>So, without further ado I present <span className='italic'>&quot;Lakes and Streams&quot;</span></p>
                <div className='flex justify-center mb-4'>
                    <iframe width="660" height="415" src="https://www.youtube.com/embed/VUXWlXaIyTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </div>
        )
    }

    export default NewEngland;