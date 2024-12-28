import Image from 'next/image'
import Link from 'next/link'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Autumn() {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">
          Autumn Equinox
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="first-letter:text-slate-900 rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          Well my second fall in Connecticut started on a good note. I was able to get out for a
          great, albeit, chilly day of fishing on a river not too far from home. Last year my first
          blog on this site was about a local{' '}
          <Link
            href="fall/bouldering"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            bouldering
          </Link>
          &nbsp;area I had discovered.
        </p>
        <p>
          Well this week I discovered a new field of boulders while I was out scoping a new area to
          do some kayak (and maybe stream) fishing. I am looking forward to returning to the area
          soon with my bouldering gear and do some exploring...
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375163/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-clouds_l1d8zp.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">What a day!</p>
        <p>
          I shot this video with my new iPhone 14 Pro. I have been having a lot of fun shooting some
          great footage with my new tool. It is by far and away much better than my iPhone 11 was.
        </p>
        <div className="mb-4 flex justify-center">
          <iframe
            src="https://player.cloudinary.com/embed/?public_id=fallInConnecticut%2Fkayak-clouds&cloud_name=mountaintopcoding-127956&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
            width="640"
            height="480"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          ></iframe>
        </div>
        <p>
          Last week my son brought home a cold from school. Of course he was sick one night (while I
          was trying to sleep) and then a few days latter I got it and I have been feeling pretty
          cruddy for the last five or six days. Not bad enough though to keep me inside.
        </p>
        <p>
          I managed several trips in the past week or so. One to a large lake that had not one but
          two rivers flowing into it. The first river I saw several large bass and came across an
          absolutely beautiful rocky pool. The fish catching action was slow though so I hoped back
          in the kayak and made my way to the second river. Along the way I fished the lake for a
          bit and caught & released several nice Perch and Sunfish.
        </p>
        <p>
          The second river was loaded with Perch and I found that if I backed the tension on my bait
          casting reel ALL the way I could lob my lightest lure. That lure was driving the fish nuts
          and I had quite a bit of luck on the second river. My hands were freezing though and I had
          quite a bit of back tracking to do to get back to my truck in time so that I would not be
          late to get my son from school. So, I had to cut the fishing short and head back.
        </p>

        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375166/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-random_mirror_xwjg2p.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          I found this random mirror in the woods, and of course I had to snap a photo...
        </p>
        <p>
          Last week, when Hurricane Fiona was making its way north along the United States&#39; east
          coast, New England was graced with a surprise storm out of Canada that also brought with
          it a cold front (this storm also kept Fiona out in the ocean...). I watched with amazement
          as my home weather station&#39;s thermometer showed a precipitous drop of 14 degrees
          (Fahrenheit) in just twenty minutes or so.
        </p>
        <p>
          The next day, despite the unseasonably cool weather I went fishing. I was not expecting
          too much action due to the sudden change in temperature. And so, I was pleasantly
          surprised when I landed numerous fish. It was a great day out and quite chilly. Every spot
          in the river where the canopy opened up and let in the sun I was very grateful for. I put
          together a video of the escapade. You can watch it below
        </p>

        <div className="mb-4 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C8SZPr1D-yc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <p className="mb-2 text-center">
          Lastly, I will leave you with a collage of photos taken during the last week or so of my
          travels around Connecticut in search of my favorite quarry - fish!
        </p>

        <Carousel showArrows={true} showThumbs={false} className="mb-1">
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375167/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-nice_pool_tgfklo.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375166/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-kayak_tlhtgb.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375161/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-_wpwxhj.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375164/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-river_nit7f2.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375164/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-reflection_c1buyc.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375163/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-clouds_l1d8zp.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375163/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-dead_tree_kxwr3q.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1664375163/fallInConnecticut/new_england-connecticut-tenkara-ultra_light_finesse-fishing-bait_casting-bait_caster-kayak-lake_fishing-river_fishing-adventure-exploration-shrooms_mmw4la.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
        </Carousel>
        <p className="mb-10 flex justify-center text-xs italic">
          Image Carousel (Click the arrows on the right or left to scroll through the photos).
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}
