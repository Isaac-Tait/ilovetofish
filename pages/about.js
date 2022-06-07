import Link from 'next/link'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
H
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div className='heropattern-bubbles-neutral-100 h-screen'>
            <Header />
            <header className='lg:flex lg:flex-wrap lg:justify-center mx-1'>
                
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-3xl font-semibold'>
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-3xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-3xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-3xl font-semibold mr-4'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']} />
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='max-w-6xl mx-auto px-1'>
            <h2 className='font-semibold text-2xl text-center text-red-500'>About the author</h2>
                <p>My name is Isaac Tait. I love to fish. I also love trail running, cycling, skiing, rock climbing, && backpacking. I also enjoy cooking vegan meals at home and listening to jazz.</p>
                <div className='flex justify-center pt-10'>
                    <Image 
                        src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1644193725/profile/profile-pic_xnjych.jpg'
                        height={562}
                        width={750}
                        className='rounded-2xl shadow-xl'
                        alt={"Project"}
                    />
                </div>
            </div>
            <div className='flex justify-center'>
                <a href='https://twitter.com/Isaac_Tait_83' target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-500 h-12 w-12 pt-4" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                </a>              
            </div>
                
            <div className='fixed bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
};

export default About;