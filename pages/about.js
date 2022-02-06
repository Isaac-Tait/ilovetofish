import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../pages/components/header'
import Footer from '../pages/components/footer'

const About = () => {
    return (
        <div className='heropattern-bubbles-neutral-100 h-screen'>
            <Header />
                <p>About</p>
            <div className='fixed bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
};

export default About;