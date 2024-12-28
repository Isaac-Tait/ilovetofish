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
          Pat Metheny
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="first-letter:text-slate-900 rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          I compiled this playlist of Pat Metheny music and I listen to it at least twice a week.
          The first song my son ever heard was &quot;The Truth Will Alway Be&quot; the long
          crescendo is phenomenal to listen to whether it is your first time or your millionth time
          hearing the song. I love this song so much I want it played at my funeral.
        </p>
        <p className="mt-2">
          &quot;To The End of the World&quot; is another one of my favorites and also one of his
          longest recorded songs to boot.
        </p>
        <iframe
          src="https://open.spotify.com/embed/playlist/6MbT9G4P1EfAdWcZuD3NEG?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <p className="mt-8 text-center font-medium">
          Back in 2018 my brother and I got to see Pat Metheny play live in Portland Oregon. It was
          hands down the best concert I have ever been too!
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643912605/patMetheny/in_our_seats_d9uks9.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={"Pat Metheny's in our seats"}
          />
        </div>
        <p className="flex justify-center text-xs">
          My youngest brother and I psyched for the concert to start - do not mind the creepy dude
          in the background&nbsp;
          <span role="img" aria-label="laughing emoji">
            &#129315;
          </span>
        </p>

        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643912605/patMetheny/the_stage_jo4k6b.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={"Pat Metheny's the stage"}
          />
        </div>
        <p className="flex justify-center text-xs">A whiskey or two to start off the night</p>

        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1643912604/patMetheny/tour_bus-selfie_plqfoo.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={"Pat Metheny's tour bus selfie"}
          />
        </div>
        <p className="flex justify-center text-xs">
          The required tour bus selfie before the show started
        </p>
        <p>
          You can find other Pat Metheny playlists{' '}
          <Link
            href="https://patmetheny.com/pmradio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            here
          </Link>
          ...
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default Blank
