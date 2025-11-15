import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import servicesPhoto1 from "@/assets/img4.jpg";
import servicesPhoto2 from "@/assets/img5.jpg";
import tarotCards from "@/assets/tarot-cards.jpg";

const services = [
  {
    name: "Tarot Guidance",
    description: "Discover clarity through ancient wisdom",
    image: tarotCards,
  },
  {
    name: "Numerology",
    description: "Unlock the power of numbers in your life",
    image: servicesPhoto1,
  },
  {
    name: "Sound Healing",
    description: "Harmonize your energy with vibrational therapy",
    image: servicesPhoto2,
  },
  {
    name: "Reiki & Multi Modality Healing",
    description: "Restore balance through energy healing",
    image: servicesPhoto1,
  },
  {
    name: "Intuitive Coaching",
    description: "Navigate life with intuitive guidance",
    image: servicesPhoto2,
  },
  {
    name: "Crystal Treasure",
    description: "Harness the energy of sacred crystals",
    image: tarotCards,
  },
];

const ServicesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      const snap = api.selectedScrollSnap();
      setCurrent(snap);
    };

    // Set initial value
    updateCurrent();

    // Listen for carousel changes
    api.on("select", updateCurrent);
    api.on("reInit", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
      api.off("reInit", updateCurrent);
    };
  }, [api]);

  // Calculate which 3 services to show based on current slide
  // The carousel shows 3 services at a time
  const getVisibleServices = () => {
    // Determine which group of 3 is currently visible
    // Group 0: services 0-2 (Tarot, Numerology, Sound Healing)
    // Group 1: services 3-5 (Reiki, Intuitive, Crystal)
    
    // If current slide is 0, 1, or 2, we're showing the first group
    // If current slide is 3, 4, or 5, we're showing the second group
    let startIndex: number;
    
    if (current < 3) {
      startIndex = 0; // First group
    } else {
      startIndex = 3; // Second group
    }
    
    return services.slice(startIndex, startIndex + 3);
  };

  const visibleServices = getVisibleServices();
  
  // Force re-render when current changes by using it in the key
  const serviceListKey = `services-${Math.floor(current / 3)}`;

  return (
    <section id="services" className="w-full bg-[#FFF4E1] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Left area: Carousel with three service cards */}
          <div className="md:col-span-2 relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, i) => (
                  <CarouselItem key={i} className="pl-2 md:pl-4 basis-full md:basis-1/3 min-w-0">
                    <div className="flex-1 bg-transparent">
                      <figure className="w-full">
                        {/* Container with arched top using SVG clip-path */}
                        <div
                          className="w-full block relative overflow-hidden service-image-container"
                          style={{ height: "380px" }}
                        >
                          <svg
                            width="0"
                            height="0"
                            style={{ position: "absolute" }}
                          >
                            <defs>
                              <clipPath
                                id={`archClip-${i}`}
                                clipPathUnits="objectBoundingBox"
                              >
                                <path d="M0,1 V0.35 A0.5,0.35 0 0 1 1,0.35 V1 Z" />
                              </clipPath>
                            </defs>
                          </svg>
                          <img
                            src={service.image}
                            alt={service.name}
                            className="w-full h-full object-cover"
                            style={{
                              clipPath: `url(#archClip-${i})`,
                            }}
                          />
                        </div>

                        {/* Text below image */}
                        <figcaption className="mt-4 text-center">
                          <div className="text-xs text-[#A37F76] tracking-widest font-semibold uppercase">
                            {service.name.split(" ")[0]}
                          </div>
                          <div className="mt-1 text-lg md:text-xl font-serif text-[#3A1D0F] font-bold">
                            {service.name}
                          </div>
                          <div className="mt-2 text-sm text-[#5C4330] italic">
                            {service.description}
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#B48B80] text-white border-none hover:bg-[#A37F76] z-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#B48B80] text-white border-none hover:bg-[#A37F76] z-10" />
            </Carousel>
          </div>

          {/* Right panel */}
          <aside className="bg-[#f3e7dd] rounded-md p-8 flex flex-col items-center text-center justify-center border-shimmer">
            <h3 className="text-4xl md:text-5xl font-serif text-[#3A1D0F] text-shimmer-white">
              MY SERVICES
            </h3>
            <p className="text-4xl md:text-5xl italic text-[#A37F76] mt-1 font-waterfall">
              and offers
            </p>

            <nav className="mt-6 flex flex-col gap-4 w-full relative min-h-[120px]">
              <div 
                key={serviceListKey} 
                className="service-list-fade flex flex-col gap-4 w-full"
              >
                {visibleServices.map((service, i) => (
                  <a
                    key={`${current}-${i}`}
                    href="#"
                    className="text-lg md:text-xl underline underline-offset-4 font-medium text-[#3A1D0F] hover:text-[#A37F76] transition-colors"
                  >
                    {service.name.toUpperCase()}
                  </a>
                ))}
              </div>
            </nav>

            <button className="mt-8 px-8 py-2 rounded-md tracking-wide mx-auto font-semibold relative overflow-hidden group golden-button">
              <span className="relative z-10 text-white/95 uppercase drop-shadow-lg">BOOK SESSION</span>
              {/* Base metallic gradient */}
              <div 
                className="absolute inset-0 rounded-md"
                style={{
                  background: "linear-gradient(135deg, #d4a574 0%, #c89f85 25%, #b8957a 50%, #c89f85 75%, #d4a574 100%)",
                }}
              />
              {/* Golden shimmer overlay */}
              <div 
                className="absolute inset-0 rounded-md golden-shimmer-overlay"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255, 215, 0, 0.4) 25%, rgba(255, 223, 0, 0.6) 50%, rgba(255, 215, 0, 0.4) 75%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "golden-shimmer-sweep 3s ease-in-out infinite",
                }}
              />
              {/* Golden glow effect */}
              <div 
                className="absolute inset-0 rounded-md opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(255, 215, 0, 0.3) 0%, transparent 70%)",
                  animation: "golden-pulse 2s ease-in-out infinite",
                }}
              />
              {/* Hover shine effect */}
              <div 
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)",
                }}
              />
            </button>
          </aside>
        </div>
      </div>

      {/* Golden Particles */}
      <div
        className="golden-particle golden-particle-medium"
        style={{ top: "8%", left: "5%", animationDelay: "0s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small golden-particle-float"
        style={{ top: "25%", right: "10%", animationDelay: "2s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small golden-particle-drift"
        style={{ bottom: "20%", left: "8%", animationDelay: "1.5s" }}
      ></div>
      <div
        className="golden-particle golden-particle-medium"
        style={{ top: "50%", right: "5%", animationDelay: "0.7s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small"
        style={{ top: "35%", left: "12%", animationDelay: "1s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small"
        style={{ bottom: "30%", right: "15%", animationDelay: "2.5s" }}
      ></div>

      {/* Responsive styles and animations */}
      <style>{`
        @keyframes golden-shimmer-sweep {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes golden-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
        
        .golden-button {
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3), 
                      0 0 20px rgba(255, 215, 0, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .golden-button:hover {
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5), 
                      0 0 30px rgba(255, 215, 0, 0.4),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .service-list-fade {
          animation: fadeInService 0.6s ease-in-out;
        }
        
        @keyframes fadeInService {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .service-image-container {
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
