import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSnowflake,
  faSun,
} from '@fortawesome/free-regular-svg-icons';
import { faRainbow, faTree } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className='heropattern-bubbles-neutral-100 h-screen overflow-y-auto'>
      <Header />
      <header className='lg:flex lg:flex-wrap lg:justify-center mx-1'>
        <div className='lg:w-2/3 flex my-auto justify-between'>
          <h3 className='text-3xl font-semibold'>
            <Link href={'/spring'} legacyBehavior>
              <a className='text-lime-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faRainbow} />
              </a>
            </Link>
          </h3>
          <h3 className='text-3xl font-semibold'>
            <Link href={'/summer'} legacyBehavior>
              <a className='text-rose-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faSun} />
              </a>
            </Link>
          </h3>
          <h3 className='text-3xl font-semibold'>
            <Link href={'/fall'} legacyBehavior>
              <a className='text-fuchsia-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faTree} />
              </a>
            </Link>
          </h3>
          <h3 className='text-3xl font-semibold mr-4'>
            <Link href={'/winter'} legacyBehavior>
              <a className='text-teal-400 hover:text-indigo-500'>
                <FontAwesomeIcon icon={faSnowflake} />
              </a>
            </Link>
          </h3>
        </div>
      </header>
      <div className='max-w-6xl mx-auto px-1'>
        <h2 className='font-semibold text-2xl text-center text-red-500'>
          About the author
        </h2>
        <p>
          My name is Isaac Tait. I love to fish. I also love trail
          running, cycling, skiing, rock climbing, && backpacking.
          When I am at home I enjoy cooking vegan meals and listening
          to jazz.
        </p>
        <div className='flex justify-center pt-10'>
          <Image
            src='https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1644193725/profile/profile-pic_xnjych.jpg'
            height={562}
            width={750}
            className='rounded-2xl shadow-xl'
            alt={'Project'}
          />
        </div>
        <p className='text-center pt-4'>
          To stay up to date with blog posts follow me on{' '}
          <Link
            href='https://www.instagram.com/iloveto.fish/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4 hover:text-blue-500'
          >
            Instagram
          </Link>
          &nbsp;or&nbsp;
          <Link
            href='https://twitter.com/Isaac_Tait_83'
            target='_blank'
            rel='noopener noreferrer'
            className='underline underline-offset-4 hover:text-blue-500'
          >
            Twitter
          </Link>
        </p>
      </div>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default About;
