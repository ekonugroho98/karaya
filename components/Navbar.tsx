'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 inline-block">
              Karaya Academy
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link href="/" className="text-gray-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary-50">
                Beranda
              </Link>
              <Link href="/programs" className="text-gray-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary-50">
                Program
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary-50">
                Tentang Kami
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary-50">
                Kontak
              </Link>
              <Link href="/login" className="ml-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                Masuk
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Beranda
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Program
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Tentang Kami
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium">
              Kontak
            </Link>
            <Link href="/login" className="bg-primary-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center">
              Masuk
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

