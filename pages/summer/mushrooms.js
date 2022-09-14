import React from 'react';
import Image from 'next/image'

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
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>Mushroom foraging and wild trout</h1>
                <p
                    className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
                >This week we got some more much needed rain. In the past seven days we have gotten over seven inches of rain. The rain has restored the lakes and rivers to late spring levels and consequently the fishing has improved dramatically. I had a great day on the{' '}<a 
                    href="https://iloveto.fish/summer/kayaking" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >kayak</a>, followed by two epic days of stream fishing (something I have sorely missed while Connecticut was going through the drought for the last two and a half months).</p>
                <p className='my-2'>In the last few days the mushrooms have been popping up with a vengeance and I have had a lot of fun foraging for them. Here are some of the ones I came across during my most recent excursion.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163549/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-polypores-tree_trunk_j1zjir.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>I have been unable to identify these mushrooms. If you know please comment below.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163551/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-cortinarius_violaceus-violet_cort_z9xfgm.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>I believe these are Violet Cort a.k.a. Cortinarius violaceus</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163551/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-tyromyces_chioneus-white_cheese_polypore_epcfcu.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>Possibly White Cheese Polypore a.k.a. Tyromyces chioneus</p>
                <p>On my fishing kayak trip last week I brought to hand and released two very nice Bass and had at least another four or five that put up quite the fight and got off. Switching to the {' '}<a 
                    href="https://www.eurotackle.net/collections/micro-finesse" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >Eurovision Micro Finesse Jighead with soft lures</a>&nbsp;has really upped my fishing game since I added them to my tackle box.</p>
                <p>I found a nice island on the lake and stopped to eat lunch and explore the island a bit. There was an old fire pit and some great spots for a hammock. Perhaps this winter I could ice skate to the island...</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163551/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-cantharellus_cinnabarinus-cinnabar_red_chanterelle_wfersy.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>Very young Cinnabar Red Chanterelle a.k.a. Pycnoporus cinnabarinus just starting to sprout</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163550/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-river_msf8zv.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>Unidentified as of yet - but check out that misty river in the background (it is loaded with wild Brook and Brown trout)</p>
                <p>After lunch I paddled back to the truck and drove a few minutes down the road to check out the condition of some of the local rivers. The five plus inches over the previous 48 hours had transformed them. I was overjoyed and had quite a bit of fun poking around with my fishing rod. I did not catch anything but the rivers were still in flood stage so I was not expecting to have any bites.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163549/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-hemlock_varnish_shelf-ganoderma_tsugae_vqrb0n.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>Could this be Hemlock Varnish Shelf a.k.a. Ganoderma tsugae??</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163550/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-armillaria_mellea-honey_mushroom_ozukdj.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>I believe these are Honey Mushrooms a.k.a. Armillaria mellea there were numerous clumps of them at the base of several oaks all in one area. It was pretty amazing.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163548/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology_beqjm5.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>I found this Beefsteak Polypore a.k.a. Fistulina hepatica in my yard.</p>
                <p>A few days later I rode my{' '}<a 
                    href="https://macadamgrinding.com/posts/connecticut/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >gravel bike</a>&nbsp;out to my favorite river. The water was much higher now but still not up to its normal levels. Also many of the springs and seeps on its banks were dry. I guess five plus inches was not enough to get the springs flowing. Luckily there was another good storm on the way that I was hoping would change that.</p>
                <p>I stopped at a very nice pool to soak in the striking blue skies juxtaposed against the vibrant green trees while I ate a can of Trader Joes Giant Baked Beans. After my delicious lunch I did a bit of yoga and meditation on my flat rock perch listening to the water cascading over the rocks. When I was able to pry myself off of my sun soaked rock I began wading upstream again. I came across a HUGE turtle and then caught and released several nice sized Fallfish. It was a wonderful afternoon. The weather was perfect and the riding was superb.</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163549/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-chicken_mushroom-laetiporus_sulphureus_zj59fo.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>Could this be a Chicken Mushroom a.k.a. Laetiporus sulphureus? </p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163549/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-unidentified_rsx4io.jpg'
                        height={562}
                        width={750}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>This one seems to be turning into slime from the rain or perhaps it is a Jelly Fungi?</p>
                <p>A few days later we got another huge storm. The weatherman predicted around 0.30 inches. We ended up getting almost 1.5 inches. The lion-share of it fell in about one hour. So, the roads were pretty tore up but that did not stop me from heading out to another river. My last river fishing expedition had returned zero trout and I was anxious to see if they had survived the drought. Earlier this year I had fished this river and caught and released over a dozen beautiful Brook Trout.</p>
                <p>When I arrived it was still raining pretty hard so I cinched the drawstrings on my rain jacket hood and began picking my way upstream. The fishing on this particular stream is not very good down low. You have to get up higher where the lazy anglers laziness gets the better of them and they turn around. Then go past some uninteresting flat water and on past another promising pool or two and then you get into the good water.</p>
                <p>Well I got to the good water and I did not catch let alone see a single fish. I caught a small Fallfish. I was giving up hope and becoming quite dejected thinking the trout had not survived the drought. I resolved to fish just one more hole before calling it a day and heading home. On my fourth and final cast into the pool my lure got stuck. I gave it a good tug to try and dislodge it when suddenly my rod went berserk in my hands. After a brief but spirited fight I brought to hand an absolutely gorgeous wild Brown Trout. She was pretty thin but easily 12-14 inches long. I let her go quickly with a bit of eye ball sweat streaking my cheeks. I was so happy to see that the trout had survived our near record breaking summer heatwave/drought!</p>
                <div className='flex justify-center'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1663163550/mushroomsNewEngland/new_england-connecticut-mushroom-foraging-fungi-macrofungi-mycology-unidentified_one_zz5nlu.jpg'
                        height={750}
                        width={562}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
                <p className='flex justify-center text-xs italic mb-2'>Not sure what kind this one is but I really like how long and slender the stem is.</p>
            </div>
            <div className='max-w-6xl mx-auto'> 
                <Comment />
            </div>
            <Footer />
        </div>
        )
    }

    export default Blank;