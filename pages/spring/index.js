import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Spring = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-600">
      <Header />
      <div className="mx-auto max-w-6xl px-1">
        <h1 className="mx-auto w-fit rounded-md bg-lime-400 p-1 text-2xl font-semibold text-fuchsia-400">
          Spring
        </h1>

        <Link href="/spring/pat-metheny" className="hover:text-fuchsia-400" legacyBehavior>
          <p className="w-fit rounded-md bg-lime-400 px-1 text-fuchsia-400 underline">
            <span className="text-lg font-bold">March 2022 -&nbsp;</span>Pat Metheny
          </p>
          <p className="text-neutral-300">
            My most favorite musician of all time has to be Pat Metheny. The man is a prodigy and
            his music is such a joy to listen too imho...
          </p>
        </Link>

        <Link href="/spring/trout" className="hover:text-fuchsia-400" legacyBehavior>
          <p className="w-fit rounded-md bg-lime-400 px-1 text-fuchsia-400 underline">
            <span className="text-lg font-bold">April 2022 -&nbsp;</span>Trout
          </p>
          <p className="text-neutral-300">
            It was exactly 180 days since I last caught a wild trout. I was itching to bring one to
            hand. So, I set off for a river that has become my favorite - for some reason...
          </p>
        </Link>

        <Link href="/spring/finesse-fishing" className="hover:text-fuchsia-400" legacyBehavior>
          <p className="w-fit rounded-md bg-lime-400 px-1 text-fuchsia-400 underline">
            <span className="text-lg font-bold">May 2022 -&nbsp;</span>Finesse Fishing
          </p>
          <p className="text-neutral-300">
            One of the last things I bought before moving back to the USA from Japan was a JDM
            finesse spin rod and reel as well as a few dozen ultralight spoons. Little did I know
            how much use I would get out of that rod over the years...
          </p>
        </Link>

        <Link href="/spring/mountain-laurel" className="hover:text-fuchsia-400" legacyBehavior>
          <p className="w-fit rounded-md bg-lime-400 px-1 text-fuchsia-400 underline">
            <span className="text-lg font-bold">June 2022 -&nbsp;</span>Mountain Laurel
          </p>
          <p className="text-neutral-300">
            After five years of faithful service my Daiwa spin reel seized up and the internal
            spring snapped. I took the plunge and got a BFS reel. To break it in I checked out a
            stream near the border of Rhode Island...
          </p>
        </Link>

        <Link href="/spring/when-raccoons-attack" className="hover:text-fuchsia-400" legacyBehavior>
          <p className="w-fit rounded-md bg-lime-400 px-1 text-fuchsia-400 underline">
            <span className="text-lg font-bold">April 2023 -&nbsp;</span>An intense moment on the
            river...
          </p>
          <p className="text-neutral-300">
            There I was just minding my own business switching out my spoon for hard bait when
            suddenly just upstream and around a bend I heard the most horrific sound of animals
            fighting, splashing in the water, and a sound like that of deer dying...
          </p>
        </Link>

        <Link href="/spring/lyme-disease" className="hover:text-fuchsia-400" legacyBehavior>
          <p className="w-fit rounded-md bg-lime-400 px-1 text-fuchsia-400 underline">
            <span className="text-lg font-bold">June 2023 -&nbsp;</span>Dealing with ticks...
          </p>
          <p className="text-neutral-300">
            This season I have had a much bigger problem with ticks than I did last season. I am not
            sure what the cause is but if I had to venture a guess I would say that our lame (read:
            warm and hardly any snow) winter is to blame...
          </p>
        </Link>

        <Link href="/spring/exquisite" className="hover:text-fuchsia-400" legacyBehavior>
          <p className="w-fit rounded-md bg-lime-400 px-1 text-fuchsia-400 underline">
            <span className="text-lg font-bold">May 2024 -&nbsp;</span>A gorgeous first day...
          </p>
          <p className="text-neutral-300">
            Kicking off the 2024 stream fishing season with an EPIC day on the river. Days like this
            one are why I never want to leave Connecticut...
          </p>
        </Link>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Spring
