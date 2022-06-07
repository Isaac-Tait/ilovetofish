import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Thanks = () => {
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
                <div className='flex flex-col justify-center content-center h-96'>
                    <h2 className='font-semibold text-2xl text-center text-red-500'>Thank you</h2>
                    <p className='text-center font-semibold text-amber-400'>Your email has been received</p>
                </div>
            </div>
            <div className='fixed bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
};

export default Thanks;