'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '6281234567890' // Ganti dengan nomor WhatsApp Anda
  const message = 'Assalamualaikum, saya ingin bertanya tentang program kursus di Karaya'
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center group animate-pulse-slow hover:animate-none transform hover:scale-110"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp size={32} className="drop-shadow-lg" />
      <span className="absolute right-full mr-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl transform group-hover:translate-x-0 translate-x-2">
        💬 Chat dengan Kami
      </span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </button>
  )
}

