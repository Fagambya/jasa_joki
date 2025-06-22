import { Clock, Shield, Code, Star } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Tepat Waktu",
    description: "Pengiriman selalu sesuai deadline yang disepakati tanpa kompromi kualitas",
    color: "text-blue-electric",
    bgColor: "bg-blue-electric/10",
    hoverBg: "group-hover:bg-blue-electric"
  },
  {
    icon: Shield,
    title: "Privasi Terjamin",
    description: "Identitas dan semua data Anda 100% aman dengan enkripsi tingkat tinggi",
    color: "text-mint-green",
    bgColor: "bg-mint-green/10",
    hoverBg: "group-hover:bg-mint-green"
  },
  {
    icon: Code,
    title: "Kode Berkualitas",
    description: "Kode bersih, terstruktur, dan disertai penjelasan lengkap untuk pembelajaran",
    color: "text-bright-yellow",
    bgColor: "bg-bright-yellow/10",
    hoverBg: "group-hover:bg-bright-yellow"
  },
  {
    icon: Star,
    title: "Hasil Memuaskan",
    description: "Garansi revisi hingga Anda puas dengan hasil yang diberikan",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    hoverBg: "group-hover:bg-purple-500"
  }
];

export default function FeaturesSection() {
  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark-gray mb-4">
            Mengapa Memilih <span className="text-blue-electric">KodeBantu?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan layanan terbaik dengan standar profesional tinggi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className={`${feature.bgColor} w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${feature.hoverBg} transition-colors duration-300`}>
                  <IconComponent className={`h-8 w-8 ${feature.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-dark-gray mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
