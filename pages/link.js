import Link from 'next/link'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Social = () => {
  return (
    <div className="h-screen overflow-y-auto heropattern-bubbles-neutral-100">
      <Header />
      <div className="mx-auto max-w-6xl px-1"></div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Social
