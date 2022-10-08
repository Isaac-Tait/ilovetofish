import Link from 'next/link'

import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <div className='heropattern-bubbles-neutral-100 h-screen'>
            <Header />
            <header className='lg:flex lg:flex-wrap lg:justify-center mx-1'>
                <div className='lg:w-2/3 flex my-auto justify-between'>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/spring'}>
                            <a className="text-lime-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'flower-daffodil']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/summer'}>
                            <a className="text-rose-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'cloud-sun-rain']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold'>
                        <Link href={'/fall'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'leaf-maple']} />
                            </a>
                        </Link>
                    </h3>
                    <h3 className='text-2xl font-semibold mr-4'>
                        <Link href={'/winter'}>
                            <a className="text-teal-400 hover:text-indigo-500">
                                <FontAwesomeIcon icon={['fal', 'snowflakes']}/>
                            </a>
                        </Link>
                    </h3>
                </div>
            </header>
            <h2 className='font-semibold text-2xl text-center text-red-500'>How to get a hold of me...</h2>
            
            <p>The best way to reach me is through my <a 
                href='https://www.instagram.com/iloveto.fish/' 
                target="_blank" 
                rel="noopener noreferrer"
                >Instagram</a>&nbsp;account. Cheers!</p>
            
            <div className='fixed bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
};