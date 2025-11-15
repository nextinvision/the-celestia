import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import testimonialPhoto from "@/assets/testimonial-photo.jpg";

const testimonials = [
  {
    name: "Aarushi Verma",
    role: "Fitness Enthusiast & Yoga Coach",
    rating: 5,
    title: "A Complete Soul Reset",
    text: "I came in feeling completely overwhelmed and burnt out. The experience was incredible—the beautiful vibrations just washed over me. I truly believe her sound healing was like hitting a giant reset button!",
    image: testimonialPhoto,
  },
  {
    name: "Priya Sharma",
    role: "Entrepreneur",
    rating: 5,
    title: "Incredible Clarity",
    text: "The tarot reading session was incredibly insightful. It helped me gain clarity on my career path and make important decisions with confidence. Sunita's intuitive guidance is truly remarkable.",
    image: testimonialPhoto,
  },
  {
    name: "Rahul Mehta",
    role: "Software Developer",
    rating: 5,
    title: "Transformative Experience",
    text: "I was skeptical at first, but the numerology session opened my eyes to patterns I never noticed. The session was transformative and gave me a new perspective on my life journey.",
    image: testimonialPhoto,
  },
  {
    name: "Ananya Patel",
    role: "Life Coach",
    rating: 5,
    title: "Deeply Restorative",
    text: "The Reiki healing session was deeply relaxing and restorative. I felt a sense of peace and balance that I hadn't experienced in months. Highly recommend!",
    image: testimonialPhoto,
  },
  {
    name: "Vikram Singh",
    role: "Business Consultant",
    rating: 5,
    title: "Compassionate Guidance",
    text: "The intuitive coaching session helped me navigate through a difficult period in my life. Sunita's wisdom and compassionate approach made all the difference.",
    image: testimonialPhoto,
  },
  {
    name: "Meera Joshi",
    role: "Artist & Creative Director",
    rating: 5,
    title: "Magical Energy",
    text: "The crystal treasure session was magical! I felt such positive energy and clarity. The crystals chosen for me were perfect, and I've noticed significant improvements in my creative flow.",
    image: testimonialPhoto,
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);


  return (
    <section className="relative bg-[#f3ede7] py-24 overflow-hidden flex justify-center items-center">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          duration: 30,
          dragFree: false,
        }}
        className="w-full carousel-smooth"
      >
        <CarouselContent>
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="basis-full">
              <div 
                className={`relative flex justify-center items-center testimonial-fade ${
                  current === i ? "fade-in" : "fade-out"
                }`}
              >
                {/* ===== Background soft layer ===== */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="absolute w-[80%] md:w-[70%] h-[65%] bg-[#f8f4f2] rounded-md translate-x-[40px] translate-y-[30px] shadow-md"></div>
                </div>

                {/* ===== Foreground Card ===== */}
                <div className="relative z-10 bg-[#fcf9f7] shadow-xl rounded-md w-[85%] md:w-[70%] flex flex-col md:flex-row items-center md:items-center p-6 md:p-10">
                  {/* === Left Image (Oval Capsule Shape) === */}
                  <div className="relative md:-ml-44 -mt-10 md:mt-0">
                    <div className="w-[200px] h-[300px] md:w-[260px] md:h-[380px] rounded-[140px] overflow-hidden shadow-xl bg-white golden-border-solid border-shimmer p-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-[140px]"
                      />
                    </div>
                  </div>

                  {/* === Right Text Content === */}
                  <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left max-w-[600px]">
                    <h2 className="text-[1.8rem] md:text-[2rem] font-serif text-[#1a1a1a] mb-4 text-shimmer">
                      HAPPY CLIENTS
                    </h2>

                    <h3 className="text-[1.1rem] md:text-[1.25rem] font-semibold text-[#222] mb-3 glow-shimmer">
                      {testimonial.title}
                    </h3>

                    <p className="text-[#444] leading-relaxed text-[0.95rem] italic mb-4">
                      "{testimonial.text}"
                    </p>

                    {/* === Star rating === */}
                    <div className="flex justify-center md:justify-start text-[#f6c744] text-[1.1rem] mb-2 glow-shimmer">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, idx) => (
                          <span key={idx}>★</span>
                        )
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-[#222] text-[0.95rem]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#777]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-[#B48B80] text-white border-none hover:bg-[#A37F76]" />
        <CarouselNext className="right-4 bg-[#B48B80] text-white border-none hover:bg-[#A37F76]" />
      </Carousel>

      {/* ===== Decorative Feathers ===== */}
      <div className="absolute top-[8%] left-[60%] opacity-20 rotate-[10deg]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Feather_icon.svg"
          alt=""
          className="w-16 h-16"
        />
      </div>

      <div className="absolute bottom-[12%] right-[45%] opacity-15 rotate-[-15deg]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Feather_icon.svg"
          alt=""
          className="w-20 h-20"
        />
      </div>

      {/* Golden Particles */}
      <div
        className="golden-particle golden-particle-medium"
        style={{ top: "10%", left: "8%", animationDelay: "0s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small golden-particle-float"
        style={{ top: "25%", right: "10%", animationDelay: "2s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small golden-particle-drift"
        style={{ bottom: "20%", left: "5%", animationDelay: "1.5s" }}
      ></div>
      <div
        className="golden-particle golden-particle-medium"
        style={{ bottom: "10%", right: "8%", animationDelay: "0.7s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small"
        style={{ top: "45%", left: "12%", animationDelay: "1s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small"
        style={{ bottom: "30%", right: "15%", animationDelay: "2.5s" }}
      ></div>

      {/* Smooth transition styles */}
      <style>{`
        .carousel-smooth [data-embla-container] {
          transition: none !important;
        }
        
        .carousel-smooth [data-embla-viewport] {
          overflow: hidden;
        }
        
        .testimonial-fade {
          transition: opacity 0.8s ease-in-out;
        }
        
        .testimonial-fade.fade-out {
          opacity: 0;
          pointer-events: none;
        }
        
        .testimonial-fade.fade-in {
          opacity: 1;
          pointer-events: auto;
        }
        
        .carousel-smooth [data-embla-slide] {
          transition: opacity 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
