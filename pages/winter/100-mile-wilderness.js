import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Breadcrumbs from 'nextjs-breadcrumbs'

import Comment from '../../components/Comment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Wilderness = () => {
  return (
    <div className="heropattern-topography-neutral-100">
      <Header />
      <Breadcrumbs useDefaultStyle omitRootLabel labelsToUppercase={true} />
      <div className="mx-auto h-screen max-w-6xl overflow-y-scroll px-1">
        <h1 className="mb-8 flex justify-center text-2xl font-semibold text-emerald-600">
          Maine&#39;s One Hundred Mile Wilderness
        </h1>
        <p
          className="first-letter:float-left first-letter:mr-3
                    first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                    first-line:uppercase first-line:tracking-widest"
        >
          When I first{' '}
          <Link
            href="https://www.nytimes.com/2021/11/16/travel/maine-cross-country-skiing.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline hover:text-indigo-400"
          >
            read about the AMC hut system
          </Link>
          &nbsp;in the 100 Mile Wilderness area of Maine I knew instantly that I had to go.
        </p>
        <p>
          So, I called AMC to make my reservations in early spring. However, they informed me that I
          had to wait until the Monday after Labor Day to call. I made a reminder to call and then
          spent the rest of the spring and summer dreaming of the trip. Well September came and I
          called to make my reservations. The only problem is that West Branch Pond Camp (WBPC)
          allows people to make reservations anytime they want. Consequently WBPC was entirely
          booked for the month of February save one spot on a Monday. After a bit of finagling with
          the schedule I was able to secure lodging with AMC. Rather than start at Mediwisla Lodge
          and ski south to Gorman Chairback we decided on an alternate itinerary. We opted to skip
          Mediwisla and start at WBPC and ski to Little Lyford on day two - then on to Gorman
          Chairback for day three. Then back to Little Lyford Day four and on day five ski back to
          WBPC. In total we ended up clocking fifty miles of cross country skiing over the five
          days. Needless to say it was an epic trip.{' '}
        </p>
        <div className="flex justify-center pt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693740/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-moonlight_bzlqdw.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'WBPC at night'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          For the first night we had Cabin 4 to ourselves, which overlooked First West Branch Pond
        </p>
        <p>
          I went back and forth for several weeks on whether I would publish a trip report about
          this adventure. On one hand I was excited to share the experience with my readers. On the
          other hand though it was a much more profound spiritual experience than I had anticipated.
          I was concerned that blogging about the trip would not do the experience justice...The
          last year or so I have been working on{' '}
          <Link
            href="https://www.wormwoodsaga.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline hover:text-indigo-400"
          >
            self-publishing my novel
          </Link>
          &nbsp;. At times I feel like I am dropping-the-ball, so to speak, in telling my stories
          and ideas in my head adequately through my writing. Putting myself out there as an indie
          author and in a way this blog has caused a lot of self doubt and maybe even fear to crop
          up in my mind. Fear about expressing my thoughts and emotions in a public domain. The
          internet can be an ugly place.
        </p>
        <p className="pt-4">
          However, it can be a beautiful place filled with wonder, enjoyment, inspiration, success,
          and happiness. In the end I decided to take a leap and blog about my trip through the 100
          Mile Wilderness on skis...
        </p>
        <h4 className="text-center text-xl font-bold text-emerald-600">Day One</h4>
        <p className="py-2">
          I woke up before my alarm at 0445. My clothes were laid out in the living room and I had
          made overnight oats the evening before for my breakfast. While the tea kettle came to a
          boil I poured Vermont maple syrup over my oats and stirred it in. My gear was laid out in
          the guest room downstairs. I had spent the last two days going over and over my packing
          list to make sure I had everything I needed for the trip. Before I left I kissed my wife
          and son goodbye, they were snoring peacefully in their beds and I snuck out. The drive to
          my friend Brandon&#39;s house in Rhode Island was quick. I piled my gear in his truck and
          we hit the road, making a pit stop at Dunkin Donuts for second breakfast before getting on
          the highway. The drive up was spent deep in conversation from buying our first homes, to
          family life, recalling our past adventures, politics, religion, and climate change. You
          know small talk. As we got closer the roads became less and less plowed until we found
          ourselves driving over snowy roads with three to four foot snow banks on either side. My
          buddy did not have snow tires, but we had four wheel drive. We did not want to use it
          though by sliding into a snowbank on our first day so we took it real easy driving into
          West Branch Pond Camp (WBPC). Check in was a breeze and in short order we had our gear
          stashed in our cabin and we headed out for an evening tour. The wind was blowing pretty
          fierce and anytime we got out of the trees our faces got so cold it felt like they were
          going to fall off. After a fun five miles or so poking around on some old logging roads we
          scurried back to our cabin, excited for our first meal of the trip. Possibly the greatest
          aspect of this trip is that all your meals are cooked for you. Breakfast and dinner are
          enjoyed at the cabin and after breakfast you pick up your trail lunch that you ordered
          after dinner the night before! To say the food was exquisitely delicious would be an
          understatement. For dinner that night I had a Beyond Meatloaf, with roasted carrots, bean
          salad, home made bread, and a puff ball with homemade whip cream for desert! That night we
          stuff our fireplace with a few logs and fell asleep to the sound of silence that can only
          be found in a place with no cell reception or wifi. It was amazing.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-_qjpmqy.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'WBPC at night'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          Stopping to admire the sunset over First West Branch Pond
        </p>
        <h4 className="text-center text-xl font-bold text-emerald-600">Day Two</h4>
        <p className="py-2">
          The morning dawned crystal clear and cold. Without windchill it was -7. The week prior an
          arctic blast had dropped into New England sending the temperatures plummeting to -40
          degrees Fahrenheit! Again we all had a wonderful breakfast in the kitchen of WBPC. There
          were several other parties in the kitchen eating with us and it was a great time to get to
          know everyone and to hear about their lives. We gathered our lunches and put our luggage
          outside of our cabins. The snow mobiles would be along shortly to take them on to our
          various destinations. We certainly were traveling in luxury! As the day progressed the
          blue skies gave way to clouds and the temperatures warmed a little. My friend and I
          explored several side logging roads and had a blast making fresh tracks on some immaculate
          snow. After nearly 12 miles of skiing we arrived at Little Lyford. We had heard rumors of
          a wood fired sauna and made quick work of getting it going.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-west_branch_pond_camp_qlqqgj.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'WBPC breakfast'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">Meals were a social affair</p>
        <div className="flex justify-center pt-4">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693742/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-creek_crossing_fbbdrf.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'back country nordic skiing'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          Crossing an unnamed tributary of the West Branch Pleasant River
        </p>
        <h4 className="text-center text-xl font-bold text-emerald-600">Day Three</h4>
        <p>
          The night before we had laid out a fun looking route to take us to Gorman Chairback Lodge.
          While most folks did the Lodge to Lodge trail we were going to piece together a much
          longer loop that would take us on several black and blue runs that had not been groomed in
          a few days. Then we would wrap it up by crossing the full length of Long Pond, which was
          frozen enough and marked for safe passage.
        </p>
        <div className="flex justify-center pt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693742/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-pond_wd62ju.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'letting the wind push us across long pond'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          The wind at our backs and the sun on our face as we ski across Long Pond
        </p>
        <p>
          The snow in the morning was fast and the trails, which were more narrow than the last two
          days, kept us on our toes. Latter in the day it warmed up a bit and we had to stop and put
          wax on our skis to keep the snow from sticking. This morning was probably the best skiing
          of the trip, and we thoroughly enjoyed every second of it. We stopped for lunch just
          before we got to Long Pond as it was pretty windy and there was a nice spot in the trees.
          As we started to cross Long Pond we realized that with the wind at our backs we did not
          have to work hard at all to propel ourselves forward. The wind was doing all the work. We
          got to Gorman Chairback with just enough time to grab our luggage, stash it in the bunk
          house, buy a few beers, and find a nice spot on the lake out of the wind to watch the
          sunset. It was amazing! That night after dinner we headed out to the lake for a polar bear
          plunge. It was 15 degrees or so with a 20 mile per hour wind - it was cold and we were
          only in the water for a second or two. It was strange though that the water felt warmer
          than the outside air. We stayed up late that night hanging out with our bunk mates - a
          group of seven ladies from southern Oregon.
        </p>
        <div className="flex justify-center pt-4">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-long_pond_wvu80c.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'sunset over the pond'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          Three unknown skiers arriving at Gorman Chairback
        </p>
        <h4 className="text-center text-xl font-bold text-emerald-600">Day Four</h4>
        <p>
          Out of all the lodges Gorman Chairback was my favorite in terms of ambiance. West Branch
          Pond Camp was the best in terms of food. That morning I enjoyed a tofu scramble, fruit
          salad, and some great tea. Then Brandon and I set out for Little Lyford to begin our
          journey back towards civilization. We took a more direct route this time since we were
          tired and arrived in camp early. Our luggage was already there so we headed to the bunk
          house and took a nice power nap. When we woke up we headed up to the sauna for a nice long
          &quot;soak&quot; and to do some hot yoga.
        </p>
        <div className="flex justify-center pt-2">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-gorman_chairback_b0yyid.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'gorman chairback lodge'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          Gorman Chairback Lodge with Long Pond in the background
        </p>
        <p className="pb-2">
          There was a snow storm forecasted for the evening and the next day it was supposed to warm
          up and turn to rain. After dinner we tried un-successfully to get a group together to go
          out for a night ski. So we headed out on our own by headlamp into the blizzard. The snow
          was coming down hard and had already accumulated three inches. On top of groomed corduroy
          it was heaven. We could only see a few feet in front of us as the snow was falling so
          thick our headlamps could not cut through it. At our high point we stopped, turned off our
          headlamps, and drank a beer. Eventually the cold got the better of us and we turned our
          headlamps back on, pointed our skis downhill and whooped and hollered with glee all the
          way back to camp.
        </p>
        <h4 className="text-center text-xl font-bold text-emerald-600">Day Five</h4>
        <p>
          A little groggy from too much beer, too little sleep, and a dose of sadness to be leaving
          we donned our skis and pushed on to WBPC where we had left our truck. We had eight miles
          to ski followed by a seven hour drive to get home. It promised to be a big day. Thankfully
          the rain forecasted for the morning was much lighter than expected, in fact we were even
          greeted with some blue sky and sunshine. However, as we drew close to WBPC the skies
          opened up and we got soaked. The last few miles of skiing the forest closed in around us
          and it became difficult to decipher in what direction you were skiing. At times it felt
          like you were skiing in circles. Soon enough though we emerged from the forest back at
          West Branch Pond Camp. Our luggage was there waiting for us and after quickly changing we
          hit the road. Because of the rain the county and the WBPC owner had plowed the road to the
          gravel, so the drive out was smooth. There was even a rainbow over First Roach Pond that
          was absolutely beautiful.
        </p>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-sauna_jftvkg.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'little lyford at night'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          Little Lyford at night before the snow started falling
        </p>
        <div className="flex justify-center pt-4">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693742/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-west_branch_pond_camp_-return_k9zrt2.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'back at WBPC'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          All good things must come to an end - arriving back at West Branch Pond Camp
        </p>

        <p className="py-4">
          It was great to be back at home. Besides one small patch of cell reception at Gorman
          Chairback I had spent the trip disconnected from the outside world. When I come back from
          trips like this it seems like my son has grown a foot. I spent the weekend hanging out at
          home, drying my gear, and planning for the next ski trip - a family one this time to
          Jackson, NH for President&#39;s Day Weekend. This winter has been warm, as a write this
          the 22-23 season&#39;s first measurable snow storm has come and gone and the remnants are
          melting all around me. Tonight it is supposed to rain and tomorrow it will be 53. Still I
          have three weeks on skis with another week of plans for the rest of winter and early
          spring. I am now starting to think about putting away my skis and dusting off my fishing
          gear. New England is a truly special place with such a plethora of amazing outdoor
          adventure opportunities in such close proximity to each other. I am blessed.{' '}
        </p>
        <div className="flex justify-center pt-6">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1677693741/100%20Mile%20Wilderness/100_mile_wilderness-nordic_skiing-cross_country_skiing-maine-wilderness-dark_sky_preserve-sunset_nxptzw.jpg"
            height={562}
            width={750}
            className="rounded-lg"
            alt={'back at WBPC'}
          />
        </div>
        <p className="flex justify-center py-2 text-xs italic">
          All smiles after an epic day sandwiched in a mind bending trip
        </p>
        <p className="my-4 text-center text-xl">
          To check out all the photos from our trip{' '}
          <Link
            href=" https://photos.app.goo.gl/A18gDkx1egmckvrr6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 underline hover:text-indigo-400"
          >
            click here
          </Link>
        </p>
      </div>
      <div className="mx-auto max-w-6xl">
        <Comment />
      </div>
      <Footer />
    </div>
  )
}

export default Wilderness
