import Image from 'next/image'

export default function Teachers() {
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
  )
}

