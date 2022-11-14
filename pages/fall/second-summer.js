import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Breadcrumbs from 'nextjs-breadcrumbs';

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Blank = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <Header />
            <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>Second Summer</h1>
                <p
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >A few weeks back my family and I flew out to California to visit friends and family for two weeks. When we came home Connecticut was experiencing a second summer. In fact it was warmer in Connecticut than it had been when we left Southern California! I took advantage of the second summer weather and headed out to find some trout on a few small blue lines. One was a new area and the other area I had been to a handful of times over the past{' '}<Link 
                    href="spring/trout" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >year</Link>.</p>
                <p>When I pulled up to the trail-head on Monday the lot was nearly full (well three cars had parked in such a way as to fill up a six car lot) so, I squeezed in between a few trees with my truck and doused myself in tick spray.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383155/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-small_stream_gmi6ud.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>A nice spot for sure</p>
                I checked the water temperature with my new Apple Ultra watch and it came in at 63 degrees. I saw numerous fish but was having zero luck enticing any to chomp my lure until I came across a really nice pool. As I retrieved my lure beside a half submerged log a lovely Brookie ducked out of the cover and slammed my lure. I brought her to hand and quickly released her back into the cool water.
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383156/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-grass_zs5sxc.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Have I mentioned how much I love Connecticut lately?</p>
                <p></p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383157/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-selfie_t5mv3m.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This is a photo caption</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383156/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-sky_lrxpte.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This is a photo caption</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383156/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-_nucxzc.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This is a photo caption</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383156/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-light_sfx3tu.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This is a photo caption</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383156/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-nice_brookie_h5a8gb.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This is a photo caption</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1668383154/secondSummer/second_summer-connecticut-fishing-tenkara-finesse_fishing-bfs-new_england-fall_colors_vtautt.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>This is a photo caption</p>
            </div>
            <div className='max-w-6xl mx-auto'> 
                <Comment />
            </div>
            <Footer />
        </div>
        )
    }

    export default Blank;