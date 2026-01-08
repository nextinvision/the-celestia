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
    <div className='min-h-screen bg-[#FDFCFA] flex flex-col items-center justify-center p-6 sm:p-8 md:p-12 relative overflow-hidden'>
      {/* Star Decorations Top Right */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 opacity-50 pointer-events-none">
        <img src={starsTop} alt="" className="w-full h-auto" />
      </div>

      {/* Star Decorations Bottom Left */}
      <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 opacity-50 pointer-events-none">
        <img src={starsBottom} alt="" className="w-full h-auto" />
      </div>

      {/* Scattered Star Symbols */}
      <div className="absolute top-1/4 left-12 text-4xl text-[#856654] opacity-40">✦</div>
      <div className="absolute top-1/3 right-20 text-3xl text-[#856654] opacity-35">✦</div>
      <div className="absolute bottom-1/3 left-1/4 text-2xl text-[#856654] opacity-30">✦</div>
      <div className="absolute bottom-1/4 right-1/3 text-3xl text-[#856654] opacity-35">✦</div>

      {/* Plus/Cross Symbols */}
      <div className="absolute top-20 left-20 text-2xl text-[#856654] opacity-25">+</div>
      <div className="absolute top-1/2 left-10 text-xl text-[#856654] opacity-20">+</div>
      <div className="absolute bottom-32 right-16 text-2xl text-[#856654] opacity-25">+</div>
      <div className="absolute bottom-20 left-1/3 text-xl text-[#856654] opacity-20">+</div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header Banner */}
        <div className="mb-12 md:mb-16">
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
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-waterbrush italic text-[#856654] mb-12 md:mb-16">
          Choose Your Service
        </h1>

        {/* Carousel - Show 3 at a time */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => {
              // Cycle through 3 colors
              const colors = ['#856654', '#D0BDAC', '#E9E2DC'];
              const bgColor = colors[index % 3];

              return (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div
                    className="flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
                    onClick={() => navigate(service.route)}
                  >
                    {/* Card Container */}
                    <div className="relative w-full max-w-sm">
                      {/* Image Card with Colored Frame */}
                      <div
                        className="p-4 sm:p-5 md:p-6 shadow-lg w-full"
                        style={{ backgroundColor: bgColor }}
                      >
                        <div
                          className="border-4 overflow-hidden aspect-[3/4]"
                          style={{
                            borderColor: index === 0 ? '#4A9ECC' : '#8B6F47'
                          }}
                        >
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Golden Banner - Positioned on top of card */}
                      <div
                        className="absolute top-0 left-0 right-0 px-8 mt-[-15px]"
                      >
                        <div
                          className="relative"
                          style={{
                            background: 'linear-gradient(145deg, #8E6A48 0%, #C49B63 35%, #E6C183 65%, #B08859 100%)',
                            boxShadow: '0 4px 12px rgba(142, 106, 72, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                            clipPath: 'polygon(5% 0%, 95% 0%, 100% 15%, 100% 85%, 95% 100%, 5% 100%, 0% 85%, 0% 15%)'
                          }}
                        >
                          <h3
                            className="text-center text-white font-bold text-base sm:text-lg md:text-xl py-3 px-4"
                            style={{
                              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}
                          >
                            {service.name}
                          </h3>
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