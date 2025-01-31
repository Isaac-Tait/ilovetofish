import Image from 'next/image'
import Link from 'next/link'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Koselig = () => {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">Koselig</h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          I posted a collage of photos to&nbsp;
          <Link
            href="https://www.instagram.com/p/CY2pJkbtud0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Instagram
          </Link>
          &nbsp;this evening (1/17/2022) all about Koselig.
        </p>
        <p>
          I was inspired by two articles that I wanted to share here. The first was written in
          &quot;The Atlantic&quot;. It is an older article that was first published in 2015 (a
          simpler time for sure...) but I only just recently discovered it because well I did not
          really need to think about cold gray winters in San Diego California... Here is the{' '}
          <Link
            href="https://www.theatlantic.com/health/archive/2015/07/the-norwegian-town-where-the-sun-doesnt-rise/396746/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Link
          </Link>
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/koselig1-750.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Yesterday all the lakes, bogs, and puddles were frozen. Then a warm storm blew in and the
          ice sunk, which I thought was pretty cool looking...
        </p>
        <p>
          The second article can be found{' '}
          <Link
            href="https://www.thatscandinavianfeeling.com/lifestyle/norwegian-concept-koselig"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            here
          </Link>
          .
        </p>
        <p>
          There now I feel a lot better. As a writer I would seriously dislike someone stealing my
          words and claiming them as my own. I quoted the second article in my Instagram post and
          since you cannot put links in posts I decided the next best thing to do was blog about
          it...
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/koselig2-500.jpg"
            height={750}
            width={562}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          This small brook by my house is almost completely frozen solid. Pretty wild!
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default Koselig
