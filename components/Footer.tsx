import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Karaya Academy</h3>
            <p className="text-gray-400 mb-4">
              Platform pembelajaran modern yang menghadirkan program pendidikan berkualitas tinggi 
              untuk membantu Anda mencapai tujuan karir dan pengembangan diri.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition">
                <FaYoutube size={24} />
              </a>
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Karaya%20Academy!%20Saya%20ingin%20bertanya%20tentang%20program%20pembelajaran." 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-primary-400 transition">
                  Program Kami
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-primary-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@karaya.academy</li>
              <li>
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition flex items-center"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp: +62 812-3456-7890
                </a>
              </li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Karaya Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

