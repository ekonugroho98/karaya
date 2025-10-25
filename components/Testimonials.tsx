import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Umar bin Abdullah',
      role: 'Santri Bahasa Arab',
      image: '👨‍🎓',
      rating: 5,
      text: 'Alhamdulillah, setelah 3 bulan belajar di Karaya, saya sudah bisa membaca kitab kuning dengan lebih lancar. Metode yang diajarkan sangat mudah dipahami.',
    },
    {
      name: 'Fatimah Az-Zahra',
      role: 'Santri Tahsin',
      image: '👩‍🎓',
      rating: 5,
      text: 'Subhanallah, bacaan Al-Qur\'an saya jadi lebih baik. Ustadzah sangat sabar dan detail dalam mengajarkan makhorijul huruf dan tajwid.',
    },
    {
      name: 'Ahmad Fauzan',
      role: 'Santri Bahasa Arab',
      image: '👨‍💼',
      rating: 5,
      text: 'Jazakallahu khairan kepada Karaya. Saya yang awalnya tidak bisa sama sekali, sekarang sudah mulai percaya diri berbahasa Arab.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 rounded-full">
            <span className="text-emerald-700 font-semibold text-sm">💬 Testimoni</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Santri</span> Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman santri yang telah belajar dan merasakan manfaat dari program kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

