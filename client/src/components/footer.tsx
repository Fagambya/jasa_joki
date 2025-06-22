import { MessageCircle, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-poppins font-bold text-blue-electric mb-4">KodeBantu</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Solusi terpercaya untuk semua kebutuhan tugas coding dan proyek Computer Science Anda. 
              Profesional, amanah, dan berkualitas tinggi.
            </p>
            <p className="text-bright-yellow font-semibold">
              "Tugas Coding & Proyek CS Beres, Nilai Aman"
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#layanan" className="hover:text-blue-electric transition-colors">Pembuatan Website</a></li>
              <li><a href="#layanan" className="hover:text-blue-electric transition-colors">Algoritma & Struktur Data</a></li>
              <li><a href="#layanan" className="hover:text-blue-electric transition-colors">Aplikasi Mobile</a></li>
              <li><a href="#layanan" className="hover:text-blue-electric transition-colors">Database</a></li>
              <li><a href="#layanan" className="hover:text-blue-electric transition-colors">Machine Learning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <MessageCircle className="mr-2 text-mint-green h-4 w-4" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-blue-electric h-4 w-4" />
                <span>info@kodebantu.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 text-bright-yellow h-4 w-4" />
                <span>24/7 Available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 KodeBantu. All rights reserved. | Membantu mahasiswa Computer Science mencapai kesuksesan akademik.
          </p>
        </div>
      </div>
    </footer>
  );
}
