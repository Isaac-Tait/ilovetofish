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
                >Discovering tenkara in 2013 launched my love affair with fishing. I was 30, maybe a little late in life to &quot;discover&quot; a love for fishing. Now I had been fishing before, my first fishing trip was when I was four or five. I caught a blue gill in the pond on my mother&#39;s aunts property in New Jersey.</p>
                <p>However, that style of fishing never really intrigued me. Too much standing around and I always felt bad for the worms that I was using as bait.</p>
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
                <p>Well then along came tenkara and it was anything but boring (and my vegan heart was happy to save the worms <span role="img" aria-label="seedling">&#127793;</span>&nbsp;). Then I moved to Japan. The Japanese mountain streams that I discovered there were the birth place of tenkara as we know it in the USA today <span className='italic text-sm'>(btw you can read all about my adventures in Japan by clicking Fallfish Tenkara in the menu above <span role="img" aria-label="finger pointing up">&#128070;</span>&nbsp;)</span>. I was hooked (pun intended).</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881445/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-grassy_island_ccikpr.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>A heavenly little spot...</p>
                <p>Now I may sound a little elitist to some but tenkara is catching trout in medium and high gradient smaller cold streams. Anything else (lakes, big water, low gradient, warm water, and any other kind of fish than trout is fixed line fishing, not tenkara...). Trust me I am fully aware of the irony in the name for my site Fallfish Tenkara in the light of previous statement. Some people get really bent out of shape about this topic but tenkara is about mountain stream fishing for trout. That is the roots of tenkara that have been growing into the austere mountain scapes of Japan for hundreds of years (it could be longer but no is really sure...).</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881429/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure_j4bmcf.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Wild trout streams are a special place</p>
                <p>What I am getting at is that tenkara is a great tool for catching fish in certain environment. In other environments, sure you may catch fish with a tenkara rod but is it the best tool for the job? In those &quot;other&quot; environments I utilize more appropriate tools.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881439/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-streamside_lunch_mzubd7.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Stream-side lunch - dolmas, miso soup, and homemade umeboshi onigiri (a.k.a pickled plum rice ball wrapped in dried seaweed).</p>
                <p>I have been looking high and low for high gradient small cold streams in Connecticut but so far I have found more medium size low gradient water that is on the fringe of barely cold enough to support trout. Do not get me wrong I LOVE the fishing here, it is magical - but it is not quintessential tenkara water. It is actually better suited for an ultra light finesse spin rod lobbing very light lures/spoons.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881345/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-moss_bl2g4r.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic'>Wow, just wow!</p>
                <p>To be continued...</p>
            </div>
            <Footer />
        </div>
        )
    }

    export default Finesse;