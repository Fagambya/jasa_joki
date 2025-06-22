import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rian F.",
    major: "Mahasiswa Informatika",
    content: "Awalnya pusing dengan tugas Machine Learning, tapi tim KodeBantu benar-benar life-saver! Kodenya rapi dan penjelasannya mudah dimengerti. Nilai A di tangan!",
    initials: "RF",
    bgColor: "bg-blue-electric"
  },
  {
    name: "Sari P.",
    major: "Teknik Informatika",
    content: "Proyek website akhir semester jadi mudah berkat bantuan KodeBantu. Responsenya cepat, hasilnya professional banget. Recommended!",
    initials: "SP",
    bgColor: "bg-mint-green"
  },
  {
    name: "Andi D.",
    major: "Sistem Informasi",
    content: "Tugas algoritma yang bikin stress jadi gampang. Tim KodeBantu ngasih penjelasan detail jadi saya paham konsepnya. Thanks banget!",
    initials: "AD",
    bgColor: "bg-bright-yellow"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-dark-gray mb-4">
            Apa Kata Mereka yang <span className="text-mint-green">Sudah Kami Bantu?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimoni nyata dari mahasiswa yang telah merasakan layanan profesional kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-dark-gray">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.major}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex text-bright-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
