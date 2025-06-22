import { Button } from "@/components/ui/button";
import { MessageCircle, List, Shield } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-dark-gray leading-tight mb-6">
                Butuh Bantuan <span className="text-blue-electric">Tugas Coding?</span> Kami Punya Solusinya.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Layanan profesional untuk semua tugas Ilmu Komputer—mulai dari Algoritma, Pengembangan Web, hingga Machine Learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('kontak')}
                  className="bg-blue-electric text-white px-8 py-4 hover:bg-blue-600 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Konsultasi Gratis Sekarang
                </Button>
                <Button 
                  onClick={() => scrollToSection('layanan')}
                  variant="outline"
                  className="border-2 border-blue-electric text-blue-electric px-8 py-4 hover:bg-blue-electric hover:text-white font-semibold text-lg transition-all duration-200"
                  size="lg"
                >
                  <List className="mr-2 h-5 w-5" />
                  Lihat Layanan Kami
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <Shield className="text-mint-green mr-2 h-5 w-5" />
                <span className="font-medium">Tugas Coding & Proyek CS Beres, Nilai Aman</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              {/* Modern coding illustration */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
                <div className="bg-dark-gray rounded-lg p-6 text-green-400 font-mono text-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-bright-yellow rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-mint-green rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div>def solve_problem():</div>
                    <div className="ml-4">while struggling:</div>
                    <div className="ml-8 text-blue-300">call_kodebantu()</div>
                    <div className="ml-4 text-bright-yellow">return perfect_grade</div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-mint-green text-white p-3 rounded-full shadow-lg animate-pulse">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-bright-yellow text-dark-gray p-3 rounded-full shadow-lg animate-bounce">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
