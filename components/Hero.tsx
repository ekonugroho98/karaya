import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full">
              <span className="text-primary-700 font-semibold text-sm">🚀 Platform Pembelajaran #1 di Indonesia</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transformasi Karir Anda Dimulai di{' '}
              <span className="gradient-text">Karaya Academy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Bergabunglah dengan <span className="font-semibold text-primary-600">10,000+</span> profesional yang telah mengembangkan keterampilan mereka 
              melalui program pembelajaran kami yang berkualitas tinggi dan terstruktur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/programs"
                className="group relative bg-gradient-to-r from-primary-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Jelajahi Program</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="glass-effect text-primary-700 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-primary-200"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold">4.9/5.0</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>✓ Sertifikat Profesional</div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div>✓ Akses Selamanya</div>
            </div>
          </div>

          {/* Right Content - Modern Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="group relative bg-gradient-to-br from-white to-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-primary-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">👥</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-gray-700 font-medium">Siswa Aktif</div>
              <div className="mt-2 text-xs text-primary-600 font-semibold">↑ 23% bulan ini</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">📚</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-700 font-medium">Program Kursus</div>
              <div className="mt-2 text-xs text-purple-600 font-semibold">↑ 8 program baru</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">⭐</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-gray-700 font-medium">Tingkat Kepuasan</div>
              <div className="mt-2 text-xs text-green-600 font-semibold">✓ Terverifikasi</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 border border-orange-100">
              <div className="absolute top-4 right-4 text-4xl opacity-20">🎓</div>
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">100+</div>
              <div className="text-gray-700 font-medium">Instruktur Expert</div>
              <div className="mt-2 text-xs text-orange-600 font-semibold">✓ Tersertifikasi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

