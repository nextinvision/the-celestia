import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import soundhealing from "@/assets/soundhealing.jpg"
import reiki from "@/assets/reiki.png"
import numerology from "@/assets/numer.jpg"
import tarotCards from "@/assets/tarot-cards.jpg"
import crystals from "@/assets/crystals.jpg"
import intuitivecoaching from "@/assets/coaching.jpg"
import starsTop from "@/assets/servicestarstop.png"
import starsBottom from "@/assets/servicesstarsbottom.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const services = [
  {
    name: "Sound Healing",
    description: "Discover clarity through ancient wisdom",
    image: soundhealing,
    route: "/sound-healing"
  },
  {
    name: "Reiki & Multi Modality Healing",
    description: "Restore balance through energy healing",
    image: reiki,
    route: "/reiki"
  },
  {
    name: "Crystal Treasure",
    description: "Harness the energy of sacred crystals",
    image: crystals,
    route: "/crystal-treasure"
  },
  {
    name: "Tarot Guidance",
    description: "Unlock the power of numbers in your life",
    image: tarotCards,
    route: "/tarot-guidance"
  },
  {
    name: "Numerology",
    description: "Harmonize your energy with vibrational therapy",
    image: numerology,
    route: "/numerology"
  },
  {
    name: "Intuitive Coaching",
    description: "Navigate life with intuitive guidance",
    image: intuitivecoaching,
    route: "/intuitive-coaching"
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [api, setApi] = useState<CarouselApi>();

  // Auto-play carousel
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className='min-h-screen bg-[#FDFCFA] flex flex-col items-center justify-center  relative overflow-hidden'>
      {/* Stars Top */}
      <div className="absolute top-0 right-0 w-40 sm:w-48 md:w-56 lg:w-72 opacity-80 pointer-events-none z-0 animate-[pulse_4s_ease-in-out_infinite]">
        <img src={starsTop} alt="" className="w-full h-auto" />
      </div>

      {/* Stars Bottom */}
      <div className="absolute bottom-0 left-0 w-40 sm:w-48 md:w-56 lg:w-72 opacity-80 pointer-events-none z-0 animate-[pulse_4s_ease-in-out_infinite]" style={{ animationDelay: "2s" }}>
        <img src={starsBottom} alt="" className="w-full h-auto" />
      </div>

      {/* Scattered Star Symbols */}
      <div className="absolute top-1/4 left-12 text-4xl text-[#856654] opacity-40 animate-bounce" style={{ animationDuration: '3000ms' }}>✦</div>
      <div className="absolute top-1/3 right-20 text-3xl text-[#856654] opacity-35 animate-pulse" style={{ animationDuration: '2000ms' }}>✦</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl text-[#856654] opacity-30 animate-bounce" style={{ animationDelay: "1s", animationDuration: '4000ms' }}>✦</div>
      <div className="absolute bottom-1/4 right-1/3 text-3xl text-[#856654] opacity-35 animate-pulse" style={{ animationDelay: "0.5s", animationDuration: '3000ms' }}>✦</div>

      {/* Plus/Cross Symbols */}
      <div className="absolute top-20 left-20 text-2xl text-[#856654] opacity-25 animate-spin" style={{ animationDuration: '10000ms' }}>+</div>
      <div className="absolute top-1/2 left-10 text-xl text-[#856654] opacity-20 animate-pulse">+</div>
      <div className="absolute bottom-32 right-16 text-2xl text-[#856654] opacity-25 animate-spin" style={{ animationDuration: '12000ms' }}>+</div>
      <div className="absolute bottom-20 left-1/3 text-xl text-[#856654] opacity-20 animate-pulse delay-75">+</div>

      <div className="container max-w-8xl mx-auto relative z-10">
        {/* Header Banner */}
        <div className="mb-12 md:mb-8 p-6 sm:p-8 md:p-12">
          <div className="bg-[#856654] text-white px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 rounded-lg shadow-xl max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              let's cut to the chase...
            </h2>
            <div className="space-y-2 text-xs sm:text-sm md:text-base opacity-90 leading-relaxed">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me.
              </p>
              <p>
                It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.
              </p>
            </div>
          </div>
        </div>

        {/* Choose Your Service Heading */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl water-brush-regular italic text-[#856654] mb-6">
          Choose Your Service
        </h1>

        {/* Carousel - Show 3 at a time */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-8xl mx-auto"
        >
          <CarouselContent className="-ml-8">
            {services.map((service, index) => {
              // Cycle through 3 colors
              const colors = ['#856654', '#D0BDAC', '#E9E2DC'];
              const bgColor = colors[index % 3];

              return (
                <CarouselItem key={index} className="pl-8 basis-full md:basis-1/2 lg:basis-1/3">
                  <div
                    className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => navigate(service.route)}
                  >
                    <div
                      className="absolute top-[65px] w-[25vw] z-10 "
                      style={{
                        background: 'linear-gradient(145deg, #F5E3B8 0%, #C8A25C 25%, #A88042 50%, #7A4B13 75%, #673500 100%)',
                        boxShadow: '0 4px 12px rgba(142, 106, 72, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                      }}
                    >
                      <h3
                        className="text-center text-white font-bold text-sm sm:text-base md:text-lg py-3 px-3"
                        style={{
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}
                      >
                        {service.name}
                      </h3>
                    </div>
                    {/* Individual Card Container */}
                    <div className="relative w-full max-w-sm mt-12">
                      {/* Golden Banner - Individual for each card */}


                      {/* Card with Colored Frame */}
                      <div
                        className="w-full p-5 sm:p-6 md:p-7 shadow-xl relative"
                        style={{ backgroundColor: bgColor }}
                      >
                        {/* Image without border */}
                        <div className="overflow-hidden aspect-[4/5]">
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Decorative dots at bottom */}
                        <div className="absolute bottom-3 left-4 flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#704C37] opacity-60"></div>
                          <div className="w-2 h-2 rounded-full bg-[#704C37] opacity-60"></div>
                        </div>
                        <div className="absolute bottom-3 right-4 flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#704C37] opacity-60"></div>
                          <div className="w-2 h-2 rounded-full bg-[#704C37] opacity-60"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            }
            )}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-[#856654] text-white border-none hover:bg-[#6B5243]" />
          <CarouselNext className="right-2 bg-[#856654] text-white border-none hover:bg-[#6B5243]" />
        </Carousel>
      </div>
    </div>
  )
}

export default ServicesSection