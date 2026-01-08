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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PodcastSection />
      <ServicesSection />
      <EventsSection />
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <PowefulSection />
      <Footer />
    </div>
  );
};

export default Index;
