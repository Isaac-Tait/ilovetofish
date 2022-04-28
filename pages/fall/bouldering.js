import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'
import Breadcrumbs from '../components/NextBreadcrumbs'
import Footer from '../components/Footer'

const Bouldering = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <Header />
            <Breadcrumbs />
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>A climbers sanctuary, close to home</h1>
                <p 
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >So, there I was hiking through the woods when I saw as if an apparition the tops of several large boulders sticking up above the foliage of Azalea bushes.</p>
                <p>I had to get in for a closer look!</p>
                <p>What I discovered was a veritable paradise of a dozen or so boulders with a smattering of fun looking problems.</p>
                <p>I returned a week later with a rake, pruning shears, my crash pad, shoes, and chalk.</p>
                <p>After a few hours of raking and trimming I had cleared the base of several boulders and I began to establish a few routes.</p>
                    <div className='flex justify-center'>
                        <Image 
                            src='/images/boulder-exitStrategy.jpg'
                            height={562}
                            width={750}
                            className='rounded-lg'
                            alt={"Exit Strategy"}
                        />
                    </div>
                    <p className='flex justify-center text-xs italic'>The backside of &#34;Sponge Bob V1&#34; - the overhang is &#34;Exit Strategy&#34; and the blank face to the right is &#34;Dancing in the Sky&#34; both are V1</p>
                    <p>It has been a fun project developing this &#34;new&#34; climbing area. There is another huge boulder off by itself on top of the ridge overlooking the boulder field. Unfortunately it is located on private property - and therefore I did not climb it. I call it &#34;The Castle&#34;.</p>
                    <div className='flex justify-center'>
                        <Image 
                            src='/images/boulder-project.jpg'
                            height={562}
                            width={750}
                            className='rounded-lg'
                            alt={"Project"}
                        />
                    </div>
                    <p className='flex justify-center text-xs italic'>This is probably the most technical problem in the area. Estimating it at around V4</p>
                    <p>I have seen zero signs of climbing in the past. However, the areas close proximity to the trail I find it hard to believe I am the first person to climb here...</p>
                    <div className='flex justify-center'>
                        <Image 
                            src='/images/boulder-spongeBob.jpg'
                            height={562}
                            width={750}
                            className='rounded-lg'
                            alt={"Exit Strategy"}
                        />
                    </div>
                    <p className='flex justify-center text-xs italic'>Pull through the bulge onto the face above. A quick problem, good for warming up...V0</p>
                    <p>There are several other boulders not pictured here. I revisted the area to get some more photos and put up some new problems but the temps were super low and my finger tips were frozen. So, more falling than climbing took place.</p>
                    <div className='flex justify-center'>
                        <Image 
                            src='/images/boulder-unclimbed.jpg'
                            height={562}
                            width={750}
                            className='rounded-lg'
                            alt={"Exit Strategy"}
                        />
                    </div>
                    <p className='flex justify-center text-xs italic'>A beautiful piece of rock. Super hard route may be possible right up the middle. Otherwise stick to the sides for a scamper</p>
                    <p>I have kept the precise whereabouts of this area a secret as I would hate to see it closed by bird watchers annoyed with obnoxious inconsiderate climbers...</p>
                    <div className='flex justify-center'>
                        <Image 
                            src='/images/clearing.jpg'
                            height={562}
                            width={750}
                            className='rounded-lg'
                            alt={"Exit Strategy"}
                        />
                    </div>
                    <p className='flex justify-center text-xs italic'>The approach..</p>
                </div>
                <Footer />
            </div>
    )
}

export default Bouldering;