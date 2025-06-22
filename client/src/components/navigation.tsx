import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-poppins font-bold text-blue-electric">KodeBantu</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('layanan')}
                className="text-dark-gray hover:text-blue-electric transition-colors duration-200 font-medium"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('testimoni')}
                className="text-dark-gray hover:text-blue-electric transition-colors duration-200 font-medium"
              >
                Testimoni
              </button>
              <button 
                onClick={() => scrollToSection('proses')}
                className="text-dark-gray hover:text-blue-electric transition-colors duration-200 font-medium"
              >
                Proses
              </button>
              <Button 
                onClick={() => scrollToSection('kontak')}
                className="bg-blue-electric text-white hover:bg-blue-600 font-medium"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark-gray hover:text-blue-electric"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('layanan')}
                className="text-dark-gray hover:text-blue-electric transition-colors duration-200 font-medium text-left"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('testimoni')}
                className="text-dark-gray hover:text-blue-electric transition-colors duration-200 font-medium text-left"
              >
                Testimoni
              </button>
              <button 
                onClick={() => scrollToSection('proses')}
                className="text-dark-gray hover:text-blue-electric transition-colors duration-200 font-medium text-left"
              >
                Proses
              </button>
              <Button 
                onClick={() => scrollToSection('kontak')}
                className="bg-blue-electric text-white hover:bg-blue-600 font-medium"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
