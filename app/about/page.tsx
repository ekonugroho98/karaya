import { FaUsers, FaAward, FaGlobe, FaHeart } from 'react-icons/fa'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: <FaUsers size={40} />,
      title: 'Kolaborasi',
      description: 'Kami percaya pada kekuatan belajar bersama dan saling mendukung.',
    },
    {
      icon: <FaAward size={40} />,
      title: 'Kualitas',
      description: 'Komitmen kami adalah menyediakan pendidikan berkualitas tinggi untuk semua.',
    },
    {
      icon: <FaGlobe size={40} />,
      title: 'Inovasi',
      description: 'Kami terus berinovasi untuk menghadirkan metode pembelajaran terbaik.',
    },
    {
      icon: <FaHeart size={40} />,
      title: 'Empati',
      description: 'Kami memahami setiap siswa memiliki perjalanan pembelajaran yang unik.',
    },
  ]

  const team = [
    {
      name: 'Ustadzah Dwi Hafni Hafsah',
      role: 'Pengajar Bahasa Arab & Tahfiz',
      image: '/image/guru-1.png',
      bio: 'Mahasiswa semester 7 STIQ Kepri jurusan Al-Qur\'an dan Tafsir. Memiliki semangat belajar yang tinggi, disiplin, dan berpengalaman mengajar bahasa Arab dan tahfiz di berbagai pondok pesantren termasuk Pondok Modern Darussalam Gontor Putri dan Pondok Pesantren UIC Batam.',
    },
    {
      name: 'Ustadz Dasep Shaleh Nuralim',
      role: 'Pengajar Tahfiz, Bahasa Arab & Diniyyah',
      image: '/image/guru-2.png',
      bio: 'Lulusan Bachelor of Sharia and Law dari Al Azhar University, Cairo. Berpengalaman sebagai Musyrif Tahfiz, Guru Bahasa Arab, dan Guru Diniyah di berbagai pesantren di Indonesia dan Malaysia, termasuk Maahad Tahfiz Al Maghfirah Malaysia dan Al Quran Kreatif Internasional Bandung.',
    },
    {
      name: 'Ustadz Muhammad Ismail',
      role: 'Pengajar Tahfidz & Bahasa Arab',
      image: '/image/guru-3.png',
      bio: 'Mahasiswa semester akhir jurusan Ulumul Quran wa Tafsir di Jami\'atul Ulum, Hadramaut, Yaman, dan juga pelajar di Ma\'had Falah, Mukalla. Berpengalaman mengajar Tahfidz di Yayasan Talaumau Tahfidz Centre dan Yayasan Imam Al Ghazali, serta mengajar di sebuah Ma\'had di Yaman.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tentang Karaya Academy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Kami adalah platform pembelajaran yang berdedikasi untuk mengubah kehidupan melalui 
              pendidikan berkualitas tinggi dan aksesibel.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi Kami</h2>
              <p className="text-gray-700 leading-relaxed">
                Memberikan akses pendidikan berkualitas tinggi yang terjangkau dan relevan dengan 
                kebutuhan industri. Kami berkomitmen untuk membantu setiap individu mencapai potensi 
                penuh mereka melalui pembelajaran yang terstruktur, praktis, dan berbasis projek nyata.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi Kami</h2>
              <p className="text-gray-700 leading-relaxed">
                Menjadi platform pembelajaran terdepan di Indonesia yang memberdayakan jutaan profesional 
                untuk berkembang dalam karir mereka. Kami membayangkan dunia di mana setiap orang memiliki 
                kesempatan yang sama untuk belajar dan berkembang, terlepas dari latar belakang mereka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guru & Pengajar Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bertemu dengan para ustadz dan ustadzah yang berpengalaman dan berdedikasi untuk membantu Anda menguasai bahasa Arab dan memperbaiki bacaan Al-Quran.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 128px) 128px, 128px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

