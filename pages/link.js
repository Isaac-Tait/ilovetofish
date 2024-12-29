import Header from '../components/Header'
import Footer from '../components/Footer'

import socialList from '../util/social'
import SocialCard from '../components/SocialCard'

import Image from 'next/image'

const Social = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-400">
      <Header />
      <div className="grow place-content-center overflow-y-scroll">
        {/* iPhone Mockup */}
        <div className="relative mx-auto h-[600px] w-[320px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 md:h-[550px] dark:border-gray-800">
          {/* Mute Button */}
          <div className="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Top Volume Button */}
          <div className="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Bottom Volume Button */}
          <div className="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Power Button */}
          <div className="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Screen Content */}
          <div className="h-[572px] w-[292px] overflow-scroll rounded-[2rem] bg-neutral-100 p-4 md:h-[522px] dark:bg-gray-600">
            {/* Screen Header */}
            <div className="flex items-center justify-between p-2">
              <p className="font-bold">iloveto.fish</p>
              <Image src="/threadsLogo.png" height={20} width={20} alt={'threads'} />
            </div>
            {/* Image Cards */}
            <div className="grid grid-cols-2 gap-2">
              {socialList.map((d) => (
                <SocialCard key={d.id} url={d.url} slug={d.slug} title={d.title} image={d.image} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Social
