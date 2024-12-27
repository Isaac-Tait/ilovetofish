import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Summer = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-600">
      <Header />
      <div className="mx-auto max-w-6xl px-1">
        <h1 className="mx-auto w-fit rounded-md bg-rose-400 p-1 text-2xl font-semibold text-lime-400">
          Summer
        </h1>

        <Link href="/summer/chanterelle-adventure" className="hover:text-lime-400">
          <p className="w-fit rounded-md bg-rose-400 px-1 text-lime-400 underline">
            <span className="text-lg font-bold">June 2022 -&nbsp;</span>Chanterelle Adventure
          </p>
          <p className="text-neutral-300">
            After a pleasant, yet jam packed, with yard work, 4th of July weekend I was itching to
            catch some fish...
          </p>
        </Link>

        <Link href="/summer/kayaking" className="hover:text-lime-400">
          <p className="w-fit rounded-md bg-rose-400 px-1 text-lime-400 underline">
            <span className="text-lg font-bold">July 2022 -&nbsp;</span>Have kayak, will travel
          </p>
          <p className="text-neutral-300">
            For the past month or two I have been dreaming about buying a kayak and using it to
            access water that had proven to be out of reach by foot. Well last week I found a really
            good deal for one on Craigslist and took the plunge...
          </p>
        </Link>

        <Link href="/summer/the-whites" className="hover:text-lime-400">
          <p className="w-fit rounded-md bg-rose-400 px-1 text-lime-400 underline">
            <span className="text-lg font-bold">August 2022 -&nbsp;</span>The White Mountains
          </p>
          <p className="text-neutral-300">
            Back in March of 2022 I skied, for four days in the White Mountains of New Hampshire. It
            was an epic trip and I got a small taste of what these mountains could offer in terms of
            fishing in the spring or summer. I knew I had to come back. Well I did come back in
            August of 2022 and I spent three wonderful days exploring a few headwater streams in the
            White Mountains...
          </p>
        </Link>

        <Link href="/summer/mushrooms" className="hover:text-lime-400">
          <p className="w-fit rounded-md bg-rose-400 px-1 text-lime-400 underline">
            <span className="text-lg font-bold">September 2022 -&nbsp;</span>Mycologist in the
            making
          </p>
          <p className="text-neutral-300">
            Ever since my days of fishing in Japan I have been enamored with mushrooms. Then I moved
            to New England and mycology transitioned from interest to obsession...
          </p>
        </Link>

        <Link href="/summer/vacation" className="hover:text-lime-400">
          <p className="w-fit rounded-md bg-rose-400 px-1 text-lime-400 underline">
            <span className="text-lg font-bold">August 2023 -&nbsp;</span>The summer vacation I wish
            I had when I was a kid
          </p>
          <p className="text-neutral-300">
            Seriously, it's been nearly a year since I wrote a summer blog post!? This is a travesty
            I must reconcile...
          </p>
        </Link>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Summer
