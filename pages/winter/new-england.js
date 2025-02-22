import Image from 'next/image'
import Link from 'next/link'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const NewEngland = () => {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">
          Lakes and Streams
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          Today I am experiencing my first sleet storm. It is pretty gnarly out there. I woke up
          expecting the predicted 4-6 inches of snow (perhaps enough for a lap or two on my favorite{' '}
          <Link
            href="https://www.thatscandinavianfeeling.com/lifestyle/norwegian-concept-koselig"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            trail
          </Link>{' '}
          with my skis). Instead there was an eighth of an inch of snow and thinning fast from the
          33&#176; rain.
        </p>
        <p>
          A little snow cannot dampen my new found love for New England though. It offered a perfect
          opportunity to curl up with my tea and bang out the final touches on a video I have been
          working on in my mind for the last few months.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1645799125/newEngland/cranberry_xe3br7.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Earlier this week, when it was 65&#176; I went for a mountain bike ride and discovered a
          stream perfect for tenkara.
        </p>
        <p>
          On my other{' '}
          <Link
            href="https://www.youtube.com/c/Fallfishtenkara1/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            channel
          </Link>{' '}
          I have 30+ videos mixed to a sound track. For this video though I felt it was better to
          highlight the natural soundtrack. Listen closely and you will hear{' '}
          <Link
            href="https://seattlebackpackersmagazine.com/cherish-the-silence-of-nature/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            the silence of nature
          </Link>
          . The video was shot over the course of several months and numerous trips into the wild
          places of Connecticut.
        </p>
        <p className="pt-2">
          Having recently moved from here from San Diego my soul has come alive at the prospect of
          so much to explore. The trails, rivers, ponds, and lakes seem endless - and if they ever
          do run out here I have other states to explore within a one to two hour drive as well.
        </p>
        <p className="my-4 text-center">
          So, without further ado I present{' '}
          <span className="italic">&quot;Lakes and Streams&quot;</span>
        </p>
        <div className="mb-4 flex justify-center">
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/VUXWlXaIyTM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default NewEngland
