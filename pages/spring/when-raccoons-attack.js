import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Breadcrumbs from 'nextjs-breadcrumbs'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Blank = () => {
  return (
    <div className="heropattern-topography-neutral-100">
      <Header />
      <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
      <div className="h-screen max-w-6xl mx-auto overflow-y-scroll px-1">
        <h1 className="text-2xl font-semibold text-emerald-600 flex justify-center mb-8">
          An encounter with angry animals
        </h1>
        <p
          className="first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left"
        >
          There is a river I visited in the fall last year{' '}
          <Link
            href="https://youtu.be/LEaS8Xs3sVs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-teal-400 hover:text-indigo-400"
          >
            it was a clear and crisp fall day - I caught one fish.
          </Link>
          Fast forward to this week and I was itching for another go at the river to see how the
          trout had done through our mostly mild winter.
        </p>
        <p>
          There is a roughly one mile hike to get to the river. When I got close I spotted another
          angler but he was wearing jeans and a flannel shirt. I did not feel like chatting so I
          slunk back up the trail to look for a spot where I could cut cross country and start
          fishing where I had left off the previous season.{' '}
        </p>
        <div className="flex justify-center mt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1682180644/when%20raccoons%20attack/river-connecticut-fishing-bfs-tenkara-adventure_lspbzx.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">A lovely spot...</p>
        <p>
          While looking for a place to cut cross country I came upon a trail. I have hiked this area
          quite a bit and had never seen the trail. I followed it and low and behold it took me to
          the exact spot on the river that I had wanted to start fishing at. While bush-wacking down
          to the river from the trail though I managed to pick up five ticks on my legs. I flicked
          them off into the river, setup my rod, and began making my way upstream.
        </p>
        <div className="flex justify-center mt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1682180643/when%20raccoons%20attack/river-connecticut-fishing-bfs-tenkara-adventure-wild_violets_ewrlon.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">Wild violet</p>
        <p>
          As I made my way upstream I spooked a deer beside the river. I watched as she leapt and
          bounded deep into the forest. A little further up I spotted several fish holding in a
          riffle. I cast well above them and drifted my lure in front of them. They did not even
          sniff it. Indignant I reached for my tackle booklet (straight from Japan{' '}
          <Link
            href="https://www.seiyuinstitute.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-teal-400 hover:text-indigo-400"
          >
            thank you to my good friend and fellow tenkara enthusiast who runs the Sieyu Institute
          </Link>
          ) and attached another hard bait. As I was getting it rigged up suddenly upstream I heard
          snarling, splashing, and shrieking. It sounded like a bear attacking a deer. Kicking
          myself for forgetting my knife in the truck I whipped out my iPhone. If I was going to get
          eaten I wanted someone to know by what...You can check out the wildlife encounter in the
          video below...
        </p>
        <div className="flex justify-center my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yki3Y8HPRPc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p>
          Well it was not a bear attacking a deer. As best as I can tell it was a racoon encroaching
          on the otters territory and a fight ensued. Otters do make similar noises as a deer
          though, who knew... When the otter saw me he retreated into some brush along the river and
          started growling and hissing at me. I grabbed a nearby log in case he came for me and
          booked it upstream as quickly as possible.{' '}
        </p>
        <div className="flex justify-center mt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1682180643/when%20raccoons%20attack/river-connecticut-fishing-bfs-tenkara-adventure-spring_yshoca.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">The trees are blooming</p>
        <p>
          The rest of the day was less eventful. I had a wonderful stream-side lunch and found some
          very fishy spots that were a hoot to fish. This trip I stuck with my BFS rod/reel but
          earlier in the week I{' '}
          <Link
            href="https://www.instagram.com/p/CrJ7vm5JHS8/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-teal-400 hover:text-indigo-400"
          >
            had found a great tenkara stream.
          </Link>{' '}
          I did not catch any fish but I did see several red-spotted newts in their eft stage! It
          was a great and exciting day out in the wild. Next week looks a little cooler but there is
          another area I want to scope out. More to come...
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default Blank
