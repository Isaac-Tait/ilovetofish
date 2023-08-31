import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Breadcrumbs from 'nextjs-breadcrumbs'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Vacation = () => {
  return (
    <div className="heropattern-topography-neutral-100">
      <Header />
      {/* <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} /> */}
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-emerald-600">
          A summer to remember...
        </h1>
        <p
          className="first-letter:float-left first-letter:mr-3
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-line:uppercase first-line:tracking-widest"
        >
          I had a great life growing up, I really have nothing to complain about. That is until I
          was 15 or so. As far back as I can remember my mother struggled with{' '}
          <Link
            href="https://macadamgrinding.com/posts/year-of-the-ox/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline hover:text-indigo-400"
          >
            mental illness
          </Link>
          . Some days were better than others, other days were bad, and some days were just plain
          awful...Living in a strict Christian home left little room for outlets for my anger,
          frustration, and despair. So, I joined the Marines when I was 17.
        </p>
        <p className="mt-2">
          I had a lot of adventures with my dad growing up. We went to&nbsp;
          <Link
            href="/spring/pat-metheny"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline hover:text-indigo-400"
          >
            Joshua Tree National Park
          </Link>
          &nbsp;almost every weekend when it was not too hot to climb. When I was eight I backpacked
          to the summit of Mount San Gorgonio. When I was twelve I climbed Tahqitz. There were quite
          a few backpacking trips scattered in there and road trips to fun places too. Then my mom
          got to be too much for my dad to handle and he checked out. He was still around - just
          sleeping around...Do I blame him? No... My mom was a handful but it did contribute to a
          lot of drama at home...
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523582/summerVacation/bike_ride-june_vwuyrc.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Riding the local rail trail close to our home
        </p>
        <p>
          As my brother says: &quot;Life sucks... and then you die&quot; So, I decided to not delay
          and make my son&apos;s first summer vacation one for the record books (I was homeschooled
          - so the lines were blurred between summer vacation and well real life...), which is why I
          jumped at the opportunity to construct a great summer in a happy home with healthy parents
          before we fucked up our planet anymore or decided to get involved in WWIII or elect Trump
          as President again and descend into madness...
        </p>
        <h1 className="my-8 text-center text-2xl font-semibold">June</h1>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523581/summerVacation/rootbeer-june_mhwnbn.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Rootbeer in Portland, Maine</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523580/summerVacation/waterfall-june_aj7bsc.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Deep water soloing in Vermont</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523581/summerVacation/gravel_ride-june_donsli.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Riding gravel in Acadia National Park (where I also caught my first salmon)
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523582/summerVacation/ice_cream-june_cmwner.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Ice cream (lots of ice cream)</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523582/summerVacation/yard_work-june_wf4gu9.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Helping dada with yard work</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523582/summerVacation/beach-june_s7pnsp.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          We got a membership to our local beach and went every week we were in town
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523581/summerVacation/maine-june_nzdpzk.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Our hike around Jordan Pond in Acadia National Park
        </p>
        <h1 className="my-8 text-center text-2xl font-semibold">July</h1>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523635/summerVacation/kayak-july_oqwgzg.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          I got a fishing kayak for Father&apos;s Day/birthday
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523635/summerVacation/train-july_q7lcz4.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          We took the Amtrak from Connecticut to Newport News, VA to visit my Aunt/Uncle/Cousins/and
          Grandma
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523635/summerVacation/boat-july_ncrsod.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Tadashi&apos;s first boat ride</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523637/summerVacation/tubing-july_vtftxw.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Tadashi&apos;s first tubing experience!
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523636/summerVacation/vermont-july_uvwsog.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Then we went on a Father Son fishing trip in Vermont with some good friends
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523636/summerVacation/beaver-july_wtcc6x.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Hiked to a beaver dam...</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523637/summerVacation/bear-july_esyrmc.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          ... and saw a bear (Tadashi&apos;s first one)!
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523636/summerVacation/backyard-july_uhsvir.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Had numerous backyard cookouts/outdoor movie nights
        </p>
        <h1 className="my-8 text-center text-2xl font-semibold">August</h1>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523695/summerVacation/koi-aug_vlkxdn.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Flew to California...</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523695/summerVacation/grandma-aug_u0t7vk.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">... to visit great-grandma...</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523695/summerVacation/pool-aug_cv8yxi.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">... and swim in the pool</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523697/summerVacation/skateboard-aug_hlafym.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Learning to skateboard</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523697/summerVacation/firstKiss-aug_vfcls2.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Tadashi&apos;s first kiss</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523700/summerVacation/ninja-aug_agw00e.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Teenage Mutant Ninja Turtles!</p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523697/summerVacation/adventure-aug_ssdurm.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          After awhile dada got COVID and so the adventure&apos;s tapered off a bit and were closer
          to home...
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1693523696/summerVacation/nyc-aug_z7qodb.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'summerVacation2023'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Then he got better and we went to NY City. The End!
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default Vacation
