import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Budi Santoso',
      role: 'Full Stack Developer',
      image: '👨‍💻',
      rating: 5,
      text: 'Karaya Academy mengubah hidup saya! Setelah menyelesaikan program Web Development, saya mendapatkan pekerjaan sebagai Full Stack Developer di perusahaan teknologi ternama.',
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Data Analyst',
      image: '👩‍💼',
      rating: 5,
      text: 'Materi pembelajaran sangat lengkap dan instruktur sangat membantu. Program Data Science di Karaya Academy memberikan fondasi yang kuat untuk karir saya.',
    },
    {
      name: 'Ahmad Fadli',
      role: 'UI/UX Designer',
      image: '👨‍🎨',
      rating: 5,
      text: 'Pengalaman belajar yang luar biasa! Kurikulum yang terstruktur dengan baik dan projek-projek praktis yang sangat membantu dalam membangun portofolio saya.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan cerita sukses dari alumni Karaya Academy yang telah mencapai tujuan karir mereka.
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

