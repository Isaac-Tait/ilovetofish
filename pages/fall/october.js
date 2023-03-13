import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Comment from '../../components/Comment';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function October() {
  var Carousel = require('react-responsive-carousel').Carousel;
  return (
    <div className='heropattern-topography-neutral-100'>
      <Header />
      <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
        <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>
          Lake Fishing in October
        </h1>
        <p
          className='first-line:uppercase first-line:tracking-widest
                first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                first-letter:mr-3 first-letter:float-left'
        >
          We arrived in Connecticut after a long&nbsp;
          <Link
            href='https://macadamgrinding.com/posts/connecticut/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-amber-400 hover:underline'
          >
            cross country road trip
          </Link>
          &nbsp;during the first week of October. The trees were still
          green and the water was incredibly warm. We were living on
          an island in our RV waiting for our home to finish being
          built. So, it was quite easy to get out and fish everyday.
          We even had our own private dock!
        </p>
        <p className='mt-1'>
          Due to the high amount of rain over the previous month the
          trees were still green so we got to witness the leaves
          turning from green to gold, orange, yellow, and red. It was
          magnificent!
        </p>
        <Carousel
          showArrows={true}
          showThumbs={false}
          className='mb-1'
        >
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045849/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-epic_spot_2_ygpn9j_f1vu7d.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045847/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-pine_tree_water_qsczvz_pk6ayn.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045846/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-clouds_and_light_str2nc_bqj4oz.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045844/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-lily_pad_uozvlb_d7vaf4.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045849/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-_flhnqo_ogwdxw.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045849/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-crawfish_pznlqo_jcmyqd.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045846/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-another_fish_wy9abi_bbvqgj.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>

          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045844/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-clouds_udrovz_thb3a8.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045845/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-pickerel_ne8kch_so2pdb.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045843/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-clouds_3_vmloxr_n48cjl.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
          <div>
            <Image
              src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643045846/Lake%20Fishing/ilovetofish-connecticut-new_england-fishing-tenkara-happy-kid_ioaikx_bqaioc.jpg'
              width={1000}
              height={750}
              alt='photo'
            />
          </div>
        </Carousel>
        <p className='flex justify-center text-xs italic mb-10'>
          Image Carousel (Click the arrows on the right or left to
          scroll through the photos).
        </p>
      </div>
      <div className='max-w-6xl mx-auto'>
        <Comment />
      </div>
      <Footer />
    </div>
  );
}
