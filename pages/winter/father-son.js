import Image from 'next/image'
import Link from 'next/link'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const FatherSon = () => {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">
          A father son ski adventure in New England
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          Tuesday morning dawned cold and cloudy. The thought of being stuck at home all day was
          just too repulsive. So, I packed up our gear, kissed the wife goodbye, and headed north
          with my son for a cross country ski trip. We had three days to ski before the warm rain
          settled in for at least a week. With two years of La Nina weather back to back you have to
          squeeze in every opportunity to ski as the snowpack is not guaranteed to be around next
          week. I shared many photos and{' '}
          <Link
            href="https://www.instagram.com/iloveto.fish/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            trip reports on my Instagram
          </Link>
          &nbsp;account. So, I will refrain from re-sharing here...
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1672491905/new_england-rhode_island-beach_life-skiing-snow-vermont-massachusetts-nordic_skiing-cross_country_skiiing_x4r86d.jpg"
            height={750}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          The day after returning from our ski trip we headed to the beach. New England is a
          spectacular place!
        </p>
        <p className="mt-4 text-center">
          Check out this link if you want to see{' '}
          <Link
            href="https://photos.app.goo.gl/D7WomVmJKCJ7KpAE6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            more photos from the trip
          </Link>
          &nbsp;that did not make it into my Instagram feed.
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default FatherSon
