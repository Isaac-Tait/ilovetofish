import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Blog = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <Header />
            <header className='lg:flex lg:flex-wrap lg:justify-center mx-1'> 
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-2xl font-semibold'>
                        <Link href='/spring' legacyBehavior>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='h-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold'>
                        <Link href='/summer' legacyBehavior>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} className='h-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold mr-4'>
                        <Link href='/winter' legacyBehavior>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} className='h-10'/>
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='max-w-6xl mx-auto h-screen px-1'>
                <h1 className="text-2xl bg-fuchsia-400 flex flex-row justify-center text-neutral-100 rounded-xl mt-1">Fall</h1>
                    <Link href="/fall/bouldering" legacyBehavior>
                        <p className='underline text-amber-500'>Boulders</p>
                    </Link>
                <p>I like to climb rocks. So, imagine my excitement when I discoverd a collection of boulders not too far from home...</p>

                <Link href="/fall/october" legacyBehavior>
                    <p className='underline text-amber-500'>October</p>
                </Link>
                <p>It has been too long since I chased down obscure blue lines on a map to see if they held trout. It was time to brush off the cobwebs...</p>
                <Link href="/fall/autumn-equinox" legacyBehavior>
                    <p className='underline text-amber-500'>Fall is in the air!</p>
                </Link>
                <p>The days are getting shorter, the weather is cooler, and the trees leaves are turning from green to gold, red, yellow, and orange...</p>
                <Link href="/fall/anniversary" legacyBehavior>
                    <p className='underline text-amber-500'>My first year living in New England</p>
                </Link>
                <p>My first year living in Connecticut is now in the history books. I must say that I was absolutely blown away my first year living here. Everything about this state has surpassed my expectations...</p>
                <Link href="/fall/second-summer" legacyBehavior>
                    <p className='underline text-amber-500'>A second chance at summer, but if only for a day</p>
                </Link>
                <p>Fresh off the plane from California (a two week visit to see family, friends, and go to a wedding) I was itching to get back out into the wild places of New England that I have fallen madly in love with. Lucky for me the weather was a warm 77 degrees in early November...</p>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;