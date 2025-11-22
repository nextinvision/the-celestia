import React, { useState } from "react";
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

  return (
    <section id="services" className="w-full bg-[#FFF4E1] py-12 md:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgforabout})`,
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="w-full flex justify-center">
          {/* Carousel with service cards */}
          <div className="w-full relative max-w-6xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, i) => (
                  <CarouselItem key={i} className="pl-2 md:pl-4 basis-1/3 min-w-0 flex justify-center">
                    <div className="flex-1 bg-transparent flex flex-col h-full w-full" style={{ maxWidth: "280px" }}>
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
    } else if (service.name === "Reiki & Multi Modality Healing") {
      navigate("/reiki");
    } else if (service.name === "Intuitive Coaching") {
      navigate("/intuitive-coaching");
    } else if (service.name === "Crystal Treasure") {
      navigate("/crystal-treasure");
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
