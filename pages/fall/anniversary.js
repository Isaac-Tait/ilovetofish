import React from 'react';
import Image from 'next/image'

import Breadcrumbs from 'nextjs-breadcrumbs';

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Anniversary = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <Header />
            <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>My first year living in New England</h1>
                <p
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >My first year in Connecticut has been epic. The fishing is great, the snowy winters are wonderful, the beaches are superb, and the wild places to explore are something else.</p>
                <p className='pb-2'>I feel deeply blessed to be living here and I doubt I will ever leave. New England feels like home to me. I have not felt the sense of home in a place for twenty years <span className='italic'>(when my parents sold my childhood home every place since then I have felt like a nomad)</span></p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1666137813/Anniversary/connecticut-new_england-tenkara-finesse_fishing-bfs-ultralight-cold_o7aulp.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>It was cold...</p>
                <p className='py-2'>Last week I noticed a pretty nasty rash on my leg. It got worse pretty quickly so I contacted my doctor. Turns out I got bit by a tick and contracted Lyme Disease. Now I am on antibiotics to prevent any more serious symptoms from cropping up. I am pretty sure I got bit when I was working in my front yard cleaning up some bushes growing too close to the road. I had forgotten to put on my tick spray too. It took a few days for the meds to kick in and to feel up to being outside again. When I finally got back outside I decided to go back to a stream I stumbled upon late in the summer. The water was much higher this trip so I was hoping the fishing action would be as good as last time. However, I think the drought did not help the trout population and so the rivers primary inhabitants are Fallfish and the water was just too cold for them to be active. I ended up catching two fish - both Fallfish. The trail-head is about 15 minutes from the river, and I had gotten almost ten minutes down the trail when I remembered I had left my wallet on the back seat. So, I walked back and put it away. Then when I finally got to the river I realized that I had left my tackle box in the truck. So, I had to walk back to the truck again. I guess the brain fog part of Lyme Disease is real... While I spent more time walking than fishing on this trip the fall colors and sky were astounding and so I was not too upset.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1666137814/Anniversary/connecticut-new_england-tenkara-finesse_fishing-bfs-ultralight-clouds_f2rlvp.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>A little tenkara action before I head back to get my tackle box for my BFS setup...</p>
                <p className='py-2'>I will be headed back to California for Halloween to see family and friends. It will be nice to see everyone again. Last year Vermont got its first real snow in the middle of November. With any luck I could be skiing shortly after getting back from the trip...</p>
                <div className='flex justify-center'>
                    <Image 
                        src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1666137813/Anniversary/connecticut-new_england-tenkara-finesse_fishing-bfs-ultralight_o6wg3g.jpg"
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Not a bad walk for sure...</p>
                <p className='py-2'>I am having a lot of fun with my new iPhone 14 Pro. The camera is SO much better than my iPhone 11. I put together this video from my trip last week. The water and the colors are just surreal (IMHO). Enjoy.</p>
                
                <div className='flex justify-center mb-4'>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/LEaS8Xs3sVs" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </div>
            <div className='max-w-6xl mx-auto'> 
                <Comment />
            </div>
            <Footer />
        </div>
        )
    }

    export default Anniversary;