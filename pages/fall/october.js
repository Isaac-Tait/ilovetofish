import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/header'
import Footer from '../components/footer'
import { mapImageResources, search, getFolders } from '../../lib/cloudinary';

export default function October() {
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
                <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center'>October</h1>
                <p>A collection of images of my fishing adventures </p>
            <h1 className='font-semibold'>Image Collections</h1>
                <div className='flex justify-center'>
                    <ul onClick={handleOnFolderClick}>
                        {folders.map(folder => {
                            return (
                            <li key={folder.path} className=''>
                                <button data-folder-path={folder.path}>{ folder.name }</button>
                            </li>
                            )
                        })}
                    </ul>
                </div>

                <h1 className='font-semibold underline'>Images</h1>
                <ul>
                    {images.map(image => {
                        return (
                        <li key={image.id}>
                            <a href={image.link} rel="noreferrer">
                            <div className='w-1/2 mx-auto'>
                                <Image width={image.width} height={image.height} src={image.image} alt="" />
                            </div>
                            </a>
                        </li>
                        )
                    })}
                </ul>            
            </div>
            <Footer />
        </div>
        )
    }