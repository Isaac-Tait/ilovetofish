import Header from '../components/Header'
import Footer from '../components/Footer'

import socialList from '../util/social'
import SocialCard from '../components/SocialCard'

const Social = () => {
  return (
    <div className="flex h-screen flex-col bg-gray-400">
      <Header />

      <div className="grow place-content-center overflow-y-scroll">
        {/* iPhone Mockup */}
        <div class="relative mx-auto h-[600px] w-[320px] rounded-[2.5rem] border-[14px] border-gray-800 bg-gray-800 md:h-[500px] dark:border-gray-800">
          {/* Mute Button */}
          <div class="absolute -start-[17px] top-[72px] h-[32px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Top Volume Button */}
          <div class="absolute -start-[17px] top-[124px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Bottom Volum Button */}
          <div class="absolute -start-[17px] top-[178px] h-[46px] w-[3px] rounded-s-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Power Button */}
          <div class="absolute -end-[17px] top-[142px] h-[64px] w-[3px] rounded-e-lg bg-gray-800 dark:bg-gray-800"></div>
          {/* Screen Content */}
          <div class="flex h-[572px] w-[292px] flex-wrap overflow-scroll rounded-[2rem] bg-neutral-400 md:h-[472px] dark:bg-gray-600">
            <p className="p-2 text-center font-medium text-rose-500">
              My <span className="italic">Super</span> Great Instagram Page
            </p>
            {socialList.map((d) => (
              <SocialCard key={d.id} url={d.url} slug={d.slug} title={d.title} image={d.image} />
            ))}
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
