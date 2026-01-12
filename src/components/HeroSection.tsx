import Rectangle from "../assets/Rectangle 58.png"
import herobg from "../assets/Mask Group.png"
const HeroSection = () => {
  return (
    <section className="relative pt-28 items-center">
      <div className="container  px-4 sm:px-6 lg:px-8 md:min-h-[60vh] h-[50vh] flex items-center  justify-between text-white">
        <div className=" px-12 relative z-10 text-center mt-20">
          <h1 className=" water-brush-regular text-4xl pb-4">Sunita Ramrakhyani</h1>
          <h2 className='text-3xl sm:text-3xl md:text-2xl lg:text-3xl font-bold  mb-4 sm:mb-4 md:mb-4 max-w-2xl leading-tight font-serif '>
            THE SOUL BEHIND THECELESTIASTUDIO
          </h2>
          {/* <h1 className="text-4xl font-bold text-[#694D3D] mb-4">IT'S TIME TO MAKE YOUR BUSINESS DREAMS A REALITY. ARE YOU READY TO RUN THE SHOW?</h1> */}
          <p className='sm:text-md md:text-md mb-8 sm:mb-10 md:mb-12 max-w-2xl font-thin'>
          I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.
          </p>        </div>
        <div className="mt-24 m-2 content-center flex items-center justify-center">
          <img src={herobg} alt="" className=" object-cover z-50" />
        </div>
      </div>

      <div className="middle relative min-h-screen w-full flex items-center justify-center">
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
      <div className="container md:min-h-[70vh] h-[60vh] "></div>

    </section>
  );
};

export default HeroSection;
