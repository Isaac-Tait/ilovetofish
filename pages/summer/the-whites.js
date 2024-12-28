import Image from 'next/image'
import Link from 'next/link'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function WhiteMountains() {
  return (
    <div className="bg-gray-400">
      <Header />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-lime-400">
          Tenkara fishing in the White Mountains
        </h1>
        <p
          style={{ fontFamily: 'var(--font-kablammo)' }}
          className="rounded-t-sm p-1 text-yellow-400 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest"
        >
          I awoke to the sound of rain pattering on the roof of the RV. &#34;Had I slept in too
          late?!!&#34; I said to myself as I fumbled around as quietly as possible to find my iPhone
          without waking my wife. &#34;Phew, it is 0430.&#34; I said to myself as I slipped out of
          bed, donned my fishing clothes I had laid out the night before, and crept silently from
          the{' '}
          <Link
            href="https://macadamgrinding.com/posts/connecticut/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            RV
          </Link>
          &nbsp;into the darkness and rain
        </p>
        <p></p>
        <div className="flex justify-center pt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817107/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-_a842cc.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          Scenes like this made it all to easy to get up every morning before light to fish
        </p>
        <p className="pt-2">
          I made it to Dunkin Donuts shortly after they opened and grabbed my usual - avocado toast,
          two hashbrowns, and a medium breakfast tea with oatmilk. The drive to the river went
          smoothly with no close calls from wildlife in the road. I donned my new sawanobori shoes
          and plunged into the forest towards the cacophony of water running over, around, and
          through boulders.
        </p>

        <Carousel showArrows={true} showThumbs={false} className="mb-1">
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817114/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-green_trees_gyhxwn.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817106/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-gin_clear_lg6wbq.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817107/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-i_want_to_go_back_gvdwjt.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817107/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-cascades_o5cepc.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817107/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-log_jam_xh9b30.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817110/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-berries_fzweks.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817110/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-tenryu_furaibo_wnnrps.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817111/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-mushroom_m1ijoq.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817112/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-fog_i4skma.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817112/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-moss_aa3zyw.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817113/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-so_nice_ov1g3h.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817114/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-green_trees_gyhxwn.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817114/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-boulder_uchwtb.jpg"
              width={1000}
              height={750}
              alt="photo"
            />
          </div>
        </Carousel>
        <p className="mb-10 flex justify-center text-xs italic">
          Image Carousel (Click the arrows on the right or left to scroll through the photos).
        </p>
        <p className="pt-2">
          In total I spent four days fishing in The White Mountains. The lionshare of the fishing
          was with my{' '}
          <Link
            href="https://macadamgrinding.com/posts/connecticut/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 text-teal-400 underline"
          >
            Tenryu Furaibo TF39TA
          </Link>
          &nbsp;but I did use my finesse rod a bit with no luck. The fish seemed to be mostly
          interested in flies instead of crank or jerk baits. The water reminded me a lot of Japan -
          gin clear, high gradient, easily spooked fish, and lots and lots of mushrooms and sansai.
        </p>
        <p>
          I hooked into some rather large Brook Trout by casting above the pool and allowing the
          plunging water to drive my fly down deep into the pool. Then as it floated down stream I
          gave the rod a few quick and fairly large jerks, which moved the fly about three to six
          inches through the water. My thought was that with all the &#39;noise&#39; of the water I
          had to make my fly stand out. It seemed to do the trick. It was definitely some fun
          fishing.
        </p>
        <div className="flex justify-center pt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817108/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-fish_in_a_hat_yuskxd.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">You have to keep them wet!</p>
        <p>
          <span className="font-bold underline">
            <span className="uppercase">warning:</span>&nbsp;I am going to get on my soapbox for a
            bit
          </span>
          &nbsp;This year I have decided that I would stop taking photos of trout out of the water.
          They already have enough trouble with being a prized and highly targeted fish species,
          living in waters that are becoming more and more pressured by anglers, and residing in a
          planet that is being ravaged by heat waves, wild fires, and droughts. I have seen too many
          anglers holding fish with their dry bare hands out of the water for way too long. It
          drives me nuts, especially when they put it back in the water and walk away feeling smug
          that they practice &#39;catch and release&#39;. What drives this irresponsible behavior? A
          photo for your social media channel of choice that your followers will like and then
          instantly forget about? I read somewhere that for every second a fish is out of water its
          mortality rate goes up by 10%. This needs to stop...
        </p>
        <p className="pt-2">
          Of all the anglers guilty of this I was the worst. My Google Photos account is chocked
          full of photos of fish out of the water. Sadly most of them probably died shortly after I
          &#39;released&#39; them back into the water. As anglers we really have to become more
          aware of what our presence is having on an ecosystem and take measure to reduce that
          impact in any way that we can.{' '}
        </p>
        <div className="flex justify-center pt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1661817112/theWhiteMountains/the_white_mountains-new_hampshire-headwaters-mount_washington-brook_trout-tenkara-fixed_line_fishing-fish_on_jf6alb.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'Project'}
          />
        </div>
        <p className="flex justify-center text-xs italic">
          A fish in its native environment - and a photo that won&#39;t kill it to stroke my social
          media ego
        </p>
        <p className="py-2">
          The White Mountains of New Hampshire are truly a special place and should be cherished and
          preserved for future anglers to come and experience for themselves. During my four days
          there I barely scratched the surface of great water to fish. I feel truly blessed to live
          only four hours away from this paradise and I am looking forward to more adventures
          exploring the genryu and kieryu of New England&#39;s high country.
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}
