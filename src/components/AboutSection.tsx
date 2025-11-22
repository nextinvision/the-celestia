import aboutPhoto from "@/assets/2.png";
import aboutBg from "@/assets/aboutbackground.png";

const AboutSection = () => {
  return (  
    <section
      id="about"
      className="py-20 relative overflow-visible"
      style={{
        backgroundColor: "#FFF4E1",
      }}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      ></div>


      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-28 relative z-20">
        <div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative flex justify-center md:justify-start">
            <img
              src={aboutPhoto}
              alt="The Soul Behind Righttsign Tarot"
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] h-auto object-cover rounded-[30px] sm:rounded-[40px] image-shimmer"
            />
          </div>

          {/* Right - Text Content */}
          <div className="relative flex flex-col justify-center md:-ml-8 lg:-ml-32 z-10">
            {/* Headings */}
            <div className="relative md:absolute md:-top-10 mb-6 md:mb-0">
              {/* h2 with Waterfall font */}
              <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[40px] lg:text-[45px] font-700 text-[#3A1D0F] leading-tight drop-shadow-sm relative md:-left-[210px] text-center md:text-left"
              >
                The Soul Behind Righttsign Tarot
              </h2>

              <h3
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#A37F76] mt-2 relative md:-left-16 text-shimmer font-waterfall text-center md:text-left"
              >
                Empowered Living
              </h3>
            </div>

            {/* Rest text */}
            <div className="font-arial text-[#5C4330] leading-relaxed pt-4 md:pt-24 text-[15px] sm:text-[16px] md:text-[17px] relative md:-left-16 text-justify">
              <p>
              With over 12 years of experience, I guide individuals toward holistic well-being through RighttsignTarot, blending Ancient Wisdom with Modern Insights to create a Sacred Space for transformation and self-discovery. My purpose is to help you awaken your Inner Light, embrace your True Potential, and find balance with compassion and clarity.

              </p>

              <p className="mt-4">
              Beyond readings, my mission is to cultivate a Community of Conscious Living—where Peace, Purpose, and Spiritual Harmony flourish, empowering each soul to heal, grow, and reconnect with their Spiritual Essence.
              </p>
              <div className="w-full md:w-fit bg-[#a37f76ad] backdrop-blur-sm rounded-lg border-shimmer bg-shimmer-white mt-4"> 
                <span className="font-waterfall text-[20px] sm:text-[24px] md:text-[30px] px-3 sm:px-4 font-[800] block text-center md:text-left">
                  "In every Soul lies an Untamed Light, waiting to be Rediscovered and Amplified."
                </span>
              </div>
              <span className="flex items-center justify-center md:justify-start font-serif font-[800] pt-2 md:pl-48 text-[14px] sm:text-[16px]">
                <span className="text-[16px] sm:text-[20px]">—</span>
                <span className="">TheCelestiaStudio</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Particles */}
      <div className="golden-particle golden-particle-medium" style={{ top: "10%", right: "8%", animationDelay: "0s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-float" style={{ top: "30%", left: "3%", animationDelay: "1.5s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-drift" style={{ bottom: "15%", right: "12%", animationDelay: "2s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ top: "40%", left: "8%", animationDelay: "0.8s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ bottom: "25%", left: "5%", animationDelay: "1.2s" }}></div>
      
      {/* Keep one star for variety */}
      <div className="golden-star golden-star-large" style={{ top: "60%", left: "2%", animationDelay: "0.5s" }}>
        <svg viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
