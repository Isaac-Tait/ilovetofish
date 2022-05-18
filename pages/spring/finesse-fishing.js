import React from 'react';
import Image from 'next/image'

import Breadcrumbs from 'nextjs-breadcrumbs';

import Header from '../components/header'
import Footer from '../components/footer'

const Finesse = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <Header />
            <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>Finesse Spin Fishing</h1>
                <p
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >Discovering tenkara in 2013 launched my love affair with fishing. I was 30, maybe a little late in life to &quot;discover&quot; a love for fishing. I had been fishing before but it was always with worms and standing in one spot, normally at a lake, for hours on end...T{' '} <a 
                    href="https://www.thatscandinavianfeeling.com/lifestyle/norwegian-concept-koselig" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >here</a>.</p>
                <p>Text</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881436/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-the_best_pool_I_have_found_in_Connecticut_so_far_sp0zpk.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Hands down the best fishing hole I have found in Connecticut and top three of my entire life...Where is it? I am not telling.</p>
            </div>
            <Footer />
        </div>
        )
    }

    export default Finesse;