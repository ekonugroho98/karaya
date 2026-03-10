import { FaBookOpen, FaQuran, FaGraduationCap, FaBook, FaLanguage } from 'react-icons/fa'

export default function Programs() {
  const programs = [
    {
      icon: <FaLanguage size={50} />,
      title: 'Bahasa Arab',
      description: 'Pelajari bahasa Arab secara menyeluruh. Program per satuan mata pelajaran yang fokus pada penguasaan bahasa Arab praktis, percakapan sehari-hari, dan kosakata dengan metode yang mudah dipahami.',
      duration: 'Per Satuan',
      level: 'Pemula - Menengah',
      originalPrice: null,
      price: 'Rp 29.900',
      discount: null,
      schedule: 'Fleksibel',
      mode: '💻 Online',
      gradient: 'from-amber-500 via-orange-500 to-yellow-600',
      bgGradient: 'from-amber-50 to-orange-50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      badge: '📚 Per Satuan',
      features: ['Bahasa Arab Dasar', 'Percakapan Sehari-hari', 'Kosakata Harian', 'Latihan Praktis'],
    },
    {
      icon: <FaBook size={50} />,
      title: 'Nahwu',
      description: 'Pelajari tata bahasa Arab (Nahwu) secara mendalam. Program per satuan mata pelajaran yang fokus dan intensif untuk menguasai dasar-dasar ilmu nahwu dengan metode yang mudah dipahami.',
      duration: 'Per Satuan',
      level: 'Pemula - Menengah',
      originalPrice: null,
      price: 'Rp 29.900',
      discount: null,
      schedule: 'Fleksibel',
      mode: '💻 Online',
      gradient: 'from-amber-500 via-orange-500 to-yellow-600',
      bgGradient: 'from-amber-50 to-orange-50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      badge: '📚 Per Satuan',
      features: ['Nahwu Dasar', 'Pemahaman Kaidah', 'Latihan Praktis', 'Contoh Penerapan'],
    },
    {
      icon: <FaGraduationCap size={50} />,
      title: 'Sharaf',
      description: 'Pelajari morfologi Arab (Sharaf) secara mendalam. Program per satuan mata pelajaran yang fokus dan intensif untuk menguasai dasar-dasar ilmu sharaf dengan metode yang mudah dipahami.',
      duration: 'Per Satuan',
      level: 'Pemula - Menengah',
      originalPrice: null,
      price: 'Rp 29.900',
      discount: null,
      schedule: 'Fleksibel',
      mode: '💻 Online',
      gradient: 'from-amber-500 via-orange-500 to-yellow-600',
      bgGradient: 'from-amber-50 to-orange-50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      badge: '📚 Per Satuan',
      features: ['Sharaf Dasar', 'Pemahaman Kaidah', 'Latihan Praktis', 'Contoh Penerapan'],
    },
    {
      icon: <FaBookOpen size={50} />,
      title: 'Les Bahasa Arab',
      description: 'Pelajari bahasa Arab dari dasar hingga mahir. Fokus pada nahwu, sharaf, dan percakapan sehari-hari dengan metode yang mudah dipahami. Kelas online yang bisa diakses dari mana saja!',
      duration: '1 Bulan',
      level: 'Pemula',
      originalPrice: 'Rp 350.000',
      price: 'Rp 299.000',
      discount: '15%',
      schedule: '8 Kali Pertemuan',
      mode: '💻 Online',
      gradient: 'from-emerald-500 via-teal-500 to-green-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      badge: '📖 Populer',
      features: ['Nahwu & Sharaf', 'Percakapan', 'Bahsa Arab Dasar', 'Kosakata Harian'],
    },
    {
      icon: <FaQuran size={50} />,
      title: 'Tahsin Al-Quran',
      description: 'Tingkatkan bacaan Al-Quran Anda dengan bimbingan tahsin. Belajar tajwid, makhorijul huruf, dan tartil yang benar sesuai kaidah. Pembelajaran private dengan bimbingan langsung dari rumah!',
      duration: '1 Bulan',
      level: 'Semua Tingkat',
      originalPrice: 'Rp 300.000',
      price: 'Rp 199.000',
      discount: '34%',
      schedule: '4 Kali Pertemuan',
      mode: '💻 Online',
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
            Mulai perjalanan pembelajaran bahasa arab dan tahsin anda dengan program yang berkualitas yang dibimbing oleh ustadz/ustadzah berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-3 border border-gray-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold shadow-lg">
                  {program.badge}
                </span>
                {/* Discount Badge */}
                {program.discount && (
                  <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 Diskon {program.discount}
                  </span>
                )}
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
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <span className="text-gray-600 text-sm font-medium">💻 Mode:</span>
                    <span className="font-bold text-blue-700 text-sm">{program.mode}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <span className="text-gray-600 text-sm font-medium">📅 Jadwal:</span>
                    <span className="font-bold text-gray-900 text-sm">{program.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <span className="text-gray-600 text-sm font-medium">⏰ Sesi:</span>
                    <span className="font-bold text-gray-900 text-sm">90 Menit/Pertemuan</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <span className="text-gray-600 text-sm font-medium">📊 Level:</span>
                    <span className="font-bold text-gray-900 text-sm">{program.level}</span>
                  </div>
                  {/* Price with Discount */}
                  <div className="p-4 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 rounded-xl border-2 border-red-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-600 text-sm font-medium">💰 Investasi:</span>
                      <div className="flex flex-col items-end">
                        {program.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">{program.originalPrice}</span>
                        )}
                        <span className={`font-bold text-lg bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                          {program.price}
                        </span>
                      </div>
                    </div>
                    {program.discount && (
                      <div className="mt-2 text-center">
                        <span className="inline-block px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                          HEMAT {program.discount} 🎉
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button with gradient */}
                <a
                  href={`https://wa.me/6285761123043?text=${encodeURIComponent(`Assalamualaikum, saya ingin mendaftar program ${program.title} di Karaya`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center bg-gradient-to-r ${program.gradient} text-white py-3 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105`}
                >
                  Daftar Sekarang →
                </a>
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
          <a
            href="https://wa.me/6285761123043?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20tentang%20program%20kursus%20di%20Karaya"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>💬 Hubungi Kami</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

