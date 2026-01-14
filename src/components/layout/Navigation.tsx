import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png"; // adjust path if needed

interface NavigationProps {
  isNotificationVisible: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isNotificationVisible }) => {
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
    setIsMenuOpen(false);
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

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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

  return (
    <nav
      className={`fixed left-0 right-0 z-[500] border-b border-[#8B7355]/20 transition-all duration-300 ${isNotificationVisible ? 'top-[44px]' : 'top-0'
        }`}
      style={{
        backgroundColor: "#FDFCFA",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo on the left */}
          <div className="flex-shrink-0 cursor-pointer py-2" onClick={handleHomeClick}>
            <img
              src={logo}
              alt="the Celestia Studio Logo"
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center space-x-16">
            <button
              onClick={handleHomeClick}
              className="text-[#8B7355] hover:text-[#6B5345] transition-colors text-xl font-bold font-serif"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#8B7355] hover:text-[#6B5345] transition-colors text-xl font-bold font-serif"
            >
              About Us
            </button>
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#8B7355] hover:text-[#6B5345] transition-colors text-xl font-bold font-serif flex items-center gap-1"
              >
                Services
                <span className="text-xs">▼</span>
              </button>
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-lg border border-[#8B7355]/20 py-2 z-50">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(service)}
                      className="w-full text-left px-4 py-2 text-sm text-[#8B7355] hover:bg-[#FFF4E1] hover:text-[#6B5345] transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("events")}
              className="text-[#8B7355] hover:text-[#6B5345] transition-colors text-xl font-bold font-serif"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-[#8B7355] hover:text-[#6B5345] transition-colors text-xl font-bold font-serif"
            >
              Contact
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#8B7355] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-[#8B7355] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-[#8B7355] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-[#8B7355] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{
            backgroundColor: "#FFFFFF",
            transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out"
          }}
        >
          <div className="flex flex-col items-center justify-center min-h-screen space-y-6 sm:space-y-8">
            <button
              onClick={handleHomeClick}
              className="text-2xl sm:text-3xl font-semibold text-[#8B7355] py-2 sm:py-3 hover:text-[#6B5345] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-2xl sm:text-3xl font-semibold text-[#8B7355] py-2 sm:py-3 hover:text-[#6B5345] transition-colors"
            >
              About Us
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-2xl sm:text-3xl font-semibold text-[#8B7355] py-2 sm:py-3 hover:text-[#6B5345] transition-colors"
              >
                Services {isMobileServicesOpen ? "▼" : "▶"}
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(service)}
                      className="block text-lg sm:text-xl text-[#8B7355] hover:text-[#6B5345] transition-colors pl-4"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("events")}
              className="text-2xl sm:text-3xl font-semibold text-[#8B7355] py-2 sm:py-3 hover:text-[#6B5345] transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-2xl sm:text-3xl font-semibold text-[#8B7355] py-2 sm:py-3 hover:text-[#6B5345] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#8B7355] p-2 text-xl sm:text-2xl hover:text-[#6B5345] transition-colors"
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