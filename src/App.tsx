import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SoundHealing from "./pages/SoundHealing";
import CrystalTreasure from "./pages/CrystalTreasure";
import IntuitiveCoaching from "./pages/IntuitiveCoaching";
import Reiki from "./pages/Reiki";
import TarotGuidance from "./pages/TarotGuidance";
import Numerology from "./pages/Numerology";
import bodyImage from "@/assets/bodyimage.svg";
import Hidden from "@/assets/download.png"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div
        className="min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${Hidden})` }}
      >
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tarot-guidance" element={<TarotGuidance />} />
            <Route path="/numerology" element={<Numerology />} />
            <Route path="/sound-healing" element={<SoundHealing />} />
            <Route path="/crystal-treasure" element={<CrystalTreasure />} />
            <Route path="/intuitive-coaching" element={<IntuitiveCoaching />} />
            <Route path="/reiki" element={<Reiki />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
