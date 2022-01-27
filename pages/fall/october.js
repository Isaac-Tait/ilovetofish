{/*
    This page utilizes a long dormant react photo gallery. 
    If you have any issues, or find any bugs, let me know!
    BTW - I also installed react-responsive-carousel which is still in development.
    - Isaac
*/}

import React, { useState, useCallback } from 'react';
import Link from 'next/link'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer'

export default function October() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    const photos = [
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045849/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-epic_spot_2_ygpn9j_f1vu7d.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045847/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-pine_tree_water_qsczvz_pk6ayn.jpg',
            width: 4,
            height: 3
        }, 
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045846/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-clouds_and_light_str2nc_bqj4oz.jpg',
            width: 3,
            height: 2
        }, 
        //Lilly Pad 👇🏼
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045844/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-lily_pad_uozvlb_d7vaf4.jpg',
            width: 5,
            height: 2
        }, 
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045849/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-_flhnqo_ogwdxw.jpg',
            width: 4,
            height: 3
        }, 
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045849/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-crawfish_pznlqo_jcmyqd.jpg',
            width: 4,
            height: 3
        }, 
        // Bass 👇🏼
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045846/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-another_fish_wy9abi_bbvqgj.jpg',
            width: 7,
            height: 3
        }, 
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045844/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-clouds_udrovz_thb3a8.jpg',
            width: 4,
            height: 3
        }, 
        //Pickerel 👇🏼
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045845/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-pickerel_ne8kch_so2pdb.jpg',
            width: 4927,
            height: 1000
        }, 
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045843/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-clouds_3_vmloxr_n48cjl.jpg',
            width: 4,
            height: 2
        }, 
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045846/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-happy-kid_ioaikx_bqaioc.jpg',
            width: 4,
            height: 3
        }, 
    ]
    return (
        <div className='heropattern-topography-neutral-100'>
            <header className='w-full ml-2 flex flex-wrap justify-between'>
                <Header />
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-xl font-semibold mr-4'>
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold mr-4'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} className='w-10' />
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
            <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>Lake Fishing in October</h1> 
            <p>We arrived in Connecticut after a long <a href="https://macadamgrinding.com/posts/connecticut/" arget="_blank" rel="noopener noreferrer" className='text-amber-400 hover:underline'>cross country road trip</a> during the first week of October. The trees were still green and the water was incredibly warm. We were living on an island in our RV waiting for our home to finish being built. So, it was quite easy to get out and fish everyday. We even had our own private dock!</p>
            <p className='mt-1'>Due to the high amount of rain over the previous month the trees were still green so we got to witness the leaves turning from green to gold, orange, yellow, and red. It was magnificent!</p>
                {/*The code for the gallery*/}
                <div>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            
            </div>
            <Footer />
        </div>
        )
    }