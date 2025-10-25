import { FaGraduationCap, FaCertificate, FaUsers, FaChartLine } from 'react-icons/fa'

export default function Features() {
  const features = [
    {
      icon: <FaGraduationCap size={40} />,
      title: 'Kurikulum Berkualitas',
      description: 'Materi pembelajaran yang dirancang oleh para ahli industri dan selalu diperbarui sesuai tren terkini.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <FaCertificate size={40} />,
      title: 'Sertifikat Profesional',
      description: 'Dapatkan sertifikat yang diakui industri setelah menyelesaikan setiap program pembelajaran.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Belajar Bersama Komunitas',
      description: 'Bergabung dengan komunitas pembelajar yang aktif dan saling mendukung satu sama lain.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: <FaChartLine size={40} />,
      title: 'Tracking Progress',
      description: 'Pantau perkembangan belajar Anda dengan sistem tracking yang komprehensif dan mudah dipahami.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-primary-700 font-semibold text-sm">✨ Keunggulan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="gradient-text">Karaya Academy?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan pengalaman pembelajaran terbaik dengan fitur-fitur unggulan yang dirancang untuk kesuksesan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon with gradient */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

