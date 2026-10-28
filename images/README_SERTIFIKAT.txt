Petunjuk Pengelolaan Sertifikat & Kredensial
============================================
Folder ini digunakan untuk menyimpan gambar atau berkas sertifikat yang ingin Anda tampilkan di bagian "Sertifikasi" pada portofolio.

Lokasi Folder:
images/certificates/

Format Berkas yang Didukung:
- Gambar: .jpg, .jpeg, .png, .webp
- Dokumen: .pdf (dapat ditautkan melalui properti credentialUrl)

Cara Menambahkan Sertifikat:
1. Simpan foto/screenshot sertifikat Anda ke dalam folder ini (misal: cert-dicoding.jpg, cert-bnsp.png, dll).
2. Buka berkas certificates.js di direktori utama portofolio.
3. Tambahkan atau sesuaikan objek data pada array certificatesData:
   {
       id: "sertifikat-anda",
       title: "Nama Sertifikasi Anda",
       issuer: "Penerbit (misal: Dicoding / BNSP / Coursera)",
       issueDate: "2024",
       credentialId: "KODE-SERTIFIKAT-123",
       credentialUrl: "https://tautan-verifikasi.com atau images/certificates/nama-file.pdf",
       image: "images/certificates/nama-file-gambar-anda.jpg",
       category: "web", // Opsi kategori: 'web', 'data', 'cloud', 'other'
       skills: ["Skill 1", "Skill 2"],
       description: "Deskripsi singkat kompetensi yang diraih."
   }
4. Website akan otomatis menampilkan sertifikat lengkap dengan pratinjau gambar, lencana penerbit, dan pop-up modal pratinjau resolusi tinggi.
