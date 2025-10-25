import Link from 'next/link'

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-300% animate-gradient"></div>
      
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
            <span className="text-white font-semibold text-sm">🕌 Yuk, Mulai Sekarang!</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Meningkatkan Ilmu Islam Anda?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Bergabunglah dengan <span className="font-bold">200+</span> santri yang telah belajar bersama kami. 
            Daftar sekarang dan dapatkan <span className="font-bold">konsultasi gratis</span> untuk memilih program yang tepat!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="group relative bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                📝 Daftar Sekarang
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <a
              href="https://wa.me/6281234567890?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20tentang%20program%20kursus%20di%20Karaya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              💬 Chat WhatsApp
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Biaya Terjangkau</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Ustadz Bersertifikat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Konsultasi Gratis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

