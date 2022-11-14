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
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>A Chanterelle Fishing Adventure</h1>
                <p
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >Last week my brother and his family were in town. It was great to see him and his family (the last time I saw them was under less than ideal{' '}<Link 
                    href="https://macadamgrinding.com/posts/year-of-the-ox/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >circumstances</Link>).</p>
                <p>The Fourth of July weekend was relaxing and I got a lot of yard work done. Come Wednesday though I was itching for a bit of fishing action. So, I decided to re-visit an area I had been to before.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1657139087/earlyJuly/eastern_connecticut-july-bass-trout-fishing-tenkara-new_england-_awejki.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Devil&#39;s Hopyard State Park</p>
                <p>The water was a bit low, which was a bit concerning. We got about four inches of rain in the month of June. I thought that was a pretty good amount - I guess not. A lot of the rivers are low. Hopefully things improve over the next month or two. I am skeptical though as July and August are the dry months around here (so I am told).</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1657139086/earlyJuly/eastern_connecticut-july-bass-trout-fishing-tenkara-new_england-pickerelweed_yf94qf.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Pickerelweed</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1657139086/earlyJuly/eastern_connecticut-july-bass-trout-fishing-tenkara-new_england-rainbow_eabfjb.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Whoa! Look at that beautiful Rainbow Trout. She had an equally large Brown Trout friend but I could not catch him</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1657139086/earlyJuly/eastern_connecticut-july-bass-trout-fishing-tenkara-new_england-bass_pool_pvorbk.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>What an epic looking stream. It was as warm as a bath tub and loaded with spunky Bass. I bet it is an epic segment in the early Spring...</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1657139086/earlyJuly/eastern_connecticut-july-bass-trout-fishing-tenkara-new_england-fresh_water_mussle_qhytfa.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Fresh water mussels were everywhere!</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1657139088/earlyJuly/eastern_connecticut-july-bass-trout-fishing-tenkara-new_england-cinnabar_red_chanterelle_k9c3jz.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Cinnabar-red Chanterelles</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1657139086/earlyJuly/eastern_connecticut-july-bass-trout-fishing-tenkara-new_england-ghost_plant_hdhztm.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Ghost Plant</p>
                <p>I also tried out a new app called Merlin Bird ID. It was really cool. I was able to have it listen to bird calls and identify them in real time. At the days high point on the river exploration, I heard a Red-shouldered hawk, American Crows, Veery, Gray Catbirds, and a Northern Cardinal. The symphony was superb.</p>
            </div>
            <div className='max-w-6xl mx-auto'> 
                <Comment />
            </div>
            <Footer />
        </div>
        )
    }

    export default Blank;