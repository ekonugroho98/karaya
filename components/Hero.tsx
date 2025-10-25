import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
              <span className="text-emerald-700 font-semibold text-sm">🕌 Pembelajaran Islam Berkualitas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Belajar <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Bahasa Arab</span> & <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Tahsin Al-Qur'an</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Tingkatkan pemahaman Islam Anda melalui pembelajaran bahasa Arab dan perbaikan bacaan Al-Qur'an dengan bimbingan <span className="font-semibold text-emerald-600">ustadz/ustadzah</span> yang berpengalaman dan berkompeten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">📝 Daftar Sekarang</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="glass-effect text-emerald-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-emerald-200"
              >
                💬 Konsultasi Gratis
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">4.9/5.0</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>✓ Ustadz Berkualitas</div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>✓ Metode Mudah</div>
            </div>
          </div>

          {/* Right Content - Modern Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="group relative bg-gradient-to-br from-white to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">📖</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">200+</div>
              <div className="text-gray-700 font-medium">Santri Aktif</div>
              <div className="mt-2 text-xs text-emerald-600 font-semibold">↑ Terus Bertambah</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">🕌</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">2</div>
              <div className="text-gray-700 font-medium">Program Unggulan</div>
              <div className="mt-2 text-xs text-blue-600 font-semibold">✓ Berkualitas</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-teal-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">⭐</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-700 font-medium">Metode Efektif</div>
              <div className="mt-2 text-xs text-teal-600 font-semibold">✓ Terbukti</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">👨‍🏫</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-700 font-medium">Ustadz Expert</div>
              <div className="mt-2 text-xs text-indigo-600 font-semibold">✓ Bersertifikat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

