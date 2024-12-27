import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'

import socialList from '../util/social'
import SocialCard from '../components/SocialCard'

const Social = () => {
  return (
    <div className="h-screen overflow-y-auto heropattern-bubbles-neutral-100">
      <Header />
      {/* iPhone Mockup */}
      <div class="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 dark:border-gray-800">
        <div class="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
        <div class="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
        <div class="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
        <div class="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
        {/* Screen Content */}
        <div class="flex h-[572px] w-[272px] flex-wrap overflow-hidden rounded-[2rem] bg-white dark:bg-gray-800">
          <p className="p-2 text-center font-medium text-red-500">
            My <span className="italic">Super</span> Great Instagram Page
          </p>
          {socialList.map((d) => (
            <SocialCard key={d.id} url={d.url} slug={d.slug} title={d.title} image={d.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Social
