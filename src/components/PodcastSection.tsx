import { useState } from "react";
import vectorImage from "@/assets/Vector.png";

const PodcastSection = () => {
  // YouTube video ID from: https://youtu.be/OCcDjCff1j4?si=e81qvEiuDfilV6bq
  const youtubeVideoId = "OCcDjCff1j4";
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);

  const hasValidVideoId = !!youtubeVideoId && youtubeVideoId.trim().length > 0;
  const videoThumbnail = hasValidVideoId
    ? `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`
    : "";
  const videoEmbedUrl = hasValidVideoId
    ? `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`
    : "";

  const handleThumbnailClick = () => {
    if (hasValidVideoId) {
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="podcast"
      className="bg-[#FFF4E1] min-h-auto md:max-h-[85vh] md:min-h-[85vh] relative overflow-hidden flex items-center py-12 md:py-0"
      style={{
        backgroundColor: "#FFF4E1",
      }}
    >
      {/* Vector Background Image */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${vectorImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      ></div>

      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #B48B80 0%, transparent 50%),
                            radial-gradient(circle at 80% 50%, #A37F76 0%, transparent 50%)`,
        }}
      ></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-20 relative z-20 w-full py-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left - Description */}
          <div className="relative flex flex-col justify-center space-y-2 md:space-y-3 order-2 md:order-1">
            {/* Section Label */}
            <div className="mb-1 pt-8 md:pt-12">
              <span className="inline-block text-xs sm:text-sm font-semibold text-[#A37F76] uppercase tracking-wider">
                Explore Our Podcast
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#3A1D0F] leading-tight mb-2 text-center md:text-left">
              <span className="text-shimmer-white">Tarot Wisdom</span>
              <br />
              <span className="text-[#FFD700] font-waterfall text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]">
                Unveiled
              </span>
            </h2>

            {/* Description Content */}
            <div className="space-y-2 text-[#5C4330] leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-justify">
              <p>
                Embark on a mystical journey through the ancient art of tarot
                reading in our captivating podcast series. Each episode delves
                deep into the wisdom of the cards, exploring their profound
                meanings and how they can illuminate your path forward.
              </p>

              <p>
                Join us as we uncover the secrets of tarot, share insightful
                readings, and guide you through life's most important questions.
                Whether you're a seasoned practitioner or new to the world of
                tarot, our podcast offers wisdom, clarity, and spiritual
                enlightenment.
              </p>

              <div className="pt-2">
                <div 
                  className="w-full md:w-fit bg-[#a37f76ad] backdrop-blur-sm rounded-lg bg-shimmer-white p-2 md:p-3"
                  style={{
                    border: "1px solid rgba(255, 215, 0, 0.6)",
                    boxShadow: "0 0 5px rgba(255, 215, 0, 0.3)"
                  }}
                >
                  <span 
                    className="font-waterfall text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-[800] block text-center md:text-left"
                    style={{ 
                      color: "#FFFFFF",
                      textShadow: "none",
                      WebkitTextFillColor: "#FFFFFF",
                      background: "none",
                      backgroundImage: "none"
                    }}
                  >
                    "The cards reveal what the heart already knows."
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right - Video Thumbnail/Embed */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-full sm:max-w-[500px] md:max-w-[550px] group">
              {!isPlaying ? (
                <div
                  className={`relative rounded-[30px] overflow-hidden shadow-2xl transition-all duration-300 image-shimmer ${
                    hasValidVideoId
                      ? "cursor-pointer hover:shadow-3xl hover:scale-[1.02]"
                      : ""
                  }`}
                  onClick={handleThumbnailClick}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-[#B48B80] to-[#A37F76] flex items-center justify-center">
                    {hasValidVideoId && !thumbnailError ? (
                      <img
                        src={videoThumbnail}
                        alt="Tarot Reading Podcast"
                        className="w-full h-full object-cover"
                        onError={() => setThumbnailError(true)}
                      />
                    ) : (
                      <div className="text-center p-8">
                        <svg
                          className="w-24 h-24 mx-auto mb-4 text-white/80"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <p className="text-white/90 font-semibold text-lg">
                          Tarot Reading Podcast
                        </p>
                        <p className="text-white/70 text-sm mt-2">
                          {hasValidVideoId
                            ? "Click to play"
                            : "Add your YouTube video ID"}
                        </p>
                      </div>
                    )}
                    {/* Play Button Overlay */}
                    {hasValidVideoId && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 sm:w-10 sm:h-10 text-[#B48B80] ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    {/* Decorative corner elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/50"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/50"></div>
                  </div>
                </div>
              ) : hasValidVideoId ? (
                <div className="relative rounded-[30px] overflow-hidden shadow-2xl image-shimmer">
                  <div className="aspect-video">
                    <iframe
                      src={videoEmbedUrl}
                      title="Tarot Reading Podcast"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Golden Particles */}
      <div
        className="golden-particle golden-particle-small golden-particle-float"
        style={{ top: "15%", right: "10%", animationDelay: "0s" }}
      ></div>
      <div
        className="golden-particle golden-particle-medium"
        style={{ top: "25%", left: "8%", animationDelay: "1.5s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small golden-particle-drift"
        style={{ bottom: "20%", right: "15%", animationDelay: "2s" }}
      ></div>
      <div
        className="golden-particle golden-particle-small"
        style={{ top: "50%", left: "5%", animationDelay: "1.5s" }}
      ></div>
      <div
        className="golden-particle golden-particle-medium"
        style={{ bottom: "30%", left: "12%", animationDelay: "2.5s" }}
      ></div>

      {/* Golden Star */}
      <div
        className="golden-star golden-star-medium golden-star-float"
        style={{ top: "60%", right: "8%" }}
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>
    </section>
  );
};

export default PodcastSection;

