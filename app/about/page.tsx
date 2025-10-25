import { FaUsers, FaAward, FaGlobe, FaHeart } from 'react-icons/fa'

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
      name: 'Dr. Andi Wijaya',
      role: 'Founder & CEO',
      image: '👨‍💼',
      bio: 'Veteran industri teknologi dengan 15+ tahun pengalaman di Silicon Valley.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Curriculum',
      image: '👩‍🏫',
      bio: 'Ahli pendidikan dengan fokus pada pembelajaran berbasis projek dan praktik.',
    },
    {
      name: 'Budi Hartono',
      role: 'Lead Instructor',
      image: '👨‍🏫',
      bio: 'Full Stack Developer dengan passion mengajar dan membimbing generasi baru.',
    },
    {
      name: 'Maya Putri',
      role: 'Community Manager',
      image: '👩‍💼',
      bio: 'Berdedikasi membangun komunitas pembelajar yang supportif dan aktif.',
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
              Tim Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bertemu dengan para ahli dan profesional yang berdedikasi untuk kesuksesan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-7xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-primary-100">Siswa Aktif</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-100">Program Kursus</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-primary-100">Instruktur Expert</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-primary-100">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

