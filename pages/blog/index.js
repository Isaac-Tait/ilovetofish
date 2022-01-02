import React from 'react';
import Link from 'next/link';

const Blog = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className="text-2xl bg-slate-500 flex flex-row justify-center text-neutral-100 rounded-xl mt-1">Venue for my thoughts, adventures, and ideas. Read at your own risk...</h1>
            <Link href="/blog/bouldering">
                <a className='underline text-zinc-500'>
                <p>Boulders</p>
                </a>
            </Link>
            <p>I like to climb rocks. So, imagine my excitement when I discoverd a collection of boulders about five minutes from my house...</p>
        </div>
    );
}

export default Blog;