import { Instagram, Linkedin, Mail } from "lucide-react";
import tarotCards from "@/assets/tarot-cards.jpg";
import bg3 from "@/assets/bg3.png";
const ContactSection = () => {
  return (
    <section 
      id="contacts" 
      className="py-20 relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: "#FFF4E1" }}
    >
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg3})`,
        }}
      ></div> */}
      {/* Large organic blob background */}
      <div className="absolute left-0 bottom-0 w-2/3 h-3/4">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
          <path
            d="M0,300 Q100,200 200,250 Q300,300 350,400 Q400,500 300,550 Q200,600 100,550 Q0,500 0,300 Z"
            fill="hsl(var(--blob-primary))"
            opacity="0.7"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-script text-foreground text-shimmer">
                Connect With Me
              </h2>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-serif text-foreground glow-shimmer">
                  Sunita Ramrakhiyani
                </h3>
                <p className="text-lg text-muted-foreground italic glow-shimmer">
                  The Light Behind Righttsign Tarot
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <a 
                  href="tel:+919016675446"
                  className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  +91 9016675446
                </a>
                
                <a 
                  href="https://instagram.com/RighttsignTarot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  @RighttsignTarot
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 pt-6">
              <a 
                href="https://instagram.com/RighttsignTarot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors hover-shimmer glow-shimmer relative overflow-hidden"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground relative z-10" />
              </a>
              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors hover-shimmer glow-shimmer relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground relative z-10" />
              </a>
              <a 
                href="mailto:contact@righttsigntarot.com"
                className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-primary/30 flex items-center justify-center transition-colors hover-shimmer glow-shimmer relative overflow-hidden"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground relative z-10" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-8">
              Righttsign © 2025 - 2026
            </p>
          </div>

          {/* Right - Tarot Cards Image */}
          <div className="relative flex justify-end">
            <div className="rounded-3xl overflow-hidden w-full max-w-md shadow-2xl golden-border-solid p-2">
              <img 
                src={tarotCards}
                alt="Tarot Cards and Oracle Deck"
                className="w-full h-[600px] object-cover rounded-3xl"
              />
            </div>

            {/* Decorative bird element */}
            <div className="absolute -top-10 -right-10 opacity-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <path d="M60 20 L70 45 L95 50 L77.5 67.5 L82 92 L60 80 L38 92 L42.5 67.5 L25 50 L50 45 Z" fill="currentColor" className="text-warm-cream"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative leaves */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
          <path d="M100 10C100 10 120 30 130 60C140 90 130 120 130 120C130 120 110 100 100 70C90 40 100 10 100 10Z" fill="currentColor" className="text-mauve"/>
          <path d="M150 30C150 30 165 45 170 70C175 95 168 115 168 115C168 115 153 100 148 75C143 50 150 30 150 30Z" fill="currentColor" className="text-primary"/>
        </svg>
      </div>

      {/* Golden Particles */}
      <div className="golden-particle golden-particle-large" style={{ top: "15%", left: "5%", animationDelay: "0s" }}></div>
      <div className="golden-particle golden-particle-medium golden-particle-float" style={{ top: "30%", right: "8%", animationDelay: "2s" }}></div>
      <div className="golden-particle golden-particle-small golden-particle-drift" style={{ bottom: "25%", left: "10%", animationDelay: "1.5s" }}></div>
      <div className="golden-particle golden-particle-medium" style={{ top: "50%", right: "12%", animationDelay: "0.6s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ bottom: "15%", right: "5%", animationDelay: "1.8s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ top: "40%", left: "8%", animationDelay: "1s" }}></div>
      <div className="golden-particle golden-particle-small" style={{ bottom: "35%", right: "20%", animationDelay: "2.5s" }}></div>
    </section>
  );
};

export default ContactSection;
