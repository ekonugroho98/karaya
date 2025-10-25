import Link from 'next/link'
import { FaCode, FaBriefcase, FaPalette, FaDatabase, FaMobileAlt, FaCloud, FaShieldAlt, FaRobot } from 'react-icons/fa'

export default function ProgramsPage() {
  const programs = [
    {
      icon: <FaCode size={48} />,
      title: 'Web Development',
      description: 'Pelajari HTML, CSS, JavaScript, React, Next.js, Node.js, dan teknologi web modern lainnya. Program ini mencakup fundamental hingga advanced concepts.',
      duration: '6 Bulan',
      level: 'Beginner - Advanced',
      price: 'Rp 2.500.000',
      modules: ['HTML & CSS', 'JavaScript ES6+', 'React & Next.js', 'Node.js & Express', 'Database & API'],
    },
    {
      icon: <FaDatabase size={48} />,
      title: 'Data Science',
      description: 'Kuasai Python, Machine Learning, Deep Learning, dan analisis data untuk karir di bidang data. Termasuk projek real-world.',
      duration: '8 Bulan',
      level: 'Intermediate - Advanced',
      price: 'Rp 3.000.000',
      modules: ['Python Programming', 'Statistics & Math', 'Machine Learning', 'Deep Learning', 'Big Data'],
    },
    {
      icon: <FaPalette size={48} />,
      title: 'UI/UX Design',
      description: 'Belajar desain user interface dan user experience yang menarik dan fungsional menggunakan Figma, Adobe XD, dan tools modern.',
      duration: '4 Bulan',
      level: 'Beginner - Intermediate',
      price: 'Rp 2.000.000',
      modules: ['Design Principles', 'Figma & Adobe XD', 'User Research', 'Prototyping', 'Design System'],
    },
    {
      icon: <FaBriefcase size={48} />,
      title: 'Digital Marketing',
      description: 'Pelajari strategi pemasaran digital, SEO, social media marketing, content marketing, dan Google Analytics.',
      duration: '5 Bulan',
      level: 'Beginner - Advanced',
      price: 'Rp 2.200.000',
      modules: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Google Analytics', 'Email Marketing'],
    },
    {
      icon: <FaMobileAlt size={48} />,
      title: 'Mobile Development',
      description: 'Buat aplikasi mobile native dan cross-platform menggunakan React Native, Flutter, dan teknologi mobile terkini.',
      duration: '6 Bulan',
      level: 'Intermediate - Advanced',
      price: 'Rp 2.800.000',
      modules: ['React Native', 'Flutter & Dart', 'Mobile UI/UX', 'API Integration', 'App Deployment'],
    },
    {
      icon: <FaCloud size={48} />,
      title: 'Cloud Computing',
      description: 'Pelajari AWS, Google Cloud, Azure, Docker, Kubernetes, dan infrastruktur cloud modern untuk DevOps dan Cloud Engineering.',
      duration: '5 Bulan',
      level: 'Intermediate - Advanced',
      price: 'Rp 2.600.000',
      modules: ['AWS Basics', 'Docker & Kubernetes', 'CI/CD Pipeline', 'Cloud Architecture', 'Monitoring'],
    },
    {
      icon: <FaShieldAlt size={48} />,
      title: 'Cyber Security',
      description: 'Kuasai keamanan siber, ethical hacking, penetration testing, dan defensive security untuk melindungi sistem.',
      duration: '7 Bulan',
      level: 'Intermediate - Advanced',
      price: 'Rp 3.200.000',
      modules: ['Network Security', 'Ethical Hacking', 'Penetration Testing', 'Security Tools', 'Incident Response'],
    },
    {
      icon: <FaRobot size={48} />,
      title: 'Artificial Intelligence',
      description: 'Pelajari AI, Machine Learning, Natural Language Processing, Computer Vision, dan implementasi AI dalam berbagai industri.',
      duration: '8 Bulan',
      level: 'Advanced',
      price: 'Rp 3.500.000',
      modules: ['AI Fundamentals', 'NLP', 'Computer Vision', 'Neural Networks', 'AI Ethics'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Pembelajaran Kami
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih program yang sesuai dengan tujuan karir Anda. Setiap program dirancang oleh para ahli 
              industri dan dilengkapi dengan projek praktis untuk membangun portofolio Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="text-primary-600 mb-4">{program.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Durasi:</span>
                      <span className="font-semibold text-gray-700">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-semibold text-gray-700">{program.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Harga:</span>
                      <span className="font-semibold text-primary-600">{program.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Modul Pembelajaran:</h4>
                    <ul className="space-y-1">
                      {program.modules.map((module, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="text-primary-600 mr-2">✓</span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tidak Yakin Program Mana yang Tepat?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda memilih program yang sesuai dengan tujuan karir dan latar belakang Anda.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 transition shadow-lg"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  )
}

