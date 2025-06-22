import { User, MessageCircle, Code, Trophy } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Hubungi Kami",
    description: "Jelaskan masalah dan deadline Anda melalui WhatsApp atau form kontak",
    color: "bg-blue-electric"
  },
  {
    number: 2,
    title: "Penawaran Harga",
    description: "Kami akan menganalisis tugas dan memberikan penawaran harga terbaik",
    color: "bg-mint-green"
  },
  {
    number: 3,
    title: "Proses Pengerjaan",
    description: "Tim kami akan mengerjakan tugas Anda dengan standar profesional",
    color: "bg-bright-yellow"
  },
  {
    number: 4,
    title: "Selesai & Revisi",
    description: "Tugas dikirimkan tepat waktu. Butuh revisi? Kami siap membantu",
    color: "bg-purple-500"
  }
];

const processIcons = [User, MessageCircle, Code, Trophy];

export default function ProcessSection() {
  return (
    <section id="proses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark-gray mb-4">
            Prosesnya <span className="text-mint-green">Sangat Mudah</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dalam 4 langkah sederhana, tugas coding Anda akan terselesaikan dengan sempurna
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className={`${step.color} w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold text-2xl">{step.number}</span>
              </div>
              <h3 className="text-xl font-poppins font-semibold text-dark-gray mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Process illustration */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-4">
              {processIcons.map((Icon, index) => (
                <div key={index} className="flex items-center">
                  <Icon className={`h-8 w-8 ${
                    index === 0 ? 'text-blue-electric' :
                    index === 1 ? 'text-mint-green' :
                    index === 2 ? 'text-bright-yellow' :
                    'text-purple-500'
                  }`} />
                  {index < processIcons.length - 1 && (
                    <svg className="w-6 h-6 text-gray-400 mx-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4 font-medium">Mahasiswa → Konsultasi → Pengerjaan → Sukses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
