import { FaBookOpen, FaQuran, FaGraduationCap, FaBook } from 'react-icons/fa'

export default function ProgramsPage() {
  const programs = [
    {
      icon: <FaBookOpen size={60} />,
      title: 'Les Bahasa Arab',
      description: 'Pelajari bahasa Arab dari dasar hingga mahir dengan metode yang mudah dipahami. Fokus pada nahwu, sharaf, dan percakapan sehari-hari. Belajar mudah dari rumah dengan bimbingan langsung ustadz berpengalaman.',
      duration: '1 Bulan',
      level: 'Pemula',
      originalPrice: 'Rp 350.000',
      price: 'Rp 229.000',
      discount: '35%',
      schedule: '8 Kali Pertemuan',
      mode: '💻 Online',
      gradient: 'from-emerald-500 to-teal-600',
      modules: ['Nahwu (Tata Bahasa)', 'Sharaf (Morfologi)', 'Percakapan Sehari-hari', 'Bahsa Arab Dasar', 'Kosakata Harian', 'Menulis Arab'],
    },
    {
      icon: <FaQuran size={60} />,
      title: 'Tahsin Al-Quran',
      description: 'Tingkatkan kualitas bacaan Al-Quran Anda dengan bimbingan tahsin yang komprehensif. Belajar tajwid, makhorijul huruf, dan tartil yang benar sesuai kaidah. Kelas interaktif dengan jumlah santri terbatas.',
      duration: '2 Bulan',
      level: 'Semua Tingkat',
      originalPrice: 'Rp 300.000',
      price: 'Rp 199.000',
      discount: '34%',
      schedule: '8 Kali Pertemuan',
      mode: '💻 Online',
      gradient: 'from-blue-500 to-indigo-600',
      modules: ['Makhorijul Huruf', 'Ahkamul Huruf', 'Tajwid Lengkap', 'Tartil & Mujawwad', 'Gharib & Musykilat', 'Adab Tilawah'],
    },
    {
      icon: <FaBook size={60} />,
      title: 'Nahwu',
      description: 'Pelajari tata bahasa Arab (Nahwu) secara mendalam. Program per satuan mata pelajaran yang fokus dan intensif untuk menguasai dasar-dasar ilmu nahwu dengan metode yang mudah dipahami.',
      duration: 'Per Satuan',
      level: 'Pemula - Menengah',
      originalPrice: null,
      price: 'Rp 29.900',
      discount: null,
      schedule: 'Fleksibel',
      mode: '💻 Online',
      gradient: 'from-amber-500 to-orange-600',
      modules: ['Nahwu Dasar', 'Pemahaman Kaidah', 'Latihan Praktis', 'Contoh Penerapan', 'Evaluasi Berkala', 'Tanya Jawab'],
    },
    {
      icon: <FaGraduationCap size={60} />,
      title: 'Sharaf',
      description: 'Pelajari morfologi Arab (Sharaf) secara mendalam. Program per satuan mata pelajaran yang fokus dan intensif untuk menguasai dasar-dasar ilmu sharaf dengan metode yang mudah dipahami.',
      duration: 'Per Satuan',
      level: 'Pemula - Menengah',
      originalPrice: null,
      price: 'Rp 29.900',
      discount: null,
      schedule: 'Fleksibel',
      mode: '💻 Online',
      gradient: 'from-amber-500 to-orange-600',
      modules: ['Sharaf Dasar', 'Pemahaman Kaidah', 'Latihan Praktis', 'Contoh Penerapan', 'Evaluasi Berkala', 'Tanya Jawab'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 font-semibold text-sm">🕌 Program Pembelajaran Islam</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Pembelajaran</span> Kami
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan pembelajaran Islam Anda. Setiap program dibimbing oleh 
              ustadz/ustadzah berpengalaman dengan metode yang mudah dipahami. <span className="font-bold text-blue-600">Belajar dari rumah atau mana saja!</span>
            </p>
            
            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-emerald-600">✓</span>
                <span>Ustadz Berkompeten</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-blue-600">💻</span>
                <span>Kelas Online</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-purple-600">🏠</span>
                <span>Fleksibel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Discount Badge */}
                {program.discount && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-xs font-bold shadow-lg animate-pulse">
                      🔥 Diskon {program.discount}
                    </span>
                  </div>
                )}
                {/* Badge for per-satuan programs */}
                {!program.discount && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg">
                      📚 Per Satuan
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${program.gradient} text-white mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {program.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  {/* Info Cards */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <span className="text-gray-600 text-sm font-medium">⏱️ Durasi:</span>
                      <span className="font-bold text-gray-900 text-sm">{program.duration}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <span className="text-gray-600 text-sm font-medium">💻 Mode:</span>
                      <span className="font-bold text-blue-700 text-sm">{program.mode}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <span className="text-gray-600 text-sm font-medium">📅 Jadwal:</span>
                      <span className="font-bold text-gray-900 text-sm">{program.schedule}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
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

                  {/* Modules */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Materi Pembelajaran:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {program.modules.map((module, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start">
                          <span className="text-emerald-600 mr-2 mt-0.5">✓</span>
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/6285761123043?text=${encodeURIComponent(`Assalamualaikum, saya ingin mendaftar program ${program.title} di Karaya`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center bg-gradient-to-r ${program.gradient} text-white py-3 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105`}
                  >
                    Daftar Sekarang →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-emerald-700 font-semibold text-sm">💬 Butuh Bantuan?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tidak Yakin Program Mana yang <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Tepat?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda memilih program yang sesuai dengan tingkat kemampuan dan tujuan pembelajaran Anda. <span className="font-semibold">Konsultasi gratis!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285761123043?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20tentang%20program%20kursus%20di%20Karaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>📝</span>
              <span>Konsultasi Gratis</span>
            </a>
            <a
              href="https://wa.me/6285761123043?text=Assalamualaikum,%20saya%20ingin%20mendaftar%20program%20kursus%20di%20Karaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all duration-300 border-2 border-emerald-200 transform hover:scale-105"
            >
              <span>💬</span>
              <span>Daftar Sekarang</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

