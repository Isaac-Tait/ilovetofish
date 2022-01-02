import React from 'react';
import Link from 'next/link'

import Footer from '../components/footer'

const Bouldering = () => {
    return (
        <div className='bg-neutral-300'>
            <div className='h-screen max-w-6xl mx-auto'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>Morgan R. Chaney Sanctuary</h1>
                <p>So, there I was hiking through the woods when I saw as if an apparition the tops of several large boulders sticking up above the foliage of Azalea bushes.</p>
                <p>I had to get in for a closer look!</p>
                <p>What I discovered was a veritable paradise of a dozen or so boulders with a smattering of fun looking problems.</p>

                <p>I returned a week later with a rake, pruning shears, my crash pad, shoes, and chalk.</p>
                <p>After a few hours of raking and trimming I had cleared the base of several boulders and I began to establish a few routes.</p>

            <Link href='/'>
                <a className='text-white hover:text-indigo-500'>
                    <p>Take me back home</p>
                </a>
            </Link>
            
            </div>
            <Footer />
        </div>
    )
}

export default Bouldering;