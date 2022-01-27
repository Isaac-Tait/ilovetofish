import React, { useState, useCallback } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer'

export default function NordicSkiing() {
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
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-firstDay_pemzgd.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-sunlight_hxubuj.jpg',
            width: 6,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-happy_hzer1z.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297351/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-smile_i5qodq.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-intown_qriaug.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-nicePhoto_ryyi7b.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297349/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-lodge_ubjyni.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297350/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-veganBreakfast_noxect.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297351/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-smile_i5qodq.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297353/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-family_fphlrr.jpg',
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
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} className='w-20' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} className='w-20' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} className='w-20' />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold mr-4'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} className='w-20' />
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>Prospect Mountain Nordic Skiing</h1>
                <p>I wanted to go on a family ski trip last season but COVID made things difficult and the snow in southern California was not very inspirational. Then there were the astronomical prices...</p>
                <p>I had always been intrigued with Nordic skiing (aka cross country skiing) and when we moved to New England with a much more reliable snow pack I decided the 2021/22 season was the perfect time to give it a try.</p>
                
                <p>The prices are much more reasonable too which is{' '}<a 
                    href="https://prospectmountain.com/prices/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='underline text-teal-400 hover:text-indigo-400'
                >great</a>. We stayed in town at the Catamount Hotel ($70 a night and 4.5+ star average reviews) and ate some great vegan/vegetarian food too. Including food, lodging, gas, and lessons we spent less for a weekend of nordic skiing then we would have spent on tickets and rentals alone at the nearby Mount Snow.</p>
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
               
                <p>I think I am done paying astronomical prices for downhill skiing. Every year the slopes are getting more and more crowded (I used to be able go midweek and have no lift lines, that is no longer true). It seems every year I have more and more close calls with idiot snow boarders trying to prove something for the Instagram followers too.</p>
                <p>With Nordic skiing you do not have all that drama... at least for now. Hopefully the exertion required will keep the average American away. Only time will tell.</p>
            
                <div className='flex justify-between'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297375/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-running_c7glqx.jpg'
                        height={725}
                        width={540}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297375/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-cabin_s1o58j.jpg'
                        height={725}
                        width={540}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>

                <div className='flex justify-between mt-2'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297375/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-lesson_ibuqqz.jpg'
                        height={725}
                        width={540}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297374/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-_altiav.jpg'
                        height={725}
                        width={540}
                        className='rounded-lg'
                        alt={"Project"}
                    />
                </div>
            </div>
            <Footer />
        </div>
        )
    }