import { useState, useRef, useEffect } from "react";
import podcastBg from "@/assets/podcastbg1.mp4";

const PodcastSection = () => {
  // YouTube video ID from: https://youtu.be/OCcDjCff1j4?si=e81qvEiuDfilV6bq
  const youtubeVideoId = "OCcDjCff1j4";
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Intersection Observer for scroll-triggered video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(err => console.log("Video play failed:", err));
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.25, // Trigger when 25% of the section is visible
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="podcast"
      className="min-h-[60vh] md:min-h-[70vh] relative overflow-hidden flex items-center py-8 md:py-12"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ minWidth: '100%', minHeight: '100%' }}
        loop
        muted
        playsInline
      >
        <source src={podcastBg} type="video/mp4" />
      </video>

      {/* Gradient Overlay with Theme Color */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(133, 102, 84, 0.3) 0%, rgba(133, 102, 84, 0.5) 50%, rgba(133, 102, 84, 0.3) 100%)'
        }}
      ></div>

      {/* Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left - Title */}
          <div className="relative flex flex-col justify-center space-y-3 md:space-y-4">
            {/* Small "the" text */}
            <p className="text-white text-2xl md:text-3xl lg:text-4xl font-light italic mb-0">
              the
            </p>

            {/* Main Heading */}
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif">
              Tarot Insights
              <br />
              Podcast
            </h2>

            {/* Subtitle in cursive */}
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-cursive italic mt-4">
              with Rightsync Tarot
            </p>
          </div>

          {/* Right - Video Thumbnail/Embed */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-full sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] group">
              {!isPlaying ? (
                <div
                  className={`relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl transition-all duration-300 ${hasValidVideoId
                    ? "cursor-pointer hover:shadow-3xl hover:scale-[1.02]"
                    : ""
                    }`}
                  style={{
                    border: "3px solid white",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
                  }}
                  onClick={handleThumbnailClick}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center">
                    {hasValidVideoId && !thumbnailError ? (
                      <img
                        src={videoThumbnail}
                        alt="Tarot Reading Podcast"
                        className="w-full h-full object-cover"
                        onError={() => setThumbnailError(true)}
                      />
                    ) : (
                      <div className="text-center p-8">
                        <p className="text-white/90 font-semibold text-lg">
                          Tarot Reading Podcast
                        </p>
                      </div>
                    )}

                    {/* Play Button Overlay */}
                    {hasValidVideoId && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-purple-800 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : hasValidVideoId ? (
                <div
                  className="relative rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl"
                  style={{
                    border: "3px solid white",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
                  }}
                >
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
    </section>
  );
};

export default PodcastSection;

