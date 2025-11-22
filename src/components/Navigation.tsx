import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // adjust path if needed
import navbg from "@/assets/navbg.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: "Tarot Guidance", route: null },
    { name: "Numerology", route: null },
    { name: "Sound Healing", route: "/sound-healing" },
    { name: "Reiki & Multi Modality Healing", route: "/reiki" },
    { name: "Intuitive Coaching", route: "/intuitive-coaching" },
    { name: "Crystal Treasure", route: "/crystal-treasure" },
  ];

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false); // Close menu after clicking a link
    setIsServicesDropdownOpen(false);
  };

  const handleServiceClick = (service: { name: string; route: string | null }) => {
    if (service.route) {
      navigate(service.route);
    } else {
      scrollToSection("services");
    }
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  // Get navbar background gradient based on current route
  const getNavbarBackgroundGradient = () => {
    switch (location.pathname) {
      case "/sound-healing":
        // Muted green/gray gradient matching Sound Healing theme
        return "linear-gradient(135deg, #9A9A7A 0%, #8A8A6A 50%, #9A9A7A 100%)";
      case "/crystal-treasure":
        // Light blue gradient matching Crystal Treasure BESTSELLERS section
        return "linear-gradient(135deg, #E6F2FF 0%, #D6E9F5 50%, #E0F0FF 100%)";
      case "/intuitive-coaching":
        // Warm beige/cream gradient matching Intuitive Coaching theme
        return "linear-gradient(135deg, #FAF8F3 0%, #F5F0E8 50%, #FAF8F3 100%)";
      case "/reiki":
        // Light beige/blush gradient matching Reiki theme
        return "linear-gradient(135deg, #FFF4E1 0%, #F5E9D9 50%, #FFF4E1 100%)";
      default:
        // Cream/beige gradient for home page
        return "linear-gradient(135deg, #FFF4E1 0%, #F5E9D9 50%, #FFF4E1 100%)";
    }
  };

  const navbarBgGradient = getNavbarBackgroundGradient();

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 shadow-md opacity-100 backdrop-blur-md"
      style={{ 
        backgroundImage: `url(${navbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(20, 25, 40, 0.6)",
        transition: "background 2s ease-in-out"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 md:py-1.5">
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
            <div className="container flex justify-around items-center mt-4 md:mt-3 ml-auto glow-shimmer gap-4 lg:gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="glow-shimmer hover:text-[#A37F76] transition-colors"
              >
                About
              </button>
              <div 
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
              >
                <button
                  onClick={() => {
                    if (!isServicesDropdownOpen) {
                      setIsServicesDropdownOpen(true);
                    } else {
                      scrollToSection("services");
                    }
                  }}
                  className="glow-shimmer hover:text-[#A37F76] transition-colors flex items-center gap-1"
                >
                  Services
                  <span className="text-sm">▼</span>
                </button>
                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg border border-[#A37F76]/20 py-2 z-50">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => handleServiceClick(service)}
                        className="w-full text-left px-4 py-2 text-sm text-[#58413c] hover:bg-[#FFF4E1] hover:text-[#A37F76] transition-colors"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
        <div 
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ 
            background: navbarBgGradient,
            transition: "background 2s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-6 sm:space-y-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl sm:text-3xl font-semibold text-[#58413c] glow-shimmer py-2 sm:py-3 hover:text-[#A37F76] transition-colors"
            >
              About
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-2xl sm:text-3xl font-semibold text-[#58413c] glow-shimmer py-2 sm:py-3 hover:text-[#A37F76] transition-colors"
              >
                Services {isMobileServicesOpen ? "▼" : "▶"}
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(service)}
                      className="block text-lg sm:text-xl text-[#58413c] hover:text-[#A37F76] transition-colors pl-4"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
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