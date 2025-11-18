import React, { useState } from "react";
import logo from "../assets/logo.png"; // adjust path if needed

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex justify-between items-center text-[#58413c] font-semibold text-lg sm:text-xl md:text-2xl font-serif">
          {/* ✅ Logo in top-left corner - Uncomment if needed */}
          {/* <div className="absolute top-4 left-6">
            <img
              src={logo}
              alt="Righttsign Tarot Logo"
              className="h-16 sm:h-20 w-auto cursor-pointer"
              onClick={() => scrollToSection("home")}
            />
          </div> */}

          {/* ✅ Desktop Nav Links - Hidden on mobile */}
          <div className="hidden md:flex w-full justify-center">
            <div className="container flex justify-around items-center mt-4 md:mt-6 ml-auto glow-shimmer gap-4 lg:gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="glow-shimmer hover:text-[#A37F76] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="glow-shimmer hover:text-[#A37F76] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="glow-shimmer hover:text-[#A37F76] transition-colors"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="glow-shimmer hover:text-[#A37F76] transition-colors"
              >
                Contacts
              </button>
            </div>
          </div>

          {/* ✅ Mobile Hamburger Button - Visible only on mobile */}
          <div className="md:hidden flex items-center justify-end w-full">
            <button
              onClick={toggleMenu}
              className="text-[#58413c] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#58413c] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-[#58413c] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-[#58413c] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-[#FFF4E1] z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center justify-center min-h-screen space-y-6 sm:space-y-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl sm:text-3xl font-semibold text-[#58413c] glow-shimmer py-2 sm:py-3 hover:text-[#A37F76] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-2xl sm:text-3xl font-semibold text-[#58413c] glow-shimmer py-2 sm:py-3 hover:text-[#A37F76] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-2xl sm:text-3xl font-semibold text-[#58413c] glow-shimmer py-2 sm:py-3 hover:text-[#A37F76] transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-2xl sm:text-3xl font-semibold text-[#58413c] glow-shimmer py-2 sm:py-3 hover:text-[#A37F76] transition-colors"
            >
              Contacts
            </button>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#58413c] p-2 text-xl sm:text-2xl hover:text-[#A37F76] transition-colors"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;