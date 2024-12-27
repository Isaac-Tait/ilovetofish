import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake, faSun } from '@fortawesome/free-regular-svg-icons'
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className="h-screen overflow-y-auto bg-gray-400 heropattern-bubbles-gray-800">
      <Header />
      <div className="mx-auto max-w-6xl px-1">
        <h2 className="mx-auto w-fit rounded-t-md bg-rose-400 p-1 text-2xl font-semibold text-lime-400">
          About the author
        </h2>
        <p className="rounded-md bg-rose-400 p-1 text-center text-lime-400">
          My name is Isaac Tait. I love to fish. I also love trail running, cycling, skiing,
          climbing, && hiking. When I am at home I enjoy cooking vegetarian meals and listening to
          jazz.
        </p>
        <div className="flex justify-center pt-10">
          <Image
            src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1644193725/profile/profile-pic_xnjych.jpg"
            height={562}
            width={750}
            className="rounded-2xl shadow-xl"
            alt={'Project'}
          />
        </div>
        <p className="pt-4 text-center">
          To stay up to date with blog posts follow me on{' '}
          <Link
            href="https://www.instagram.com/iloveto.fish/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 underline underline-offset-4"
          >
            Instagram
          </Link>
          &nbsp;or&nbsp;
          <Link
            href="https://twitter.com/Isaac_Tait_83"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 underline underline-offset-4"
          >
            Twitter
          </Link>
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default About
