import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { CategoriesSection } from './components/sections/CategoriesSection';
import { CtaBannerSection } from './components/sections/CtaBannerSection';
import { CustomizationSection } from './components/sections/CustomizationSection';
import { FaqSection } from './components/sections/FaqSection';
import { HeroSection } from './components/sections/HeroSection';
import { HowToBuySection } from './components/sections/HowToBuySection';
import { LocationSection } from './components/sections/LocationSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { FloatingWhatsapp } from './components/ui/FloatingWhatsapp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-rose-500 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <CustomizationSection />
        <HowToBuySection />
        <AboutSection />
        <LocationSection />
        <FaqSection />
        <CtaBannerSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}