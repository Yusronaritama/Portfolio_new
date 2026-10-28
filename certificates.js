const certificatesData = [
    {
        title: "HUAWEI ICT Academy - Artificial Intelligence and Applications",
        date: "September 2025",
        image: "images/certificates/photo HUAWEI.png"
    },
    {
        title: "Intro to Machine Learning",
        date: "2024",
        image: "images/certificates/YUSRONARITAMA UBPKARAWANG - Intro to Machine Learning.png"
    },
    {
        title: "Intermediate Machine Learning",
        date: "2024",
        image: "images/certificates/YUSRONARITAMA UBPKARAWANG - Intermediate Machine Learning.png"
    },
    {
        title: "Seminar Nasional Riset Tren Ilmu Komputer",
        date: "25 April 2024",
        image: "images/certificates/Yusronaritama_23416255201088.png"
    },
    {
        title: "Seminar Technopreneurship",
        date: "2024",
        image: "images/certificates/Sertifikat Seminar Technopreneurship.png"
    },
    {
        title: "Kuliah Umum Fakultas Ilmu Komputer",
        date: "2024",
        image: "images/certificates/SertiKuliahUmum.png"
    },
    {
        title: "Pelatihan Pengembangan Soft Skill Mahasiswa",
        date: "2024",
        image: "images/certificates/YUSRONARITAMA_SertiSoftSkill.png"
    },
    {
        title: "Sertifikasi Kompetensi Mahasiswa",
        date: "2024",
        image: "images/certificates/YUSRONARITAMA (2).png"
    }
];

// Helper: Ubah ekstensi .pdf ke .png pratinjau jika pengguna memasukkan file PDF
function resolveCertificateImage(imgSrc) {
    if (!imgSrc || imgSrc.trim() === "") return "";
    if (imgSrc.toLowerCase().endsWith(".pdf")) {
        return imgSrc.slice(0, -4) + ".png";
    }
    return imgSrc;
}

// Fallback SVG jika gambar belum tersedia
function getCertificateFallbackSvg(title) {
    return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 420' width='100%25' height='100%25'>
        <rect width='600' height='420' fill='%230B0F17' rx='16'/>
        <rect x='16' y='16' width='568' height='388' fill='none' stroke='%23334155' stroke-width='2' rx='12'/>
        <circle cx='300' cy='160' r='48' fill='%231E293B' stroke='%2364748B' stroke-width='2'/>
        <polygon points='300,130 310,150 332,152 316,166 321,188 300,176 279,188 284,166 268,152 290,150' fill='%23E2E8F0'/>
        <text x='300' y='250' font-family='sans-serif' font-weight='700' font-size='18' fill='%23FFFFFF' text-anchor='middle'>SERTIFIKAT</text>
        <text x='300' y='280' font-family='sans-serif' font-size='12' fill='%2394A3B8' text-anchor='middle'>Pratinjau Belum Tersedia</text>
    </svg>`;
}

// Render Kartu Sertifikat (Hanya Gambar, Nama Sertifikat, dan Tanggal)
function renderCertificates() {
    const container = document.getElementById("certificates-container");
    if (!container) return;

    if (!certificatesData || certificatesData.length === 0) {
        container.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-400">
                <p class="font-medium text-white">Belum ada data sertifikat.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = certificatesData.map((cert, index) => {
        const resolvedSrc = resolveCertificateImage(cert.image);
        const imgSrc = resolvedSrc && resolvedSrc.trim() !== ""
            ? resolvedSrc
            : getCertificateFallbackSvg(cert.title);

        return `
            <div class="group bg-cardbg/90 border border-slate-700/80 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col hover:-translate-y-1 cursor-pointer" onclick="openCertificateModal(${index})">
                <!-- 1. Image Preview -->
                <div class="relative aspect-[16/11] bg-slate-950 overflow-hidden border-b border-slate-800 flex items-center justify-center">
                    <img src="${imgSrc}" alt="${cert.title}" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        onerror="this.src = getCertificateFallbackSvg('${cert.title}')" />
                    
                    <!-- Hover Zoom Cue -->
                    <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-600/80 text-xs font-semibold text-white shadow-lg">
                            <svg class="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            </svg>
                            Perbesar
                        </span>
                    </div>
                </div>

                <!-- 2. Nama Sertifikat & 3. Tanggal -->
                <div class="p-5 flex flex-col justify-between flex-grow space-y-3">
                    <h4 class="text-white font-bold text-base leading-snug group-hover:text-slate-200 transition-colors line-clamp-2">
                        ${cert.title}
                    </h4>

                    <div class="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1 border-t border-slate-800/80">
                        <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span>${cert.date}</span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// Modal Preview
function openCertificateModal(index) {
    const cert = certificatesData[index];
    if (!cert) return;

    const modal = document.getElementById("cert-modal");
    const modalImg = document.getElementById("cert-modal-img");
    const modalTitle = document.getElementById("cert-modal-title");
    const modalDate = document.getElementById("cert-modal-date");

    if (!modal) return;

    const resolvedSrc = resolveCertificateImage(cert.image);
    const imgSrc = resolvedSrc && resolvedSrc.trim() !== ""
        ? resolvedSrc
        : getCertificateFallbackSvg(cert.title);

    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = cert.title;
    if (modalDate) modalDate.textContent = cert.date;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
}

function closeCertificateModal() {
    const modal = document.getElementById("cert-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
}

// Inisialisasi saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderCertificates();

    // Tutup modal jika tombol ESC ditekan
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCertificateModal();
        }
    });
});
