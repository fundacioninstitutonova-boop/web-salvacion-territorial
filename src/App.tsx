import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import MapSection from './components/MapSection';
import Escuela from './components/Escuela';
import Dashboard from './components/Dashboard';
import Saberes from './components/Saberes';
import Alianzas from './components/Alianzas';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAllianceModal = () => {
    const el = document.getElementById('alianzas-portal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Temporary spotlight highlight
      el.classList.add('ring-4', 'ring-brand-green-light', 'ring-offset-4', 'ring-offset-brand-charcoal');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-brand-green-light', 'ring-offset-4', 'ring-offset-brand-charcoal');
      }, 2000);
    }
  };

  return (
    <div className="bg-brand-charcoal min-h-screen font-sans text-brand-cream selection:bg-brand-green selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenAllianceModal={handleOpenAllianceModal} />

      {/* Hero Header Banner */}
      <Hero />

      {/* Philosophy and Purpose */}
      <Purpose />

      {/* Technical Topographic Map Section */}
      <MapSection />

      {/* Educational school modules and neighborhoods table */}
      <Escuela />

      {/* Results and indicators Dashboard */}
      <Dashboard />

      {/* Saberes Hub: Technical blogs and guides */}
      <Saberes />

      {/* Alliances Center / Portal Ledger */}
      <Alianzas isOpen={false} onClose={() => {}} />

      {/* Footer institutional information */}
      <Footer />

      {/* Scroll to Top Floating Indicator */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-brand-green hover:bg-brand-green-light text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 cursor-pointer border border-brand-green-light/20"
          title="Subir al inicio"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
