'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
        ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="hover:scale-105 transition-transform duration-300 inline-block">
              <Image 
                src="/image/logo.png" 
                alt="Karaya Academy" 
                width={150} 
                height={57}
                priority
                className="h-10 w-auto"
              />
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
              className="relative z-50 p-2 text-gray-700 hover:text-primary-600 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Mobile Menu Sidebar */}
          <div className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-primary-50 to-white">
                <h2 className="text-2xl font-bold gradient-text">Menu</h2>
                <p className="text-sm text-gray-600 mt-1">Karaya Academy</p>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="space-y-2">
                  <Link 
                    href="/" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-xl">🏠</span>
                    <span className="font-medium">Beranda</span>
                    <span className="ml-auto transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  
                  <Link 
                    href="/programs" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-xl">📚</span>
                    <span className="font-medium">Program</span>
                    <span className="ml-auto transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  
                  <Link 
                    href="/about" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-xl">ℹ️</span>
                    <span className="font-medium">Tentang Kami</span>
                    <span className="ml-auto transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-xl transition-all duration-300 group"
                  >
                    <span className="text-xl">📞</span>
                    <span className="font-medium">Kontak</span>
                    <span className="ml-auto transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                  
                  {/* Divider */}
                  <div className="my-4 border-t border-gray-200"></div>
                  
                  {/* Login Button */}
                  <Link 
                    href="/login" 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <span>🔐</span>
                    <span>Masuk</span>
                  </Link>
                </nav>
                
                {/* Quick Actions */}
                <div className="mt-8 p-4 bg-gradient-to-br from-primary-50 to-purple-50 rounded-xl border border-primary-100">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">Butuh Bantuan?</h3>
                  <p className="text-xs text-gray-600 mb-3">Tim kami siap membantu Anda</p>
                  <a 
                    href="https://wa.me/6285761123043" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-green-500 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors duration-300"
                  >
                    <span>💬</span>
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>© 2025 Karaya Academy</span>
                  <div className="flex gap-3">
                    <a href="#" className="hover:text-primary-600 transition-colors">📘</a>
                    <a href="#" className="hover:text-primary-600 transition-colors">🐦</a>
                    <a href="#" className="hover:text-primary-600 transition-colors">📷</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

