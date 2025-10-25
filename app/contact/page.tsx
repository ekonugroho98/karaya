'use client'

import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda. 
              Jangan ragu untuk menghubungi kami melalui form di bawah ini.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-600 mt-1 mr-4">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Jl. Sudirman No. 123<br />
                      Jakarta Selatan, DKI Jakarta 12190<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-600 mt-1 mr-4">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
                    <p className="text-gray-600">
                      +62 812-3456-7890<br />
                      +62 21-1234-5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-600 mt-1 mr-4">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@karaya.academy<br />
                      support@karaya.academy
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-primary-600 mt-1 mr-4">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 09:00 - 18:00 WIB<br />
                      Sabtu: 09:00 - 15:00 WIB<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">Google Maps (Placeholder)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Kirim Pesan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+62 812-3456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="program">Informasi Program</option>
                    <option value="enrollment">Pendaftaran</option>
                    <option value="technical">Bantuan Teknis</option>
                    <option value="partnership">Kerjasama</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-gray-600">
              Temukan jawaban untuk pertanyaan umum di bawah ini.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Bagaimana cara mendaftar program?
              </h3>
              <p className="text-gray-600">
                Anda dapat mendaftar melalui halaman program kami atau menghubungi tim kami langsung 
                melalui form kontak di atas. Tim kami akan membantu proses pendaftaran Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apakah ada sistem cicilan pembayaran?
              </h3>
              <p className="text-gray-600">
                Ya, kami menyediakan berbagai pilihan pembayaran termasuk sistem cicilan yang fleksibel. 
                Hubungi tim kami untuk informasi lebih lanjut.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Apakah sertifikat diakui oleh industri?
              </h3>
              <p className="text-gray-600">
                Ya, sertifikat kami diakui oleh berbagai perusahaan dan industri. Kami juga memiliki 
                kemitraan dengan berbagai perusahaan untuk membantu penempatan kerja alumni.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

