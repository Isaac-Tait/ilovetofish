import React from 'react';
import Link from 'next/link';

const Blog = () => {
    return (
        <div>
            <h1 className="text-2xl">Venue for my thoughts, adventures, and ideas. Read at your own risk...</h1>
            <Link href="/blog/bouldering">
                <a className='underline text-green-400'>
                <p>Boulders</p>
                </a>
            </Link>
            <p>I like to climb rocks. Recently I discoverd a collection of boulders about five minutes from my house...</p>
        </div>
    );
}

export default Blog;