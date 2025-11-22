import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bgforabout from "@/assets/bgabou.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import soundhealing from "@/assets/soundhealing.jpg";
import reiki from "@/assets/reiki.png";
import numerology from "@/assets/numer.jpg";
import tarotCards from "@/assets/tarot-cards.jpg";
import crystals from "@/assets/crystals.jpg";
import intuitivecoaching from "@/assets/coaching.jpg";

const services = [
  {
    name: "Tarot Guidance",
    description: "Discover clarity through ancient wisdom",
    image: tarotCards,
  },
  {
    name: "Reiki & Multi Modality Healing",
    description: "Restore balance through energy healing",
    image: reiki,
  },
  {
    name: "Numerology",
    description: "Unlock the power of numbers in your life",
    image: numerology,
  },
  {
    name: "Sound Healing",
    description: "Harmonize your energy with vibrational therapy",
    image: soundhealing,
  },
  
  {
    name: "Intuitive Coaching",
    description: "Navigate life with intuitive guidance",
    image: intuitivecoaching,
  },
  {
    name: "Crystal Treasure",
    description: "Harness the energy of sacred crystals",
    image: crystals,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
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

  // Get the currently selected service
  const currentService = services[current];

  return (
    <section id="services" className="w-full bg-[#FFF4E1] py-12 md:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgforabout})`,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                  <CarouselItem key={i} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 min-w-0 flex">
                    <div className="flex-1 bg-transparent flex flex-col h-full">
                      <figure className="w-full flex flex-col h-full">
                        {/* Container with arched top using SVG clip-path */}
                        <div
                          className="w-full block relative overflow-hidden service-image-container flex-shrink-0"
                          style={{ 
                            height: "430px",
                            aspectRatio: "auto"
                          }}
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
                        <figcaption className="mt-4 text-center flex flex-col flex-1 min-h-[180px]">
                          <div className="flex-shrink-0">
                            <div className="text-xs text-[#A37F76] tracking-widest font-semibold uppercase">
                              {service.name.split(" ")[0]}
                            </div>
                            <div className="mt-1 text-lg md:text-xl font-serif text-[#3A1D0F] font-bold">
                              {service.name}
                            </div>
                            <div className="mt-2 text-sm text-[#5C4330] italic">
                              {service.description}
                            </div>
                          </div>
                          {/* Read More Button with Gate Shape */}
                          <button
  className="mt-auto relative gate-shape-button group mx-auto block flex-shrink-0 overflow-hidden"
  aria-label="Read more about this service"
  style={{
    clipPath:
      "polygon(12% 0%, 88% 0%, 100% 10%, 100% 90%, 88% 100%, 12% 100%, 0% 90%, 0% 10%)",
    padding: "10px 28px",
    border: "none",
    cursor: "pointer",
    transition: "transform 220ms ease, box-shadow 220ms ease",
    position: "relative",
    background: "transparent",
  }}
  onClick={() => {
    if (service.name === "Sound Healing") {
      navigate("/sound-healing");
    }
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 12px 36px rgba(180,140,90,0.32), 0 0 45px rgba(255,210,140,0.18)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 8px 24px rgba(180,140,90,0.18), 0 0 28px rgba(255,210,140,0.10)";
  }}
>
  {/* Deeper gold-bronze base */}
  <div
    aria-hidden
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(135deg, #8E6A48 0%, #C49B63 35%, #E6C183 65%, #B08859 100%)",
      zIndex: 0,
    }}
  />

  {/* Metallic sheen layer */}
  <div
    aria-hidden
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.20) 100%)",
      mixBlendMode: "overlay",
      zIndex: 1,
    }}
  />

  {/* Stronger golden shimmer */}
  <div
    aria-hidden
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, transparent 0%, rgba(255,230,160,0.45) 25%, rgba(255,240,180,0.70) 50%, rgba(255,230,160,0.45) 75%, transparent 100%)",
      backgroundSize: "220% 100%",
      animation: "goldenSweep 2.4s linear infinite",
      opacity: 0.75,
      transform: "skewX(-20deg)",
      zIndex: 2,
    }}
  />

  {/* Soft golden inner glow */}
  <div
    aria-hidden
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(circle at center, rgba(255,215,160,0.35) 0%, transparent 60%)",
      zIndex: 1,
      mixBlendMode: "screen",
      animation: "goldenPulse 4s ease-in-out infinite",
    }}
  />

  {/* Hover flash */}
  <div
    aria-hidden
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.25) 100%)",
      transform: "skewX(-15deg)",
      zIndex: 3,
    }}
  />

  {/* Text */}
  <span
    className="relative z-10 text-white font-semibold text-sm uppercase tracking-wide drop-shadow-md"
    style={{
      textShadow: "0 0 6px rgba(255,195,120,0.75)",
    }}
  >
    Read More
  </span>

  <style>
    {`
      @keyframes goldenSweep {
        0% { background-position: -150% 0; }
        100% { background-position: 150% 0; }
      }

      @keyframes goldenPulse {
        0% { opacity: 0.40; transform: scale(1); }
        50% { opacity: 0.65; transform: scale(1.025); }
        100% { opacity: 0.40; transform: scale(1); }
      }
    `}
  </style>
</button>

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
          <aside className="rounded-md p-6 sm:p-8 flex flex-col items-center text-center justify-center border-shimmer" style={{ backgroundColor: "rgba(163, 127, 118, 0.7)" }}>
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif golden-glow-text" 
              style={{ 
                color: "#FFD700"
              }}
            >
              MY SERVICES
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic text-white mt-1 font-waterfall">
              and offers
            </p>

            <nav className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4 w-full relative min-h-[100px] sm:min-h-[120px] overflow-hidden">
              <div className="service-wheel-container">
                <div 
                  key={current} 
                  className="service-reveal"
                >
                  <a
                    href="#"
                    className="text-base sm:text-lg md:text-xl underline underline-offset-4 font-medium text-white hover:text-[#FFD700] transition-colors block"
                  >
                    {currentService?.name.toUpperCase()}
                  </a>
                </div>
              </div>
            </nav>

            <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 rounded-md tracking-wide mx-auto font-semibold relative overflow-hidden group golden-button text-sm sm:text-base">
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
        
        @keyframes golden-glow-pulse {
          0%, 100% {
            text-shadow: 0 0 8px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.3);
          }
          50% {
            text-shadow: 0 0 12px rgba(255, 215, 0, 0.9), 0 0 25px rgba(255, 215, 0, 0.7), 0 0 40px rgba(255, 215, 0, 0.5);
          }
        }
        
        .golden-glow-text {
          animation: golden-glow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
        
        .service-wheel-container {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .service-reveal {
          position: relative;
          animation: serviceWheelUp 0.6s ease-out forwards;
        }
        
        @keyframes serviceWheelUp {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Maintain gate shape proportions across all screen sizes */
        /* The clip-path uses objectBoundingBox units (0-1) so it scales proportionally */
        @media (max-width: 640px) {
          .service-image-container {
            height: 320px !important;
            min-height: 320px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .service-image-container {
            height: 380px !important;
            min-height: 380px !important;
          }
        }
        @media (min-width: 769px) {
          .service-image-container {
            height: 430px !important;
            min-height: 430px !important;
          }
        }
        
        /* Ensure clip-path is properly applied on all devices */
        .service-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
