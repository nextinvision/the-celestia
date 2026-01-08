import React from 'react'

const PowefulSection = () => {
    return (
        <div className='bg-[#D0BDAC] w-full min-h-[65vh] px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col justify-center'>
            <div className='max-w-6xl mx-auto w-full'>
                {/* Top Text */}
                <p className='text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6 font-medium'>
                    Free audio program and workbook
                </p>

                {/* Main Heading */}
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 sm:mb-8 md:mb-10 leading-tight font-serif'>
                    HOW TO POWERFULLY CREATE
                </h2>

                {/* Description */}
                <p className='text-base sm:text-lg md:text-xl text-gray-900 mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed'>
                    Get a boost of clarity, focus, and direction to design an inspired career and life. Understand how you want to
                    scale and who you need to become to get there. This framework will help you take inspired action and
                    provide a roadmap to cultivate irresistible conviction to move your vision forward with confidence.
                </p>

                {/* CTA Button */}
                <div className='flex justify-end'>
                    <button
                        className='relative text-white font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-md text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden'
                        style={{
                            background: 'linear-gradient(145deg, #F5E3B8 0%, #C8A25C 25%, #A88042 50%, #7A4B13 75%, #673500 100%)',
                            boxShadow: '0 4px 15px rgba(122, 75, 19, 0.3), inset 0 1px 0 rgba(245, 227, 184, 0.5)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(145deg, #DDC088 0%, #A88042 25%, #7A4B13 50%, #673500 75%, #673500 100%)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(145deg, #F5E3B8 0%, #C8A25C 25%, #A88042 50%, #7A4B13 75%, #673500 100%)';
                        }}
                    >
                        Let's Connect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PowefulSection