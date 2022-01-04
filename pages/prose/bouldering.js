import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import Footer from '../components/footer'

const Bouldering = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <header className='w-full ml-2 flex flex-wrap justify-between'>
                    <div className='lg:w-1/3'>
                        <h1 className="text-6xl font-bold">
                            <Link href={'/'}>
                                <a className="text-amber-400">iloveto.fish</a>
                            </Link>
                        </h1>
                    </div>
                    <div className='lg:w-2/3 flex my-auto justify-between'>
                        <h3 className='text-xl font-semibold'>
                            <Link href={'/skiing'}>
                                <a className="text-teal-400 hover:text-indigo-500">Skiing</a>
                            </Link>
                        </h3>
                        <h3 className='text-xl font-semibold'>
                            <Link href={'/landskein'}>
                                <a className="text-rose-400 hover:text-indigo-500">Landskein</a>
                            </Link>
                        </h3>
                        <h3 className='text-xl font-semibold'>
                            <Link href={'/veganism'}>
                                <a className="text-lime-400 hover:text-indigo-500">Veganism</a>
                            </Link>
                        </h3>
                        <h3 className='text-xl font-semibold mr-4'>
                            <Link href={'/prose'}>
                                <a className="text-fuchsia-400 hover:text-indigo-500">Prose</a>
                            </Link>
                        </h3>
                    </div>
                </header>
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>Morgan R. Chaney Sanctuary</h1>
                <p>So, there I was hiking through the woods when I saw as if an apparition the tops of several large boulders sticking up above the foliage of Azalea bushes.</p>
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
                    <p className='flex justify-center text-xs italic'>The backside of "Sponge Bob V1" - the overhang is "Exit Strategy" and the blank face to the right is "Dancing in the Sky" both are V1</p>
                <p>It was a fun project that is about one third completed at this point. There is another huge boulder off by itself on top of the ridge overlooking the boulder field. Unfortunately it is located on private property - and therefore I did not climb it. I call it "The Castle".</p>
                <p></p>
            </div>
            <Footer />
        </div>
    )
}

export default Bouldering;