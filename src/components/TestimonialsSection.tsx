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
import feedbackBg from "@/assets/feedback_bg.png";
import feedbackClientBg from "@/assets/feedbackclientbg.png";

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
    <section className="relative bg-[#FDFCFA] py-8 sm:py-10 md:py-12 overflow-hidden md:overflow-visible flex justify-center items-center">
      {/* Feedback Background Image */}
      {/* <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${feedbackBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      ></div> */}

      {/* ===== Square Shape with feedbackclientbg.png (outside card) ===== */}
      <div
        className="absolute z-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[200px] md:w-[400px] md:h-[400px] lg:w-[250px] lg:h-[250px] pointer-events-none hidden md:block"
        style={{
          backgroundImage: `url(${feedbackClientBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          duration: 30,
          dragFree: false,
        }}
        className="w-full carousel-smooth relative z-10"
      >
        <CarouselContent>
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="basis-full">
              <div
                className={`relative flex justify-center items-center testimonial-fade ${current === i ? "fade-in" : "fade-out"
                  }`}
              >
                {/* ===== Foreground Card ===== */}
                <div className="relative z-10 bg-[#fcf9f7] shadow-xl rounded-md w-[90%] sm:w-[85%] md:w-[75%] lg:w-[60%] flex flex-col md:flex-row items-center md:items-center p-3 sm:p-4 md:p-6 overflow-visible md:overflow-visible">
                  {/* === Left Image (Oval Capsule Shape) === */}
                  <div className="relative md:-ml-24 lg:-ml-32 mt-0 md:mt-0 flex-shrink-0">
                    <div className="w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] md:w-[160px] md:h-[240px] lg:w-[180px] lg:h-[270px] rounded-[100px] overflow-hidden shadow-xl bg-white golden-border-solid border-shimmer p-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-[100px]"
                      />
                    </div>
                  </div>

                  {/* === Right Text Content === */}
                  <div className="md:ml-4 lg:ml-6 mt-3 sm:mt-4 md:mt-0 text-center md:text-left max-w-full md:max-w-[600px]">
                    <h2 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.4rem] lg:text-[1.5rem] font-serif text-[#1a1a1a] mb-2 sm:mb-3 text-shimmer">
                      HAPPY CLIENTS
                    </h2>

                    <h3 className="text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] font-semibold text-[#222] mb-1 sm:mb-2 glow-shimmer">
                      {testimonial.title}
                    </h3>

                    <p className="text-[#444] leading-relaxed text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] italic mb-2 sm:mb-3">
                      "{testimonial.text}"
                    </p>

                    {/* === Star rating === */}
                    <div className="flex justify-center md:justify-start text-[#f6c744] text-[0.85rem] sm:text-[0.9rem] md:text-[0.95rem] mb-1 sm:mb-2 glow-shimmer">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, idx) => (
                          <span key={idx}>★</span>
                        )
                      )}
                    </div>

                    <div>
                      <p className="font-semibold text-[#222] text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-[#777]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-2 sm:left-4 bg-[#B48B80] text-white border-none hover:bg-[#A37F76]" />
        <CarouselNext className="hidden md:flex right-2 sm:right-4 bg-[#B48B80] text-white border-none hover:bg-[#A37F76]" />
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
