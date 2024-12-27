import Link from 'next/link'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Skiing = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-600">
      <Header />
      <div className="mx-auto max-w-6xl px-1">
        <h1 className="mx-auto mb-2 w-fit rounded-md bg-teal-400 p-1 text-2xl font-semibold text-rose-400">
          Winter
        </h1>

        <Link href="/winter/koselig" className="hover:text-rose-400">
          <p className="w-fit rounded-md bg-teal-400 px-1 text-rose-400 underline">
            <span className="text-lg font-bold">January 2022 -&nbsp;</span>Koselig
          </p>
          <p className="text-neutral-300">
            Let&#39;s get cozy for a second and have a quick chat about creating a positive mental
            state surrounding winter and all her cold & dark glory...
          </p>
        </Link>

        <Link href="/winter/nordic-skiing" className="hover:text-rose-400">
          <p className="w-fit rounded-md bg-teal-400 px-1 text-rose-400 underline">
            <span className="text-lg font-bold">February</span>Nordic Skiing
          </p>
          <p className="text-neutral-300">
            I thought you had to be wealthy to go skiing; that is until I discovered nordic
            skiing...
          </p>
        </Link>

        <Link href="/winter/new-england" className="hover:text-rose-400">
          <p className="w-fit rounded-md bg-teal-400 px-1 text-rose-400 underline">
            <span className="text-lg font-bold">March 2022 -&nbsp;</span>New England
          </p>
          <p className="text-neutral-300">
            I have fallen in love with New England. I don&#39;t think I could ever leave...
          </p>
        </Link>

        <Link href="/winter/father-son" className="hover:text-rose-400">
          <p className="w-fit rounded-md bg-teal-400 px-1 text-rose-400 underline">
            <span className="text-lg font-bold">January 2023 -&nbsp;</span>Father Son Ski Trip
          </p>
          <p className="text-neutral-300">
            I used to be entirely opposed to skiing during the holidays. I tried it once and the
            crowds (and prices) were insane. Well now that my son is in school I had no choice. Well
            it was a great trip and I was pleasantly surprised by the solitude and adventure...
          </p>
        </Link>

        <Link href="/winter/100-mile-wilderness" className="hover:text-rose-400">
          <p className="w-fit rounded-md bg-teal-400 px-1 text-rose-400 underline">
            <span className="text-lg font-bold">February 2023 -nbsp;</span>100 Mile Wilderness
          </p>
          <p className="text-neutral-300">
            In the far north of Maine lies a wilderness area called the 100 Mile Wilderness. There
            are several huts that you can ski to and from that make visiting this winter wonderland
            a truly special experience...
          </p>
        </Link>

        <Link href="/winter/deconstruction" className="hover:text-rose-400">
          <p className="w-fit rounded-md bg-teal-400 px-1 text-rose-400 underline">
            <span className="text-lg font-bold">January 2024 -&nbsp;</span>Deconstruction
          </p>
          <p className="text-neutral-300">
            2023 was an exhausting, challenging, and sometimes down right scary journey of growing,
            stretching, unlearning, and learning. I fished a lot, not as much as last year but still
            a decent amount...
          </p>
        </Link>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Skiing
