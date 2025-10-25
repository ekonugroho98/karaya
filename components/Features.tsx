import { FaBookOpen, FaUserGraduate, FaUsers, FaAward } from 'react-icons/fa'

export default function Features() {
  const features = [
    {
      icon: <FaUserGraduate size={40} />,
      title: 'Ustadz Berkompeten',
      description: 'Dibimbing oleh ustadz/ustadzah yang berpengalaman, berkompeten, dan memiliki sanad dalam ilmu yang diajarkan.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: <FaBookOpen size={40} />,
      title: 'Metode Efektif',
      description: 'Metode pembelajaran yang mudah dipahami, terstruktur, dan terbukti efektif untuk semua tingkat kemampuan.',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <FaUsers size={40} />,
      title: 'Kelas Interaktif',
      description: 'Pembelajaran interaktif dengan jumlah santri terbatas agar fokus dan optimal dalam memahami materi.',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
    },
    {
      icon: <FaAward size={40} />,
      title: 'Sertifikat Resmi',
      description: 'Dapatkan sertifikat resmi setelah menyelesaikan program sebagai bukti penguasaan ilmu yang telah dipelajari.',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-emerald-700 font-semibold text-sm">✨ Keunggulan Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Karaya?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami berkomitmen memberikan pembelajaran Islam yang berkualitas dengan pendekatan yang mudah dipahami dan aplikatif.
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
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
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

