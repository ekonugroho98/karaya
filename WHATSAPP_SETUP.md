# Konfigurasi WhatsApp Button

## 📱 Fitur WhatsApp yang Sudah Ditambahkan

Website Karaya Academy sekarang memiliki 3 integrasi WhatsApp:

1. **Floating WhatsApp Button** - Muncul di kanan bawah di semua halaman
2. **Footer Link** - Link WhatsApp di bagian contact info footer
3. **Social Media Icons** - Icon WhatsApp di bagian social media footer

## 🔧 Cara Mengubah Nomor WhatsApp

### 1. Floating Button

Edit file: `components/WhatsAppButton.tsx`

```typescript
const phoneNumber = '6285761123043' // Ganti dengan nomor Anda
const message = 'Halo Karaya Academy! Saya ingin bertanya tentang program pembelajaran.'
```

### 2. Footer Links

Edit file: `components/Footer.tsx`

Cari dan ganti semua link WhatsApp:

```typescript
href="https://wa.me/6285761123043?text=..."
```

## 📝 Format Nomor WhatsApp

**Format yang Benar:**
- `6285761123043` (Indonesia: 62 + nomor tanpa 0 di depan)
- `601234567890` (Malaysia: 60 + nomor)
- `6591234567` (Singapore: 65 + nomor)

**JANGAN gunakan:**
- ❌ `+6285761123043` (dengan tanda +)
- ❌ `0857-6112-3043` (dengan tanda hubung)
- ❌ `0857 6112 3043` (dengan spasi)

## 🎨 Kustomisasi Pesan

Anda bisa mengubah pesan default yang muncul saat tombol WhatsApp diklik:

```typescript
const message = 'Halo Karaya Academy! Saya ingin bertanya tentang program pembelajaran.'
```

Ganti dengan pesan sesuai keinginan Anda.

## 🎨 Kustomisasi Tampilan

### Warna Button

Edit `components/WhatsAppButton.tsx`:

```typescript
// Warna default: green-500
className="... bg-green-500 hover:bg-green-600 ..."

// Contoh custom color:
className="... bg-emerald-500 hover:bg-emerald-600 ..."
```

### Posisi Button

```typescript
// Default: bottom-6 right-6
className="fixed bottom-6 right-6 ..."

// Pindah ke kiri bawah:
className="fixed bottom-6 left-6 ..."

// Lebih tinggi:
className="fixed bottom-20 right-6 ..."
```

### Ukuran Icon

```typescript
// Default: 32
<FaWhatsapp size={32} />

// Lebih besar:
<FaWhatsapp size={40} />

// Lebih kecil:
<FaWhatsapp size={24} />
```

## ✨ Fitur Button

1. **Floating** - Selalu terlihat saat scroll
2. **Responsive** - Otomatis menyesuaikan di mobile/desktop
3. **Hover Effect** - Menampilkan tooltip "Chat dengan Kami"
4. **Smooth Animation** - Transisi yang halus
5. **High Z-Index** - Selalu di atas elemen lain

## 🧪 Testing

Untuk test button WhatsApp:

1. Jalankan development server: `npm run dev`
2. Buka browser di `http://localhost:3000`
3. Cari button hijau di kanan bawah
4. Klik button dan pastikan redirect ke WhatsApp dengan nomor yang benar
5. Test juga link WhatsApp di footer

## 📱 Behavior di Mobile vs Desktop

- **Desktop**: Membuka WhatsApp Web (`https://web.whatsapp.com`)
- **Mobile**: Membuka aplikasi WhatsApp langsung

## 🔒 Best Practices

1. Selalu gunakan nomor aktif yang bisa menerima pesan
2. Test nomor sebelum deploy ke production
3. Gunakan pesan yang professional dan jelas
4. Pastikan ada tim yang siap merespon chat WhatsApp
5. Set auto-reply di WhatsApp Business untuk jam non-operasional

## 📊 Analytics (Opsional)

Untuk tracking klik button WhatsApp, tambahkan event tracking:

```typescript
const handleClick = () => {
  // Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'click', {
      event_category: 'WhatsApp',
      event_label: 'Floating Button'
    })
  }
  
  // Original function
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}
```

## 🆘 Troubleshooting

**Button tidak muncul?**
- Pastikan `WhatsAppButton` sudah ditambahkan di `app/layout.tsx`
- Check z-index tidak tertutup elemen lain
- Clear cache browser

**Link tidak berfungsi?**
- Pastikan format nomor benar (tanpa +, -, spasi)
- Test di device lain
- Pastikan WhatsApp terinstall (untuk mobile)

**Pesan tidak muncul?**
- Periksa encoding URL dengan `encodeURIComponent()`
- Test dengan pesan yang lebih pendek

---

Dibuat dengan ❤️ untuk Karaya Academy

