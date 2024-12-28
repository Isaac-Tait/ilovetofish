import Link from 'next/link'
import Image from 'next/image'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MountainLaurel = () => {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">
          Mountain Laurel
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="first-letter:text-slate-900 rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          I have been following the bait finesse scene more closely over the last few months. I have
          never lived somewhere like Connecticut with such a plethora of lakes and so my spin rod
          only got pulled out of the closet a handful of times in a{' '}
          <Link
            href="https://blog.mountaintopcoding.com/three-years-of-web-development"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            season
          </Link>
          .
        </p>
        <p>
          That quickly changed though the first month in New England when I fished every day for
          five weeks and all but one or two of those outing were with my spin rod.
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561702/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-sleeping_butterfly_uc78ro.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561702/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-sleeping_butterfly_uc78ro.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p className="flex justify-center text-xs italic">
          A butterfly sleeping in a cluster of Mountain Laurel blooming over a babbling brook
        </p>
        <p>
          Another thing I was not accustomed to until moving here was the lower gradient nature of
          the streams and rivers in eastern Connecticut. This lower gradient geography makes for
          some great finesse rod angling{' '}
          <span className="text-sm italic">
            (I do not need to rehash all this again, if you care to read about my thoughts on
            fishing low gradient water read{' '}
            <Link
              href="https://iloveto.fish/spring/finesse-fishing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 text-teal-400 underline"
            >
              this
            </Link>{' '}
            article I wrote)
          </span>
          . For the past few months I have been using my trusty old Diawa spin rod but then one day
          I picked it up and the reel had completely seized up. It had been running pretty rough
          even after a full tear down, cleaning, and re-lube - so, I decided it was time for a new
          reel.
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561704/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-blue_skies_yeyicr.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561704/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-blue_skies_yeyicr.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p>
          I decided to see what all the hype was and purchased a KastKing Zephyr BFS reel. I took it
          out to practice at a beautiful lake about 25 minutes from my home. I quickly realized how
          much I had to learn. I spent most of the time untangling birds nests. Slowly but surely
          though I started to get the hang of it. The next day I jumped into the
          &quot;deep-end&quot; so to speak and headed out to check out some new water I had been
          eyeballing on Google Maps.
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-happy_river_ltrent.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-happy_river_ltrent.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p>
          I love fishing harder to access water. The less roads a river has near it or crossing it
          the better. I do not mind hiking several miles just to access low pressure water to fish
          for wild (or maybe even native) trout.
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-babbling_brook_ej4rgk.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-babbling_brook_ej4rgk.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p>
          When I arrived I almost got back in my truck and left. The water was very thin, which I
          found very surprising as it had quite a few streams that converged in the headwaters to
          form this river. Reluctantly I decided to at least check it out for five or ten minutes.
          Just out of sight of the road I came across a HUGE pool that was in spots chest deep and
          several hundred feet long!
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-fern_meadow_ekelrq.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-fern_meadow_ekelrq.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p>
          After the pool the brook thinned out again and I almost turned around but I could not
          shake the notion that maybe there was some more great pools higher up. So, I pressed on.
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-brook_trout_lkpx5a.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-brook_trout_lkpx5a.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p>
          After a bit of hiking upstream I came across exquisite small pool after exquisite small
          pool. It took quite a few casts to get my aim right but at each pool I caught or almost
          caught the most vibrant, spunky, beautiful wild Brook Trout
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-lunch_edqwh7.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561703/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england-lunch_edqwh7.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p>
          I was glad that I had decided to press on both times. This creek was full of surprises. I
          saw numerous frogs, crawfish, and there were several hawks. Not to mention the epic dragon
          fly spectacle as I egressed back to my truck.
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561702/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england_dragon_fly_vagwzt.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561702/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england_dragon_fly_vagwzt.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p>
          Down lower the brook was less constrained by trees, bushes, and foliage. However, as I
          pressed on upstream the sides of the river got closer and closer. Then around a bend I
          came upon &quot;walls&quot; of Mountain Laurel growing on both sides of the river and over
          it!
        </p>
        <Link
          href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561702/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england_lafsdr.jpg"
          legacyBehavior
        >
          <div className="flex justify-center">
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1654561702/mountain-laurel/mountain-laurel-voluntown-tenkara-bfs-finesse_fishing-connecticut-new_england_lafsdr.jpg"
              height={562}
              width={750}
              className="rounded-lg"
              alt={'Project'}
            />
          </div>
        </Link>
        <p className="mb-4">
          It was an absolutely surreal day. I came across a few deer hunter camps too but they
          looked pretty ragged. I do not think they have been used for a few seasons... At my high
          point I found a nice flat rock next to the water and had a late lunch of canned dolmas,
          trail mix, and hot miso soup. I love it here in Connecticut between the skiing in the
          winter and fishing in the spring, summer, and fall I do not think I will ever leave...
        </p>
        <hr />
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default MountainLaurel
