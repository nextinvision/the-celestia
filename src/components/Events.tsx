import React from 'react'

const Events = () => {
    return (
        <div className='min-h-screen bg-[#FDFCFA] flex flex-col items-center justify-between p-12'>
            {/* Infinite Scrolling Text Strip */}
            <div className='bg-[#856654] overflow-hidden py-4 relative max-w-[96vw] rounded-[20px]'>
                <div className='animate-scroll-left whitespace-nowrap inline-block'>
                    <span className='text-white text-xl sm:text-2xl md:text-3xl font-medium mx-8'>
                        Prosperity + wellness + Prosperity + wellness + Prosperity + wellness + Prosperity + wellness + Prosperity + wellness +
                    </span>
                    <span className='text-white text-xl sm:text-2xl md:text-3xl font-medium mx-8'>
                        Prosperity + wellness + Prosperity + wellness + Prosperity + wellness + Prosperity + wellness + Prosperity + wellness +
                    </span>
                </div>
            </div>

            <div className='bg-[#E9E2DC] max-w-[1200px] min-h-[65vh] px-6 sm:px-12 md:px-20 py-12 sm:py-16 md:py-20 flex flex-col justify-center rounded-[20px]'>
                <div className='max-w-7xl mx-auto w-full'>
                    <div className='grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start'>

                        {/* Left Side - Heading */}
                        <div className='text-[#856654] flex items-center justify-center md:justify-start'>
                            <div className='space-y-2 text-center md:text-left'>
                                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight'>
                                    HELPING <span className='italic font-light'>you</span> ACHIEVE
                                </h2>
                                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic font-light leading-tight'>
                                    your NEXT LEVEL <span className='font-normal not-italic'>in</span>
                                </h3>
                                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight'>
                                    BUSINESS & LIFE
                                </h3>
                            </div>
                        </div>

                        {/* Right Side - Bullet Points */}
                        <div className='text-[#2C2C2C] space-y-4'>
                            <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                                You're ready to grow - to evolve to the next version of your creative expression, start new revenue streams, build new business ventures. You're ready to optimize your talent.
                            </p>
                            <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                                You want the freedom to work on projects that excite you, be your most authentic self, and start earning what you're worth. You need consistent support.
                            </p>
                            <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                                You're craving connection, inspiration, and more energy from people at your level who "just get it".
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* CSS for infinite scroll animation */}
            <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    )
}

export default Events