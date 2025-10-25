import Link from 'next/link'
import { FaCode, FaBriefcase, FaPalette, FaDatabase } from 'react-icons/fa'

export default function Programs() {
  const programs = [
    {
      icon: <FaCode size={40} />,
      title: 'Web Development',
      description: 'Pelajari HTML, CSS, JavaScript, React, dan teknologi web modern lainnya.',
      duration: '6 Bulan',
      level: 'Beginner - Advanced',
      price: 'Rp 2.500.000',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      badge: '🔥 Populer',
    },
    {
      icon: <FaDatabase size={40} />,
      title: 'Data Science',
      description: 'Kuasai Python, Machine Learning, dan analisis data untuk karir di bidang data.',
      duration: '8 Bulan',
      level: 'Intermediate - Advanced',
      price: 'Rp 3.000.000',
      gradient: 'from-purple-500 via-pink-500 to-purple-600',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      badge: '⭐ Trending',
    },
    {
      icon: <FaPalette size={40} />,
      title: 'UI/UX Design',
      description: 'Belajar desain user interface dan user experience yang menarik dan fungsional.',
      duration: '4 Bulan',
      level: 'Beginner - Intermediate',
      price: 'Rp 2.000.000',
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      bgGradient: 'from-orange-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-orange-500 to-pink-500',
      badge: '🎨 Kreatif',
    },
    {
      icon: <FaBriefcase size={40} />,
      title: 'Digital Marketing',
      description: 'Pelajari strategi pemasaran digital, SEO, social media, dan content marketing.',
      duration: '5 Bulan',
      level: 'Beginner - Advanced',
      price: 'Rp 2.200.000',
      gradient: 'from-green-500 via-emerald-500 to-teal-600',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
      badge: '💼 Best Seller',
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-primary-700 font-semibold text-sm">📚 Pilihan Terbaik</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program <span className="gradient-text">Unggulan</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan tujuan karir Anda dan mulai perjalanan pembelajaran Anda hari ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {program.description}
                </p>
                
                {/* Info cards with gradient border */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br ${program.bgGradient} rounded-xl border border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">⏱️ Durasi:</span>
                    <span className="font-bold text-gray-900 text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br ${program.bgGradient} rounded-xl border border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">📊 Level:</span>
                    <span className="font-bold text-gray-900 text-sm">{program.level}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-br ${program.bgGradient} rounded-xl border border-gray-100">
                    <span className="text-gray-600 text-sm font-medium">💰 Harga:</span>
                    <span className={`font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent text-sm`}>
                      {program.price}
                    </span>
                  </div>
                </div>

                {/* CTA Button with gradient */}
                <Link
                  href="/programs"
                  className={`block w-full text-center bg-gradient-to-r ${program.gradient} text-white py-3 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105`}
                >
                  Detail Program →
                </Link>
              </div>
              
              {/* Bottom decoration line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link
            href="/programs"
            className="group inline-flex items-center gap-3 bg-white text-primary-600 px-10 py-4 rounded-xl text-lg font-bold hover:shadow-glow-lg transition-all duration-300 border-2 border-primary-200 transform hover:scale-105"
          >
            <span>Lihat Semua Program</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

