import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Breadcrumbs from 'nextjs-breadcrumbs';

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const FatherSon = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <Header />
            <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>A father son ski adventure in southern New England</h1>
                <p
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >Tuesday morning dawned cold and cloudy. The thought of being stuck at home all day was just too repulsive. So, I packed up our gear, kissed the wife goodbye, and headed north with my son for a cross country ski trip. We had three days to ski before the warm rain settled in for at least a week. With two years of La Nina weather back to back you have to squeeze in every opportunity to ski as the snowpack is not guaranteed to be around next week. I shared many photos and{' '}<Link 
                    href="https://www.instagram.com/iloveto.fish/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >trip reports on my Instagram</Link>&nbsp;account. So, I will refrain from re-sharing here...</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1672491905/new_england-rhode_island-beach_life-skiing-snow-vermont-massachusetts-nordic_skiing-cross_country_skiiing_x4r86d.jpg'
                        height={750}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>The day after returning from our ski trip we headed to the beach. New England is a spectacular place!</p>
                <p className='text-center mt-4'>Check out this link if you want to see{' '}<Link 
                    href="https://photos.app.goo.gl/D7WomVmJKCJ7KpAE6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >more photos from the trip</Link>&nbsp;that did not make it into my Instagram feed.</p>
            </div>
            <div className='max-w-6xl mx-auto'> 
                <Comment />
            </div>
            <Footer />
        </div>
        )
    }

    export default FatherSon;