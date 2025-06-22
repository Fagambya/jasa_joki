import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MessageCircle, Mail, Layers, Shield, Clock, Star, Users } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: ""
  });

  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Berhasil!",
        description: data.message,
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Gagal!",
        description: error.message || "Terjadi kesalahan saat mengirim pesan",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.description) {
      toast({
        title: "Form tidak lengkap",
        description: "Silakan isi semua field yang diperlukan",
        variant: "destructive",
      });
      return;
    }
    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="kontak" className="py-20 bg-gradient-to-br from-blue-electric via-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
          Siap Meringankan Beban <span className="text-bright-yellow">Tugas Anda?</span>
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Jangan biarkan tugas coding menghambat Anda. Diskusikan kebutuhan Anda dengan kami tanpa biaya.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            className="bg-mint-green text-white px-8 py-4 hover:bg-green-600 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            size="lg"
          >
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-3 h-5 w-5" />
              Hubungi Kami di WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="bg-white text-blue-electric px-8 py-4 hover:bg-gray-100 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            size="lg"
          >
            <a href="mailto:info@kodebantu.com">
              <Mail className="mr-3 h-5 w-5" />
              Kirim Email
            </a>
          </Button>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-poppins font-semibold mb-6">Atau Isi Form Konsultasi Gratis</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-bright-yellow focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-bright-yellow focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Nomor WhatsApp"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-bright-yellow focus:border-transparent"
                  required
                />
              </div>
              <div>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)} required>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-bright-yellow focus:border-transparent">
                    <SelectValue placeholder="Pilih Jenis Layanan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Pembuatan Website</SelectItem>
                    <SelectItem value="algorithm">Algoritma & Struktur Data</SelectItem>
                    <SelectItem value="mobile">Aplikasi Mobile</SelectItem>
                    <SelectItem value="database">Proyek Database</SelectItem>
                    <SelectItem value="ml">Data Analysis & ML</SelectItem>
                    <SelectItem value="academic">Tugas Akademik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  rows={4}
                  placeholder="Deskripsikan tugas Anda dan deadline..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-bright-yellow focus:border-transparent resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={submitContactMutation.isPending}
                className="w-full bg-bright-yellow text-dark-gray px-8 py-4 hover:bg-yellow-400 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                size="lg"
              >
                <Layers className="mr-2 h-5 w-5" />
                {submitContactMutation.isPending ? "Mengirim..." : "Kirim Konsultasi Gratis"}
              </Button>
            </form>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="flex items-center">
            <Shield className="mr-2 text-mint-green h-5 w-5" />
            <span className="text-sm">100% Privasi Terjamin</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 text-bright-yellow h-5 w-5" />
            <span className="text-sm">Response &lt; 1 Jam</span>
          </div>
          <div className="flex items-center">
            <Star className="mr-2 text-bright-yellow h-5 w-5" />
            <span className="text-sm">Rating 4.9/5</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 text-mint-green h-5 w-5" />
            <span className="text-sm">500+ Mahasiswa Terbantu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
