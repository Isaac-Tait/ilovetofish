import Image from 'next/image'
import Link from 'next/link'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Blank = () => {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">Trout</h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="first-letter:text-slate-900 rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          There is a stream not too far from my home that keeps beckoning me back despite the fact
          that all but one of the dozen or so times I fished it I caught a fish. It certainly is not
          the fish that keeps drawing me back but something{' '}
          <Link
            href="https://iloveto.fish/winter/new-england"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            else
          </Link>
          ...
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1651021449/Trout/connecticut-trout_fishing-tenkara-spin_fishing-ultralight-water_nbywfc.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">A particularly nice section</p>
        <p>
          The area feels very remote for most of its length with only two or three homes, no roads
          paralleling it, and only two bridges. You can feel like you are truly submersed in nature.
        </p>
        <p>
          The one time I caught trout in this river I had hiked into the middle section. The other
          ten or so times, where I did not catch any fish, I started at the point where it ends by
          joining another major river...
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1651021449/Trout/connecticut-trout_fishing-tenkara-spin_fishing-ultralight-nice_pool_pusa8d.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p>
          I was a little miffed that there were not any fish down lower, so I kept trying... Well
          the other day I decided to hike past all the great holes that look like they should hold
          trout but never had any when I visted.
        </p>
        <p className="mt-2">
          It was hard keeping my fishing rod in my{' '}
          <Link
            href="https://fallfishtenkara.com/zimmerbuilt-tailwaters-pack/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Zimmerbuilt pack
          </Link>{' '}
          but somehow I managed. I spotted two turtles but no fish (
          <span className="italic">
            except some surprise Tiger trout stockers down low...they were just trying to throw me
            off my game I know it
          </span>
          ).
        </p>
        <p>
          As I made my way upstream I came across a small spring fed tributary. This is where I
          pulled out my trusty{' '}
          <Link
            href="https://jdmtackleheaven.com/products/daiwa-wise-stream-45ul-3?variant=32188060434550"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Daiwa Wise Stream 45UL-3
          </Link>
          , and I brought to hand and released a beautiful 13&quot; wild Brook trout. I guess the
          lower section is too warm for trout (
          <span className="italic">
            there is also a few very wide and shallow spots with minimal tree cover that I think
            contribute to warming the water too much in the lower sections of this river...
          </span>
          ).
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1651021452/Trout/connecticut-trout_fishing-tenkara-spin_fishing-ultralight_rtdmct.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          One of those wide and shallow sections down low that I think makes the water too warm down
          stream for trout
        </p>
        <p>
          As I continued upstream I saw more fish. I was having some issues with my reel causing
          some horrendous rats nests. I was lobbing a 0.5 gram spoon with 2.5lb test nylon line. So,
          I missed several fish because of that.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1651021448/Trout/connecticut-trout_fishing-tenkara-spin_fishing-ultralight-selfie_hlw79h.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p>
          I put away my spin rod and setup my trusty Tenryu Furaibo TF-39TA tenkara rod. On my third
          or fourth cast I hooked into a small wild Brook trout.
        </p>
        <p>
          I continued on upstream for aways and the stream entered a dark pine and cedar forest that
          was just heavenly. I did not want the day to end, but it was getting late and I still had
          a ways to hike out. I saw no other footprints or any kind of fishing line, lures, or trash
          along the whole section of the river. It was really nice.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1651021448/Trout/connecticut-trout_fishing-tenkara-spin_fishing-ultralight-wildflowers_kxip3h.jpg"
            height={562}
            width={750}
            className="mb-4 rounded-lg"
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

export default Blank
