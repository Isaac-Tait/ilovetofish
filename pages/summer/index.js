import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Summer = () => {
  return (
    <div className='heropattern-topography-neutral-100'>
      <Header />
      <header className='lg:flex lg:flex-wrap lg:justify-center mx-1'>
        <div className='lg:w-2/3 flex my-auto justify-between'>
          <h3 className='text-2xl font-semibold'>
            <Link href={'/spring'} legacyBehavior>
              <a className='text-lime-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faRainbow} className='h-10' />
              </a>
            </Link>
          </h3>
          <h3 className='text-2xl font-semibold'>
            <Link href={'/fall'} legacyBehavior>
              <a className='text-fuchsia-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faTree} className='h-10' />
              </a>
            </Link>
          </h3>
          <h3 className='text-2xl font-semibold mr-4'>
            <Link href={'/winter'} legacyBehavior>
              <a className='text-teal-400 hover:text-indigo-500'>
                <FontAwesomeIcon
                  icon={faSnowflake}
                  className='h-10'
                />
              </a>
            </Link>
          </h3>
        </div>
      </header>
      <div className='max-w-6xl mx-auto h-screen px-1'>
        <h1 className='text-2xl bg-rose-400 flex flex-row justify-center text-neutral-100 rounded-xl mt-1'>
          Summer
        </h1>
        <Link href='/summer/chanterelle-adventure' legacyBehavior>
          <a className='underline text-amber-500'>
            <p>Chanterelle Adventure</p>
          </a>
        </Link>
        <p>
          After a pleasant, yet jam packed, with yard work, 4th of
          July weekend I was itching to catch some fish...
        </p>
        <Link href='/summer/kayaking' legacyBehavior>
          <a className='underline text-amber-500'>
            <p>Have kayak, will travel</p>
          </a>
        </Link>
        <p>
          For the past month or two I have been dreaming about buying
          a kayak and using it to access water that had proven to be
          out of reach by foot. Well last week I found a really good
          deal for one on Craigslist and took the plunge...
        </p>
        <Link href='/summer/the-whites' legacyBehavior>
          <a className='underline text-amber-500'>
            <p>The White Mountains</p>
          </a>
        </Link>
        <p>
          Back in March of 2022 I skied, for four days in the White
          Mountains of New Hampshire. It was an epic trip and I got a
          small taste of what these mountains could offer in terms of
          fishing in the spring or summer. I knew I had to come back.
          Well I did come back in August of 2022 and I spent three
          wonderful days exploring the headwater streams of the White
          Mountains.
        </p>
        <Link href='/summer/mushrooms' legacyBehavior>
          <a className='underline text-amber-500'>
            <p>Mycologist in the making</p>
          </a>
        </Link>
        <p>
          Ever since my days of fishing in Japan I have been enamored
          with mushrooms. Then I moved to New England and mycology
          transitioned from interest to obsession.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Summer;
