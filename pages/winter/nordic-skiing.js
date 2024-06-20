import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Breadcrumbs from 'nextjs-breadcrumbs'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function NordicSkiing() {
  return (
    <div className="heropattern-topography-neutral-100">
      <Header />
      <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-emerald-600">
          Prospect Mountain Nordic Skiing
        </h1>
        <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-line:uppercase first-line:tracking-widest">
          I wanted to go on a family ski trip last season but COVID made things difficult and the
          snow in southern California was not very inspirational. Then there were the astronomical
          prices...
        </p>
        <p>
          I had always been intrigued with Nordic skiing (aka cross country skiing) and when we
          moved to New England with a much more reliable snow pack I decided the 2021/22 season was
          the perfect time to give it a try.
        </p>

        <p>
          The prices are much more reasonable too which is{' '}
          <Link
            href="https://prospectmountain.com/prices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline hover:text-indigo-400"
          >
            great
          </Link>
          . We stayed in town at the Catamount Hotel ($70 a night and 4.5+ star average reviews) and
          ate some great vegan/vegetarian food too. Including food, lodging, gas, and lessons we
          spent less for a weekend of nordic skiing then we would have spent on tickets and rentals
          alone at the nearby Mount Snow.
        </p>

        <Carousel showArrows={true} showThumbs={false} className="mb-1">
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-firstDay_pemzgd.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-sunlight_hxubuj.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-happy_hzer1z.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297351/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-smile_i5qodq.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-nicePhoto_ryyi7b.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297349/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-lodge_ubjyni.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297352/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-intown_qriaug.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297350/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-veganBreakfast_noxect.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297351/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-smile_i5qodq.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297353/Prospect%20Mountain/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-family_fphlrr.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
        </Carousel>
        <p className="mb-10 flex justify-center text-xs italic">
          Image Carousel (Click the arrows on the right or left to scroll through the photos).
        </p>
        <p>
          I think I am done paying astronomical prices for downhill skiing. Every year the slopes
          are getting more and more crowded (I used to be able go midweek and have no lift lines,
          that is no longer true). It seems every year I have more and more close calls with idiot
          snow boarders trying to prove something for the Instagram followers too.
        </p>
        <p>
          With Nordic skiing you do not have all that drama... at least for now. Hopefully the
          exertion required will keep the average American away. Only time will tell.
        </p>

        <div className="flex justify-between">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297375/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-running_c7glqx.jpg"
            height={725}
            width={540}
            className="rounded-lg"
            alt={'Project'}
          />
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297375/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-cabin_s1o58j.jpg"
            height={725}
            width={540}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>

        <div className="mt-2 flex justify-between">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297375/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-lesson_ibuqqz.jpg"
            height={725}
            width={540}
            className="rounded-lg"
            alt={'Project'}
          />
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643297374/Prospect%20Mountain/vertical/nordicSkiing_ProspectMountain-Vermont-Bennington-skiing-crossCountry-_altiav.jpg"
            height={725}
            width={540}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}
