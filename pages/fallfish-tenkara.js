import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from '../pages/components/header'
import Footer from '../pages/components/footer'

const Fallfish = () => {
    return (
        <div className='heropattern-bubbles-neutral-100 h-screen'>
            <Header />
                <p>Fallfish</p>
            <div className='fixed bottom-0 w-full'>
                <Footer />
            </div>
        </div>
    )
};

export default Fallfish;