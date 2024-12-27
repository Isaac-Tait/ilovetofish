import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Blog = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-600">
      <Header />
      <div className="mx-auto h-screen max-w-6xl px-1">
        <h1 className="mx-auto w-fit rounded-md bg-fuchsia-400 p-1 text-2xl font-semibold text-teal-400">
          Fall
        </h1>

        <Link href="/fall/october" className="hover:text-teal-400" legacyBehavior>
          <div className="w-fit rounded-md bg-fuchsia-400 px-1 text-teal-400 underline">
            <span className="text-lg font-bold">October 2021 -&nbsp;</span>October
          </div>
          <p className="text-neutral-300">
            It has been too long since I chased down obscure blue lines on a map to see if they held
            trout. It was time to brush off the cobwebs...
          </p>
        </Link>

        <Link href="/fall/bouldering" className="hover:text-teal-400" legacyBehavior>
          <p className="w-fit rounded-md bg-fuchsia-400 px-1 text-teal-400 underline">
            <span className="text-lg font-bold">November 2021 -&nbsp;</span>Boulders
          </p>
          <p className="text-neutral-300">
            I like to climb rocks. So, imagine my excitement when I discoverd a collection of
            boulders not too far from home...
          </p>
        </Link>

        <Link href="/fall/autumn-equinox" className="hover:text-teal-400" legacyBehavior>
          <p className="w-fit rounded-md bg-fuchsia-400 px-1 text-teal-400 underline">
            <span className="text-lg font-bold">September 2022 -&nbsp;</span>Fall is in the air!
          </p>
          <p className="text-neutral-300">
            The days are getting shorter, the weather is cooler, and the trees leaves are turning
            from green to gold, red, yellow, and orange...
          </p>
        </Link>

        <Link href="/fall/anniversary" className="hover:text-teal-400" legacyBehavior>
          <p className="w-fit rounded-md bg-fuchsia-400 px-1 text-teal-400 underline">
            <span className="text-lg font-bold">October 2022 -&nbsp;</span>My first year living in
            New England
          </p>
          <p className="text-neutral-300">
            My first year living in Connecticut is now in the history books. I must say that I was
            absolutely blown away my first year living here. Everything about this state has
            surpassed my expectations...
          </p>
        </Link>

        <Link href="/fall/second-summer" className="hover:text-teal-400" legacyBehavior>
          <p className="w-fit rounded-md bg-fuchsia-400 px-1 text-teal-400 underline">
            <span className="text-lg font-bold">November 2022 -&nbsp;</span>A second chance at
            summer, but if only for a day
          </p>{' '}
          <p className="text-neutral-300">
            Fresh off the plane from California (a two week visit to see family, friends, and go to
            a wedding) I was itching to get back out into the wild places of New England that I have
            fallen madly in love with. Lucky for me the weather was a warm 77 degrees in early
            November...
          </p>
        </Link>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Blog
