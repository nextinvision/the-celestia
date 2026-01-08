import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PodcastSection from "@/components/PodcastSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/layout/Footer";
import PowefulSection from "@/components/PowefulSection";
import Events from "@/components/Events";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      
      <ServicesSection />
      {/* <EventsSection /> */}
      <Events />
      <PodcastSection />
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <PowefulSection />
      <Footer />
    </div>
  );
};

export default Index;
