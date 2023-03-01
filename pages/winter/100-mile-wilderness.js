import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//import Breadcrumbs from 'nextjs-breadcrumbs';

import Comment from '../../components/Comment';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wilderness = () => {
  return (
    <div className='heropattern-topography-neutral-100'>
      <Header />
      {/* <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} /> */}
      <div className='h-screen max-w-6xl mx-auto overflow-y-scroll px-1'>
        <h1 className='text-2xl font-semibold text-emerald-600 flex justify-center mb-8'>
          Maine&#39;s One Hundred Mile Wilderness
        </h1>
        <p
          className='first-line:uppercase first-line:tracking-widest
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-letter:mr-3 first-letter:float-left'
        >
          When I first{' '}
          <Link
            href='https://www.nytimes.com/2021/11/16/travel/maine-cross-country-skiing.html'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-teal-400 hover:text-indigo-400'
          >
            read about the AMC hut system
          </Link>
          &nbsp;in the 100 Mile Wilderness area of Maine I knew
          instantly that I had to go.
        </p>
        <p>
          So, I called AMC to make my reservations in early spring.
          However, they informed me that I had to wait until the
          Monday after Labor Day to call. I made a reminder to call
          and then spent the rest of the spring and summer dreaming of
          the trip. Well September came and I called to make my
          reservations. The only problem is that West Branch Pond Camp
          (WBPC) allows people to make reservations anytime they want.
          Consequently WBPC was entirely booked for the month of
          February save one spot on a Monday. After a bit of finagling
          with the schedule I was able to secure lodging with AMC.
          Rather than start at Mediwisla Lodge and ski south to Gorman
          Chairback we decided on an alternate itinerary. We decided
          to skip Mediwisla and start at WBPC, ski to Little Lyford on
          day two, then on to Gorman Chairback for day three, then
          back to Little Lyford Day four and on day five ski back to
          WBPC. In total we ended up clocking fifty miles of cross
          country skiing over the five days. Needless to say it was an
          epic trip.{' '}
        </p>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693740/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-moonlight_bzlqdw.jpg'
            height={562}
            width={750}
            className='rounded-lg'
            alt={'WBPC at night'}
          />
        </div>
        <p className='flex justify-center text-xs italic py-2'>
          For the first night we had Cabin 4 to ourselves, which
          overlooked First West Branch Pond
        </p>
        <p>
          I went back and forth for several weeks on whether I would
          publish a trip report about this adventure. On one hand I
          was excited to share the experience with my readers. On the
          other hand though it was a much more profound spiritual
          experience than I had anticipated. I was concerned that
          blogging about the trip would not do the experience
          justice...{' '}
          <Link
            href='https://www.wormwoodsaga.com'
            target='_blank'
            rel='noopener noreferrer'
            className='underline text-teal-400 hover:text-indigo-400'
          >
            I have been working on self-publishing my novel
          </Link>
          &nbsp;. At times I feel like I am dropping the ball as far
          as my writing capabilities are concerned to communicate
          those stories and ideas in my head adequately. Putting
          myself out there as an indie author and in a way this blog
          have caused a lot of self doubt and maybe even fear. Fear
          about expressing my thoughts and emotions in a public
          domain. The internet can be an ugly place.
        </p>
        <p className='pt-4'>
          However, it can be a beautiful place filled with wonder,
          enjoyment, inspiration, success, and happiness. In the end I
          decided to take a leap and blog about my trip through the
          100 Mile Wilderness on skis...
        </p>
        <h4 className='text-center font-bold text-xl text-emerald-600'>
          Day One
        </h4>
        <p className='py-2'>
          I woke up before my alarm at 0445. My clothes were laid out
          in the living room and I had made overnight oats the evening
          before for my breakfast. While the tea kettle came to a boil
          I poured Vermont maple syrup over my oats and stirred them.
          My gear was laid out in the guest room downstairs. I had
          spent the last two days going over and over my packing list
          to make sure I had everything I needed for the trip. Before
          I left I kissed my wife and son goodbye, they were snoring
          peacefully in their beds and I snuck out. The drive to my
          friends house in Rhode Island was quick. I piled my gear in
          his truck and we hit the road, making a quick stop at Dunkin
          Donuts for breakfast before getting on the highway. The
          drive up was spent deep in conversation from buying our
          first homes, to family life, recalling our past adventures,
          politics, religion, and climate change. You know small talk.
          As we got closer the roads became less and less plowed until
          we found ourselves driving over snowy roads with three to
          four foot snow banks on either side. My buddy did not have
          snow tires, but we had four wheel drive. We did not want to
          use it though by sliding into a snowbank on our first day so
          we took it real easy driving into West Branch Pond Camp.
          Check in was a breeze and in short order we had our gear
          stashed in our cabin and we headed out for an evening tour.
          The wind was blowing pretty fierce and anytime we got out of
          the trees our faces got so cold it felt like they were going
          to fall off. After a fun five miles or so poking around on
          some old logging roads we scurried back to our cabin,
          excited for our first meal of the trip. Possibly the
          greatest aspect of this trip is that all your meals are
          cooked for you. Breakfast and dinner are enjoyed at the
          cabin and after breakfast you pick up your trail lunch that
          you ordered after dinner the night before! To say the food
          was exquisitely delicious would be an understatement. For
          dinner that night I had a Beyond Meatloaf, with roasted
          carrots, bean salad, home made bread, and a puff ball with
          homemade whip cream for desert! That night we stuff our
          fireplace with a few logs and fell asleep to the sound of
          silence that can only be found in a place with no cell
          reception or wifi. It was amazing.
        </p>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-_qjpmqy.jpg'
            height={562}
            width={750}
            className='rounded-lg'
            alt={'WBPC at night'}
          />
        </div>
        <h4 className='text-center font-bold text-xl text-emerald-600'>
          Day Two
        </h4>
        <p className='py-2'>
          The morning dawned crystal clear and cold. Without windchill
          it was -7. The week prior an arctic blast had dropped into
          New England sending the temperatures plummeting to -40
          degrees Fahrenheit! Again we all had a wonderful breakfast
          in the kitchen of WBPC. There were several other parties in
          the kitchen eating with us and it was a great time to get to
          know everyone and to hear about their lives. We gathered our
          lunches and put our luggage outside of our cabins. The snow
          mobiles would be along shortly to take them on to our
          various destinations. We certainly were traveling in luxury!
          As the day progressed the blue skies gave way to clouds and
          the temperatures warmed a little. My friend and I explored
          several side logging roads and had a blast making fresh
          tracks on some immaculate snow. After nearly 12 miles of
          skiing we arrived at Little Lyford. We had heard rumors of a
          wood fired sauna and made quick work of getting it going.
        </p>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-west_branch_pond_camp_qlqqgj.jpg'
            height={562}
            width={750}
            className='rounded-lg'
            alt={'WBPC breakfast'}
          />
        </div>
        <div className='flex justify-center pt-4'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693742/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-creek_crossing_fbbdrf.jpg'
            height={562}
            width={750}
            className='rounded-lg'
            alt={'back country nordic skiing'}
          />
        </div>
        <h4 className='text-center font-bold text-xl text-emerald-600'>
          Day Three
        </h4>
        <p></p>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693740/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-moonlight_bzlqdw.jpg'
            height={562}
            width={750}
            className='rounded-lg'
            alt={'WBPC at night'}
          />
        </div>
        <h4 className='text-center font-bold text-xl text-emerald-600'>
          Day Four
        </h4>
        <p></p>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693740/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-moonlight_bzlqdw.jpg'
            height={562}
            width={750}
            className='rounded-lg'
            alt={'WBPC at night'}
          />
        </div>
        <h4 className='text-center font-bold text-xl text-emerald-600'>
          Day Five
        </h4>
        <p></p>
        <div className='flex justify-center'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693740/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-moonlight_bzlqdw.jpg'
            height={562}
            width={750}
            className='rounded-lg'
            alt={'WBPC at night'}
          />
        </div>
      </div>
      <div className='max-w-6xl mx-auto'>
        <Comment />
      </div>
      <Footer />
    </div>
  );
};

export default Wilderness;
