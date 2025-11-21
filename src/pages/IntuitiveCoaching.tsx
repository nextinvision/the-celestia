import Navigation from "@/components/Navigation";
import servicesPhoto2 from "@/assets/img5.jpg";
import img4 from "@/assets/img4.jpg";

const IntuitiveCoaching = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Header Banner Section - Pixel Perfect */}
      <section className="w-full relative pt-16 md:pt-20" style={{ backgroundColor: "#FAF8F3" }}>
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="flex items-center justify-center relative">
            {/* Main Text Container */}
            <div className="flex flex-col items-center justify-center gap-2 md:gap-3 relative px-12 md:px-16">
              {/* Left Starbursts - positioned to the left of COACHING */}
              <div className="absolute left-0 flex flex-col items-center justify-center" style={{ top: "50%", transform: "translateY(-50%)", gap: "14px" }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" style={{ color: "#F5A082", marginTop: "-6px" }}>
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 15L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor"/>
                </svg>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" style={{ color: "#F5A082", marginTop: "6px" }}>
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 15L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              
              {/* COACHING on top */}
              <div className="flex flex-col items-center">
                <span 
                  className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold uppercase tracking-wide" 
                  style={{ 
                    color: "#2C2C2C", 
                    lineHeight: "1.1",
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: "0.05em"
                  }}
                >
                  COACHING
                </span>
                
                {/* "with" and "SUNITA RAMRAKHIYANI" on same line */}
                <div className="flex items-baseline gap-2 md:gap-3 mt-2 md:mt-3">
                  <span 
                    className="text-xl md:text-2xl lg:text-3xl lowercase" 
                    style={{ 
                      fontFamily: '"Dancing Script", "Brush Script MT", "Lucida Handwriting", cursive',
                      color: "#2C2C2C",
                      lineHeight: "1.2",
                      fontStyle: "normal",
                      fontWeight: "400"
                    }}
                  >
                    with
                  </span>
                  <span 
                    className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold uppercase tracking-wide" 
                    style={{ 
                      color: "#2C2C2C", 
                      lineHeight: "1.1",
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      letterSpacing: "0.05em"
                    }}
                  >
                    SUNITA RAMRAKHIYANI
                  </span>
                </div>
              </div>
              
              {/* Right Starbursts - positioned to the right of SUNITA RAMRAKHIYANI */}
              <div className="absolute right-0 flex flex-col items-center justify-center" style={{ top: "50%", transform: "translateY(-50%)", gap: "14px" }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" style={{ color: "#F5A082", marginTop: "-6px" }}>
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 15L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor"/>
                </svg>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" style={{ color: "#F5A082", marginTop: "6px" }}>
                  <path d="M12 2L14 8L20 8L15 12L17 18L12 15L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Golden Stars - Animated */}
        <div className="golden-star golden-star-medium" style={{ top: "35%", left: "20%", animationDelay: "0s" }}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="golden-star golden-star-small" style={{ top: "40%", right: "22%", animationDelay: "0.5s" }}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="golden-star golden-star-medium golden-star-float" style={{ top: "55%", left: "18%", animationDelay: "1s" }}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="golden-star golden-star-large" style={{ top: "45%", right: "20%", animationDelay: "1.5s" }}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="golden-star golden-star-small" style={{ top: "50%", left: "25%", animationDelay: "2s" }}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: "#F5F0E8" }}>
        {/* Textured Background with Organic Shapes */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 30%, rgba(200, 180, 160, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(190, 170, 150, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(210, 190, 170, 0.25) 0%, transparent 60%)
            `,
          }}
        ></div>

        {/* Blurred Palm Leaves on Right */}
        <div 
          className="absolute right-0 top-0 w-1/3 h-full opacity-20"
          style={{
            backgroundImage: `url(${servicesPhoto2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)",
            transform: "scale(1.2)",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Text Box */}
            <div className="relative z-40 mt-8 md:mt-12 ml-12 md:ml-20 lg:ml-32 text-box-right-align">
              <div className="bg-white p-4 md:p-6 lg:p-8 shadow-lg text-box-overlap text-center">
                <p 
                  className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#3A1D0F] mb-2 md:mb-3"
                  style={{ fontFamily: 'cursive' }}
                >
                  Introducing
                </p>
                <div className="space-y-0.5 md:space-y-1 mb-4 md:mb-6">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold uppercase tracking-wide text-[#3A1D0F] leading-none">
                    LIFE COACHING
                  </h1>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold uppercase tracking-wide text-[#3A1D0F] leading-none">
                    FOR EMPOWERED
                  </h1>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-sans font-bold uppercase tracking-wide text-[#3A1D0F] leading-none">
                    WOMEN
                  </h1>
                </div>
                <div className="flex justify-center">
                  <button
                    className="px-5 md:px-6 py-1.5 md:py-2 bg-[#C89F85] text-white font-sans font-semibold uppercase tracking-wider text-sm md:text-base rounded-md hover:bg-[#B8957A] transition-colors shadow-md"
                  >
                    FIND OUT MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="relative lg:pl-8 overflow-visible">
              {/* Gate Shape Image - Behind (at main image position) */}
              <div className="relative z-10">
                {/* Gate Shape using SVG clip-path */}
                <div
                  className="w-[80%] block relative overflow-visible gate-position"
                  style={{ 
                    height: "600px",
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
                        id="backgroundGateClip"
                        clipPathUnits="objectBoundingBox"
                      >
                        <path d="M0,1 V0.35 A0.5,0.35 0 0 1 1,0.35 V1 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <img 
                    src={servicesPhoto2} 
                    alt="Coaching Background" 
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: `url(#backgroundGateClip)`,
                    }}
                  />
                </div>
              </div>

              {/* Main Image with Polaroid Style - Front (at gate image position) */}
              <div className="absolute -bottom-8 md:-bottom-12 right-0 z-20 polaroid-position">
                {/* Polaroid Container with White Border */}
                <div
                  className="block relative bg-white shadow-xl polaroid-container"
                  style={{ 
                    transform: "rotate(9deg)"
                  }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden polaroid-image">
                    <img
                      src={img4}
                      alt="Coaching with Kristine"
                      className="w-full h-full object-cover"
                      style={{
                        display: "block"
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for polaroid effect */}
      <style>{`
        /* Polaroid Container - White border with padding */
        .polaroid-container {
          padding: 12px 12px 40px 12px;
        }
        
        /* Polaroid Image Container */
        .polaroid-image {
          width: 224px;
          height: 250px;
        }
        
        /* Gate positioning - align to left */
        .gate-position {
          margin-left: -40px;
        }
        
        /* Polaroid positioning - align to left */
        .polaroid-position {
          right: 60px !important;
        }
        
        /* Text box overlap styling */
        .text-box-overlap {
          position: relative;
          width: 100%;
          min-width: 1px;
        }
        
        /* Text box right alignment - add 9px more to the right */
        .text-box-right-align {
          margin-left: calc(3rem + 9px) !important;
        }
        
        @media (min-width: 768px) {
          .text-box-right-align {
            margin-left: calc(5rem + 9px) !important;
          }
        }
        
        @media (min-width: 1024px) {
          .text-box-right-align {
            margin-left: calc(8rem + 9px) !important;
          }
        }
        
        /* Responsive sizing for medium screens and up */
        @media (min-width: 768px) {
          .polaroid-image {
            width: 248px;
            height: 280px;
          }
          .polaroid-container {
            padding: 14px 14px 50px 14px;
          }
          .gate-position {
            margin-left: -60px;
          }
          .polaroid-position {
            right: 80px !important;
          }
          .text-box-overlap {
            width: 95% !important;
            min-width: 400px;
            margin-right: -110px;
            max-width: none;
          }
        }
        
        @media (min-width: 1024px) {
          .text-box-overlap {
            width: 100% !important;
            min-width: 480px;
            margin-right: -150px;
            max-width: none;
          }
        }
        
        @media (min-width: 1280px) {
          .text-box-overlap {
            width: 105% !important;
            min-width: 550px;
            margin-right: -200px;
            max-width: none;
          }
        }
        
        /* Ensure images are properly displayed */
        .polaroid-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default IntuitiveCoaching;

