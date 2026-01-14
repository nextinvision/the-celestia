import Rectangle from "../assets/Rectangle 58.png"
import herobg from "../assets/Mask Group.png"
import thirdsection1st from "../assets/thirdsection1simage.png"
import thirdsection2nd from "../assets/thirdsection2nd.png"
const HeroSection = () => {
  return (
    <section className="relative pt-40 items-center">
      {/* first section */}
      {/* first section */}
      <div className="container min-h-[60vh] h-auto md:h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-0 pb-20 md:pb-0">
        {/* left section */}
        <div className="relative z-10 text-center mt-12 md:mt-32 items-center flex flex-col max-w-full md:max-w-xl">
          <h1 className="whisper-regular text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-4 text-white">Sunita Ramrakhyani</h1>
          <h2 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-8 md:mb-8 max-w-2xl leading-tight font-serif text-white px-2'>
            THE SOUL BEHIND THECELESTIASTUDIO
          </h2>
          {/* <h1 className="text-4xl font-bold text-[#694D3D] mb-4">IT'S TIME TO MAKE YOUR BUSINESS DREAMS A REALITY. ARE YOU READY TO RUN THE SHOW?</h1> */}
          <p className='mb-8 sm:mb-8 md:mb-8 font-thin text-[#e9dcd5] text-base md:text-[18px] px-4'>
            I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.
          </p>        </div>
        {/* right section */}
        <div className="mt-10 md:mt-40 m-2 content-center flex items-center justify-center w-full md:w-auto">
          <img src={herobg} alt="" className="h-[40vh] md:h-[70vh] w-auto max-w-full object-cover z-40 rounded-lg md:rounded-none" />
        </div>
      </div>

      {/* second curve section */}
      <div className="middle relative min-h-screen w-full flex items-center justify-center z-100">
        <img src={Rectangle} alt="" className="z-1 absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center max-w-5xl px-6 md:px-12">
          <h1 className="text-[#8B7355] water-brush-regular text-6xl pb-4">hey there</h1>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-4 md:mb-4 leading-tight font-serif text-[#4F3F3B]'>
            WELCOME TO THE CELESTIA
          </h2>
          {/* <h1 className="text-4xl font-bold text-[#694D3D] mb-4">IT'S TIME TO MAKE YOUR BUSINESS DREAMS A REALITY. ARE YOU READY TO RUN THE SHOW?</h1> */}
          <p className='text-base sm:text-lg md:text-xl text-[#694D3D] mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed '>
            Get a boost of clarity, focus, and direction to design an inspired career and life. Understand how you want to
            scale and who you need to become to get there. This framework will help you take inspired action and
            provide a roadmap to cultivate irresistible conviction to move your vision forward with confidence.
          </p>        </div>
      </div>

      <section className="relative w-full z-[120] h-full container pb-12 mt-20 md:mt-0">

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 px-4 md:px-10 z-10">

          {/* LEFT – Image Collage */}
          <div className="relative flex flex-col md:block items-center md:h-full gap-6 min-h-[400px]">

            {/* Top image */}
            <div className="relative md:absolute md:-top-36 md:left-1 shadow-[0_9px_13px_rgba(0,0,0,0.7)] z-50 w-full max-w-[300px] md:w-[380px]">
              <img
                src={thirdsection1st}
                alt="Workshop"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom image */}
            <div className="relative md:absolute md:bottom-6 md:left-48 w-full max-w-[300px] md:w-[380px] shadow-[0_9px_13px_rgba(0,0,0,0.7)] z-50 md:-mt-0 -mt-8 ml-8 md:ml-0">
              <img
                src={thirdsection2nd}
                alt="Sunita Ramrakhyani"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sparkles */}
            <span
              className="absolute -top-24 right-7 text-3xl z-[120] opacity-80"
              style={{
                background: 'linear-gradient(145deg, #F5E3B8 0%, #C8A25C 25%, #A88042 50%, #7A4B13 75%, #673500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >✦</span>
            <span
              className="absolute -top-20 right-24 text-2xl z-[120] opacity-60"
              style={{
                background: 'linear-gradient(145deg, #F5E3B8 0%, #C8A25C 25%, #A88042 50%, #7A4B13 75%, #673500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >✦</span>

            <span
              className="absolute -top-40 right-8 text-8xl z-[120]"
              style={{
                background: 'linear-gradient(145deg, #F5E3B8 0%, #C8A25C 25%, #A88042 50%, #7A4B13 75%, #673500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >✦</span>
            <span className="absolute bottom-10 left-6 text-[#ffffff] text-8xl "
              style={{
                background: 'linear-gradient(145deg, #ffffffff 0%, #ffffffff 25%, #d8c8aeff 50%, #7A4B13 65%, #673500 75%, #d8c8aeff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>✦</span>
          </div>

          {/* RIGHT – Content */}
          <div className=" lg:text-right text-white max-w-xl ml-auto flex items-center justify-center flex-col pb-20">

            <h3 className="water-brush-regular text-4xl mb-4 text-white">
              hey you
            </h3>

            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-snug mb-6 text-center max-w-xl">
              Hi, I’m Sunita Ramrakhyani
            </h2>

            <p className="text-[#e9dcd5] text-[18px] leading-relaxed mb-10 text-center">
              I'm a paragraph. Click here to add your own text and edit me. It's easy.
              I'm a paragraph. Click here to add your own text and edit me. It's easy.
              I'm a paragraph. Click here to add your own text and edit me. It's easy.
              I'm a paragraph. Click here to add your own text and edit me. It's easy.
              I'm a paragraph.
            </p>

            <button
              className="px-10 py-3 font-semibold text-[#4b2e18] bg-gradient-to-r from-[#f4deb3] via-[#c9a15d] to-[#8b5a2b] rounded-sm shadow-md hover:scale-105 transition"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Bottom sparkles */}
        <span className="absolute bottom-12 left-28 text-white text-4xl opacity-80"
        >✦</span>
        <span className="absolute bottom-20 left-48 text-white text-2xl opacity-80"
        >✦</span>
      </section>



    </section>
  );
};

export default HeroSection;
