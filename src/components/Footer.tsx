import React from 'react'
import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter, FaVoicemail, FaYoutube } from 'react-icons/fa'
import celestia from '@/assets/Celestia Studio.png'


const Footer = () => {
    return (
        <>
            <div className='w-full h-[65vh]  py-3 sm:py-2 md:py-4 relative overflow-hidden flex flex-col'>
                {/* Video Background Layer */}
               

                {/* Content Layer */}
                <div className="container mx-auto relative z-20 flex-grow">
                    <div className="relative flex justify-center ">
                        <img
                            src={celestia}
                            alt="the celestia studio"
                            className="w-full max-w-[260px] sm:max-w-[260px] md:max-w-[260px]  object-cover rounded-[30px] sm:rounded-[40px] "
                        />
                    </div>
                    <div className="nav flex justify-center pt-4">
                        <ul className='flex gap-20 text-xl font-semibold font-arial text-white'>
                            <li >Home</li>
                            <li >About</li>
                            <li >Services</li>
                            <li >Events</li>
                            <li >Contact</li>
                        </ul>
                    </div>
                </div>

                {/* Icons at the end/bottom */}
                <div className="icons relative z-20 pb-4">
                    <ul className='flex justify-center gap-4 text-white text-2xl'>
                        <li><FaYoutube /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                    </ul>
                </div>
            </div>
            <div className='h-20 w-full text-center content-center text-xl'>@. CREATED BY Wix Website Templates</div>
        </>
    )
}

export default Footer