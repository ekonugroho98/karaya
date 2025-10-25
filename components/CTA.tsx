import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-300% animate-gradient"></div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-white font-semibold text-sm">🎯 Waktunya Beraksi!</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Memulai Perjalanan Pembelajaran Anda?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Bergabunglah dengan <span className="font-bold">10,000+</span> profesional yang telah mengubah karir mereka bersama Karaya Academy. 
            Daftar sekarang dan dapatkan akses ke semua program pembelajaran kami.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/programs"
              className="group relative bg-white text-primary-600 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                🚀 Mulai Belajar Sekarang
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              💬 Hubungi Kami
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Tanpa Biaya Tersembunyi</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Garansi 30 Hari</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

