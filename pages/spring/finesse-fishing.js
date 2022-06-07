import React from 'react';
import Image from 'next/image'

import Breadcrumbs from 'nextjs-breadcrumbs';

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Finesse = () => {
    return (
        <div className='heropattern-topography-neutral-100'>
            <Header />
            <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>Fishing with a finesse spin setup</h1>
                <p
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >Discovering tenkara in 2013 launched my love affair with fishing. I was 30, perhaps a little late in life to &quot;discover&quot; a love for fishing but in my defense I found fishing to be a pretty boring way to pass time. I had been fishing a few times before then. The first time I went fishing was when I was four or five. I caught a blue gill in the pond on my mother&#39;s aunts property in New Jersey.</p>
                <p>However, that style of fishing never really intrigued me. Too much standing around in one spot and I always felt bad for the worms that I was using as bait.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881436/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-the_best_pool_I_have_found_in_Connecticut_so_far_sp0zpk.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>Hands down the best fishing hole I have found in Connecticut and top three of my entire life...Where is it? I am not telling.</p>
                <p>Then I discovered tenkara and it was anything but boring (and my vegan heart was happy to save the worms <span role="img" aria-label="seedling">&#127793;</span>&nbsp;). Then I moved to Japan. The Japanese mountain streams that I discovered there were the birth place of tenkara as we know it in the USA today <span className='italic text-sm'>(btw you can read all about my adventures in Japan by clicking Fallfish Tenkara in the menu above <span role="img" aria-label="finger pointing up">&#128070;</span>&nbsp;)</span>. I was hooked (pun intended).</p>
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
                <p>It may sound a slightly elitist to say this but tenkara is a method of fishing to catch trout in medium and high gradient smaller cold streams. Anything else (lakes, big water, low gradient, warm water, and any other kind of fish than trout is &#39;fixed line fishing&#39;, not tenkara...). Trust me I am fully aware of the irony in the name for my site Fallfish Tenkara in the light of previous statement. Some people get really bent out of shape about this topic but to say that tenkara is not just about mountain stream fishing for trout is redefining something that has been around for a lot longer than you or I. The roots of tenkara have been growing into the austere mountain scapes of Japan for hundreds, maybe thousands of years. To suddenly appropriate the pastime and redefine it is just disrespectful to those who have come before... My $0.02 - take it or leave it (but deep down you know I am right).</p>
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
                <p className='flex justify-center text-xs italic mb-2'>Wow, just wow!</p>
                <p>At first I was fishing with ultra light Rapalla lures. I replaced the treble hook with a single hook (I crush the barb). My go to hook is the <a 
                    href="https://vmcpeche.com/products/light-inline-single" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >VMC Inline Single X Strong-Large Ring Size 2</a>&nbsp;(7237CB). It is a salt-water hook but I have found that those hooks retain their sharpness and resist corrosion a lot better than the fresh water variants... However, I got tired of breaking the little clear plastic &quot;tongues&quot; off of the six to seven dollar lures. So, I switched to ultra-light Japanese spoons. They drive the fish nuts and are nearly impossible to break even if I cast to far and the lure bounces off of a few rocks on the far side of the river.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881357/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-nice_spot_xhrdu2.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p>A few months ago I came across <a
                    href="https://baitfinesseempire.com/product-category/lines/braid/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >Bait Finesse Empire</a> on Instagram and I picked up a few different braid lines from them. Currently I am using Kastking Kastpro 13X Finesse Braided Line at 6lb test.</p>
                <p>I love this line, it casts effortlessly and lobs even my lightest spoons (around 0.5 grams) an impressive distance. The only issue I have with it is the chartreuse color fades very quickly. After a few times out it is more of a pale yellowish green. This makes it a little harder for me to see in awkward light conditions but then again it is a little harder for the fish to see too...</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881413/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-wild_flowers_ehhj3h.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p>I use about 1 meter of 5x tippet at the end of the braided line to tie my lures to. For my rod I am using the Daiwa Wise Stream 45UL-3. It is a great rod, coming in at a crazy 75 grams without the reel. For the reel I am using the Daiwa Crest 2004H. I really like my setup. I am considering getting a collapsible rod so that I can leave my reel attached and just expand and collapse it as needed, that way I will not have to setup and tear down my rod so much when I need to transport it.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881361/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-old_tree_d8951s.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p>I still carry my tenkara rod and paraphernalia with me on the river but the rivers around my neck of the woods tend to be bigger and lower gradient and the time it takes to segment the river and fish all possible fish holding spots with a tenkara rod versus a spin rod is huge. In a 4-6 hour day on the river I can cover one to two miles of water with my spin rod. With my tenkara rod I am lucky to get half that.</p>
                <p>Another interesting thing I <a
                    href="https://www.finesse-fishing.com/finesse-spin-fishing.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >read</a> and than found to be quite true is that larger fish are piscivores rather than insectivores. I put this hypothesis to the test last week when I fished a very nice pool with my tenkara rod. No matter my presentation - dead drift, pulsing, cross current, floating on the surface, or letting the white water pull it down deep I could not entice any action from the fish I was certain were there. Then I switched to my finesse rod and the first cast into the pool I hooked a 14&quot; wild Brook Trout.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881345/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-spring_csb5xa.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p>On another trip I fished most of the day with my spin rod and caught and released four or five trout in the 12-15 inch range. When I switched to my tenkara rod the biggest fish I caught was 5 inches. I do not consider myself to be a fish snob like some anglers who get visibly upset when they catch small fish instead of the monster ones they hope to garner a multitude of &quot;likes&quot; from on their social media channels. I do not mind catching small fish, I just feel bad when I catch the small ones because it tends to be a lot harder to get even a barbless single hook out of their mouths and the shock to their system of being out of the water often results in their demise. I would rather catch a slightly larger fish that I can easily release within a second or two... When I am fishing with spin rod I will often see small fish chasing my spoon and even nipping at it but the larger hook makes it very difficult to hook them so they often get away clean from the chase without suffering any harm from being caught. This is much better for the overall health of the fish population in the stream imho.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1652881384/Finesse/finesse_bait_fishing-new_england-jdm_fishing_gear-ultra_light-spoons-adventure-fish_lqwfoe.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p>So, yea a lot of thoughts and opinions in this rather long blog post. I guess I had more to say than I thought when I set off to write this blog post... Now I guess I should implement a comment system for this site so you can tell me how much you agree with me...<span role="img" aria-label="laughing emoji">&#129315;</span></p>
            </div>
            <div className='max-w-6xl mx-auto'> 
                <Comment />
            </div>
            <Footer />
        </div>
        
        )
    }

    export default Finesse;