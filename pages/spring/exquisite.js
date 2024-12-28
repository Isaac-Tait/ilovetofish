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
          A Quintessential Spring Day in Connecticut
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="first-letter:text-slate-900 rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          What an absolutely spectacular day I kept saying to myself over and over again. It is days
          like this that make me fall in love all over again with New England. I have been doing a
          lot of Exploring and Pondering over the winter and it has lead to some breakthroughs in my{' '}
          <Link
            href="https://docs.eandp.cc/docs/Medicine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            spirituality
          </Link>
          .
        </p>
        <p>
          Part of that journey has been exploring why I fish and how my forays into wild places can
          and do have an impact on the ecosystems that I find so much joy and peace in.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1715625305/Exquisite/connecticut-wild_trout-stream-fishing-finesse-brown_trout-brook_trout-meadow_ow7rhs.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Walking to the brook through a grassy meadow...
        </p>
        <p className="py-2">
          I read somewhere, I am not sure where, that for every second a fish is out of the water
          increases its mortality chances by 10%. So five seconds out of the water for a quick photo
          or to deal with a stuck hook and the fish now has a 50/50 chance of dying. In a world
          ravaged by climate change and our ecosystems being destroyed in the name of capitalism and
          &quot;progress&quot; protecting the environment is taking on greater and greater
          importance.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1715625305/Exquisite/connecticut-wild_trout-stream-fishing-finesse-brown_trout-brook_trout-_oktv5h.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">A stunning spot...</p>
        <p className="py-2">
          As a result of these thoughts I have felt more and more guilt at my actions as an angler.
          For years I would take photos of every single fish I caught. I would traipse through
          gravel banks in the stream without a second thought (possibly destroying fish nesting
          locations). When I lived in Japan I had a fairly popular tenkara blog{' '}
          <Link
            href="https://fallfishtenkara.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Fallfish Tenkara
          </Link>
          &nbsp;(I know I know it really does need a facelift.) but I did nothing with my platform
          to highlight ethical fishing practices. With my new site - I love to fish, I have begun
          exploring and recognizing that with climate change and in conjunction with an increase in
          fishing pressure as well as habitat degradation and destruction it is crucial as an angler
          to take a closer look at my impact on the ecosystems that I love. What are some ways that
          you practice ethical fishing? Let me know by reaching out on{' '}
          <Link
            href="https://www.instagram.com/p/C662IrmOqnj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Instagram
          </Link>
          .
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
