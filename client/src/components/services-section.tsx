import { Globe, GitBranch, Smartphone, Database, TrendingUp, GraduationCap, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Pembuatan Website",
    description: "Pengembangan website modern menggunakan teknologi terkini",
    features: ["HTML, CSS, JavaScript", "PHP & Database Integration", "Responsive Design", "Modern Frameworks"],
    gradient: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-electric"
  },
  {
    icon: GitBranch,
    title: "Algoritma & Struktur Data",
    description: "Solusi optimal untuk tugas pemrograman fundamental",
    features: ["C++, Java, Python", "Sorting & Searching", "Graph Algorithms", "Dynamic Programming"],
    gradient: "from-green-50 to-green-100",
    iconBg: "bg-mint-green"
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    description: "Pengembangan aplikasi mobile untuk berbagai platform",
    features: ["Android Development", "iOS Development", "Cross-platform Apps", "UI/UX Design"],
    gradient: "from-yellow-50 to-yellow-100",
    iconBg: "bg-bright-yellow"
  },
  {
    icon: Database,
    title: "Proyek Database",
    description: "Desain dan implementasi sistem database yang efisien",
    features: ["SQL & NoSQL", "Database Design", "Query Optimization", "Data Migration"],
    gradient: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Data Analysis & ML",
    description: "Analisis data dan implementasi machine learning",
    features: ["Python & R", "Data Visualization", "Statistical Analysis", "ML Algorithms"],
    gradient: "from-red-50 to-red-100",
    iconBg: "bg-red-500"
  },
  {
    icon: GraduationCap,
    title: "Tugas Akademik",
    description: "Bantuan komprehensif untuk semua tugas kuliah CS",
    features: ["Research Papers", "Project Documentation", "Code Review", "Presentation Materials"],
    gradient: "from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark-gray mb-4">
            Kami Siap Membantu Anda <span className="text-blue-electric">Dalam Hal:</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Layanan komprehensif untuk semua kebutuhan tugas dan proyek Computer Science Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${service.gradient} rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1`}>
                <div className={`w-14 h-14 ${service.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-dark-gray mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-mint-green mr-2 h-4 w-4 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
