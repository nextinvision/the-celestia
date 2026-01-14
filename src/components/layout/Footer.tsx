import React from 'react'
import { FaFacebook, FaInstagram, FaMailBulk, FaTwitter, FaVoicemail, FaYoutube } from 'react-icons/fa'
import celestia from '@/assets/Celestia Studio.png'


const Footer = () => {
    return (
        <>
            <div className='w-full min-h-[50vh] md:h-[65vh] py-6 sm:py-4 md:py-4 relative overflow-hidden flex flex-col'>
                {/* Video Background Layer */}


                {/* Content Layer */}
                <div className="container mx-auto relative z-20 flex-grow px-4">
                    <div className="relative flex justify-center ">
                        <img
                            src={celestia}
                            alt="the celestia studio"
                            className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-cover rounded-[30px] sm:rounded-[40px] "
                        />
                    </div>
                    <div className="nav flex justify-center pt-4">
                        <ul className='flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-20 text-sm sm:text-base md:text-xl font-semibold font-arial text-white'>
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
                    <ul className='flex justify-center gap-4 sm:gap-6 text-white text-2xl sm:text-3xl md:text-4xl'>
                        <li><FaYoutube /></li>
                        <li><FaInstagram /></li>
                        <li><FaTwitter /></li>
                    </ul>
                </div>
            </div>
            <div className='h-auto py-4 md:h-20 w-full text-center content-center text-xs sm:text-sm md:text-xl bg-[#FDFCFA] px-4' >@. CREATED BY Wix Website Templates</div>
        </>
    )
}

export default Footer