import React from 'react';
import Link from 'next/link';

import Footer from '../components/footer';

const Skiing = () => {
    return (
        <div className='heropattern-topography-violet-100'>
            <header className='w-full ml-2 flex flex-wrap justify-between'>
                <div className='w-1/3'>
                    <h1 className="text-6xl font-bold">
                        <Link href={'/'}>
                            <a className="text-amber-400">iloveto.fish</a>
                        </Link>
                    </h1>
                </div>
                <div className='w-2/3 flex my-auto justify-between'>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/prose'}>
                            <a className="text-fuchsia-400 hover:text-indigo-500">Prose</a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold'>
                        <Link href={'/landskein'}>
                            <a className="text-rose-400 hover:text-indigo-500">Landskein</a>
                        </Link>
                    </h3>
                    <h3 className='text-xl font-semibold mr-4'>
                        <Link href={'/veganism'}>
                            <a className="text-lime-400 hover:text-indigo-500">Veganism</a>
                        </Link>
                    </h3>
                </div>
            </header>
            <div className='max-w-6xl mx-auto h-screen'>
                <h1 className="text-2xl bg-teal-400 flex flex-row justify-center text-neutral-100 rounded-xl mt-1">Gliding on snow...</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Skiing;