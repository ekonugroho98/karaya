import Link from 'next/link'
import { FaBookOpen, FaQuran } from 'react-icons/fa'

export default function Programs() {
  const programs = [
    {
      icon: <FaBookOpen size={50} />,
      title: 'Les Bahasa Arab',
      description: 'Pelajari bahasa Arab dari dasar hingga mahir. Fokus pada nahwu, sharaf, dan percakapan sehari-hari dengan metode yang mudah dipahami.',
      duration: '3-6 Bulan',
      level: 'Pemula - Menengah',
      price: 'Rp 350.000/bulan',
      schedule: '2x Seminggu',
      gradient: 'from-emerald-500 via-teal-500 to-green-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      badge: '📖 Populer',
      features: ['Nahwu & Sharaf', 'Percakapan', 'Membaca Teks Arab', 'Kosakata Harian'],
    },
    {
      icon: <FaQuran size={50} />,
      title: 'Tahsin Al-Qur\'an',
      description: 'Tingkatkan bacaan Al-Qur\'an Anda dengan bimbingan tahsin. Belajar tajwid, makhorijul huruf, dan tartil yang benar sesuai kaidah.',
      duration: '2-4 Bulan',
      level: 'Semua Tingkat',
      price: 'Rp 300.000/bulan',
      schedule: '2x Seminggu',
      gradient: 'from-blue-500 via-indigo-500 to-purple-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-purple-500',
      badge: '⭐ Pilihan Utama',
      features: ['Makhorijul Huruf', 'Tajwid', 'Tartil', 'Tilawah'],
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-emerald-700 font-semibold text-sm">🕌 Program Pembelajaran</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Unggulan</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mulai perjalanan pembelajaran Islam Anda dengan program berkualitas yang dibimbing oleh ustadz/ustadzah berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold shadow-lg">
                  {program.badge}
                </span>
              </div>
              
              <div className="p-8 relative z-10">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${program.iconBg} rounded-2xl text-white mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                {/* Features List */}
                <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Materi Pembelajaran:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                        <span className="text-emerald-600">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Info cards with gradient border */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <span className="text-gray-600 text-sm font-medium">⏱️ Durasi:</span>
                    <span className="font-bold text-gray-900 text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <span className="text-gray-600 text-sm font-medium">📅 Jadwal:</span>
                    <span className="font-bold text-gray-900 text-sm">{program.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <span className="text-gray-600 text-sm font-medium">📊 Level:</span>
                    <span className="font-bold text-gray-900 text-sm">{program.level}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <span className="text-gray-600 text-sm font-medium">💰 Investasi:</span>
                    <span className={`font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent text-sm`}>
                      {program.price}
                    </span>
                  </div>
                </div>

                {/* CTA Button with gradient */}
                <Link
                  href="/contact"
                  className={`block w-full text-center bg-gradient-to-r ${program.gradient} text-white py-3 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105`}
                >
                  Daftar Sekarang →
                </Link>
              </div>
              
              {/* Bottom decoration line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ingin konsultasi terlebih dahulu? Hubungi kami untuk informasi lebih lanjut tentang program yang sesuai dengan kebutuhan Anda.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>💬 Hubungi Kami</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

