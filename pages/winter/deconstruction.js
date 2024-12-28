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
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">
          Namaste&nbsp;
          <span role="img" aria-label="folded hands">
            &#128591;
          </span>
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          Deconstructing and disentangling from an ultra conservative, far right, fundamentalist,
          christian upbringing, indoctrination, and brainwashing can be a very intimidating process.{' '}
          <Link
            href="https://docs.eandp.cc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            I have been chronicling that journey
          </Link>{' '}
          through writing and social media, which to be honest has been an EXHAUSTING process.
          Discovering that everything my faith had taught was 100% truth an undeniable fact was
          actually just conjecture, bad theology based on shitty translations, ideas, and fairy
          tales is a hard pill to swallow. Freeing myself from thirty plus years immersed in a cess
          pool of fear, self-loathing, anger, resentment, patriarchy, and control has been a hard
          difficult process but one that I would do again without a seconds hesitation.
        </p>
        <p className="mt-2">
          So, that is what 2023 looked like for me. All of my available energy was absorbed by
          undergoing this metamorphosis. Now if I had to pick a strain of doctrine for myself it
          would be Buddhism. I tried on atheism for a few months but it just did not fit. Perhaps I
          still have some fear to sort through instilled in me from the decades of phobia
          indoctrination. What I do know though is that if there is a G-d and{' '}
          <Link
            href="https://en.wikipedia.org/wiki/That_All_Shall_Be_Saved"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            universalism
          </Link>{' '}
          is not real then I want nothing to do with that G-d. The injustice, insanity, sadness,
          horror, and down right vileness of anything less is just too much to believe in.
        </p>
        <div className="mt-2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1704975871/deconstruction%20-%20ilovetofish/bird_sanctuary-hike_pnuc6w.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Hiking with my son in the wildlife sanctuary that abuts our property in SE Connecticut
        </p>
        <p className="mt-2">
          Besides fishing I kicked my trail projects into overdrive resurrecting an old trail behind
          our home and creating a network of trails on my small property to include some fun
          mountain bike terrain features. I have also written 20,000+ words for{' '}
          <Link
            href="https://wormwoodsaga.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            book two
          </Link>{' '}
          of my recently self published novel.{' '}
          <Link
            href="/summer/vacation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            We had a great summer
          </Link>{' '}
          filled with adventure and the fall was no less magical with a family RV trip to southern
          Vermont and visiting family for Halloween (can I just say Halloween is so much more fun
          when you are not a fundamentalist).
        </p>
        <div className="mt-2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1704975871/deconstruction%20-%20ilovetofish/sunset-home_rjfnmj.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          A lovely shot of my home on a sunset stroll
        </p>
        <p className="mt-2">
          I celebrated my 40th birthday this past summer with friends and family in California. It
          was a short trip but I did manage to squeeze in a climb to{' '}
          <Link
            href="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1704976787/deconstruction%20-%20ilovetofish/san_jacinto_ght5rf.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            the summit of San Jacinto
          </Link>{' '}
          via the aerial tram that I have wanted to do for a LONG time.
        </p>
        <div className="mt-2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1704975870/deconstruction%20-%20ilovetofish/great_glen_trails_vtmiw0.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          First ski tour of the season - Great Glen Trails in Gorham, NH
        </p>
        <p className="mt-2">
          This season I kicked off a foray into a new hobby - telemark skiing. I got a pair of XCD
          skis for the holidays - Fischer Traverse 78s with Rottefella xPlore bindings and{' '}
          <Link
            href="https://www.alfaoutdoor.com/products/free-a-p-s-gtx-m-black"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Alfa Free ski boots.
          </Link>{' '}
          My technique is still pretty rough but I have executed several successful telemark turns -
          the most recent was earlier this week when I went for a tour of Winding Trails in
          Farmington CT. So, yea 2023 was a tough year but it has also been one of growth, learning,
          exploring, adventure, and wonder. Stay safe out there and... Namaste&nbsp;
          <span role="img" aria-label="folded hands">
            &#128591;
          </span>
        </p>
      </div>

      <div className="mx-auto mt-4 max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default Blank
