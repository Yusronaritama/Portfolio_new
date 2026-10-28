/**
 * projects.js - Data & Komponen Modular Proyek GitHub
 * Portofolio Yusron Aritama
 * 
 * Pengaturan Gambar Preview:
 * - Proyek dengan gambar dapat memuat hingga 3 gambar (berupa slider/carousel interaktif).
 * - Simpan file gambar Anda ke dalam folder: images/projects/
 * - Format yang didukung: .png, .jpg, .jpeg, .webp
 * - Proyek tanpa gambar diatur dengan `images: []`, sehingga otomatis menampilkan preview default.
 */

const projectsData = [
    {
        id: "gorentall",
        title: "GoRentall - Aplikasi Sewa Kendaraan",
        repoUrl: "https://github.com/Yusronaritama/FinalProjectV5.git",
        // 3 Gambar screenshot/mockup lokal:
        images: [
            "images/projects/Gorentall/image1.png"

        ],
        badge: "Mobile App",
        statusText: "Ready App",
        statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/80",
        tech: ["Ionic", "Angular", "TypeScript", "Capacitor"],
        // Preview Default / Fallback jika file gambar belum tersedia di folder:
        renderLiveUI: () => `
            <div class="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 h-64 p-4 flex items-center justify-between overflow-hidden">
                <div class="z-10 pl-2 space-y-2">
                    <div class="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center">
                        <span>GoRent</span>
                        <span class="border-2 border-white rounded-full px-2 py-0.5 ml-1 text-xl sm:text-2xl font-bold">all</span>
                    </div>
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-emerald-400/40 text-[9px] text-emerald-300 font-mono">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Aplikasi Siap Digunakan
                    </div>
                    <p class="text-[10px] text-emerald-100/80 max-w-[140px] leading-tight">
                        Rental mobil & motor online dengan pelacakan armada otomatis.
                    </p>
                </div>

                <div class="w-28 sm:w-32 bg-slate-950 rounded-2xl p-1.5 shadow-2xl border-2 border-slate-700/80 z-10 flex-shrink-0 transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                    <div class="bg-[#0f172a] rounded-xl overflow-hidden text-[8px] font-sans flex flex-col h-48 border border-slate-800">
                        <div class="bg-black text-slate-400 px-2 py-1 flex justify-between items-center text-[7px]">
                            <span>10:24</span>
                            <div class="flex items-center gap-1">
                                <span class="w-1 h-1 rounded-full bg-emerald-400"></span>
                                <span class="text-[6px]">4G</span>
                            </div>
                        </div>
                        <div class="bg-emerald-600 text-white font-bold py-1 px-2 text-center text-[9px] tracking-wide">
                            GoRentall App
                        </div>
                        <div class="p-2 bg-slate-900 m-1.5 rounded-lg border border-slate-800 text-center">
                            <div class="w-full h-11 bg-slate-800 rounded flex items-center justify-center text-white mb-1 overflow-hidden">
                                <svg class="w-8 h-8 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                                </svg>
                            </div>
                            <div class="text-[7.5px] text-white font-bold truncate">Toyota Fortuner 4x4</div>
                            <div class="text-[6.5px] text-emerald-400 font-mono font-semibold">Rp 450.000 / Hari</div>
                        </div>
                        <div class="px-2 mt-auto pb-1.5">
                            <div class="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-1 rounded text-center text-[7px] shadow-sm">
                                Sewa Sekarang
                            </div>
                        </div>
                        <div class="bg-black text-slate-400 py-1 px-3 flex justify-between border-t border-slate-800 text-[8px]">
                            <span class="text-emerald-400">🏠</span>
                            <span>🚗</span>
                            <span>👤</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "aksaya-resort",
        title: "Aksaya Resort - Web Reservasi & Dashboard Hotel",
        repoUrl: "https://github.com/Yusronaritama/Reservasi-HotelV2.git",
        // 3 Gambar screenshot/mockup lokal:
        images: [],
        badge: "Web Reservasi",
        statusText: "Live Admin",
        statusColor: "text-slate-300 bg-slate-800/80 border-slate-700/80",
        tech: ["PHP Native", "MySQL", "CRUD Admin", "Bootstrap"],
        // Preview Default / Fallback jika file gambar belum tersedia di folder:
        renderLiveUI: () => `
            <div class="relative bg-slate-900 h-64 p-4 flex flex-col justify-between overflow-hidden font-sans">
                <div class="flex justify-between items-center text-xs pb-1.5 border-b border-slate-800">
                    <span class="font-bold text-slate-300 flex items-center gap-1.5 text-xs">
                        <span>🏨</span> Aksaya Resort & Villa
                    </span>
                    <span class="text-[9px] font-mono text-slate-300 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        Admin Live
                    </span>
                </div>

                <div class="bg-slate-950/90 rounded-xl p-3 border border-slate-800 space-y-2 text-xs shadow-inner">
                    <div class="flex justify-between items-center text-[10px] pb-1.5 border-b border-slate-800/80">
                        <span class="text-slate-300 font-medium">Kamar Deluxe Ocean:</span>
                        <span class="text-emerald-400 font-bold font-mono">Tersedia (18 Unit)</span>
                    </div>
                    <div class="flex justify-between items-center text-[10px] pb-1.5 border-b border-slate-800/80">
                        <span class="text-slate-300 font-medium">Villa Private Pool:</span>
                        <span class="text-slate-300 font-bold font-mono">Terisi (5 Unit)</span>
                    </div>
                    <div class="flex justify-between items-center text-[10px]">
                        <span class="text-slate-400">Validasi Check-in:</span>
                        <span class="text-slate-200 font-mono text-[9px] bg-slate-800 px-1.5 py-0.5 rounded">Otomatis via MySQL</span>
                    </div>
                </div>

                <div class="pt-1 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400 font-mono">
                    <span class="text-emerald-400 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Sistem Reservasi Aktif
                    </span>
                    <span>PHP & MySQL CRUD</span>
                </div>
            </div>
        `
    },
    {
        id: "warerex",
        title: "WAREREX - Warehouse Management System",
        repoUrl: "https://github.com/Yusronaritama/warehouse.git",
        // 3 Gambar screenshot/mockup lokal:
        images: [
            "images/projects/WAREREX/image1.png",
            "images/projects/WAREREX/image2.png",
        ],
        badge: "Warehouse System",
        statusText: "WMS Live",
        statusColor: "text-slate-300 bg-slate-800/80 border-slate-700/80",
        tech: ["PHP", "MySQL", "Inventory Tracking", "Bootstrap"],
        // Preview Default / Fallback jika file gambar belum tersedia di folder:
        renderLiveUI: () => `
            <div class="relative bg-slate-900 h-64 p-3.5 flex flex-col justify-between overflow-hidden font-sans text-slate-200">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-1.5 text-xs font-bold text-white">
                        <span class="text-slate-300">📦</span>
                        <span>WAREREX Warehouse</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full text-[8px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                        WMS Online
                    </span>
                </div>

                <div class="grid grid-cols-3 gap-2">
                    <div class="bg-slate-800/90 rounded-lg p-2 border border-slate-700/60 shadow-sm">
                        <div class="text-[7.5px] font-medium text-slate-400 truncate">Total Stok SKU</div>
                        <div class="text-[9.5px] font-bold text-slate-200 font-mono mt-0.5">2.310 Item</div>
                    </div>
                    <div class="bg-slate-800/90 rounded-lg p-2 border border-slate-700/60 shadow-sm">
                        <div class="text-[7.5px] font-medium text-slate-400 truncate">Gudang A (Inbound)</div>
                        <div class="text-[9.5px] font-bold text-emerald-400 font-mono mt-0.5">94% Kapasitas</div>
                    </div>
                    <div class="bg-slate-800/90 rounded-lg p-2 border border-slate-700/60 shadow-sm">
                        <div class="text-[7.5px] font-medium text-slate-400 truncate">Gudang B (Outbound)</div>
                        <div class="text-[9.5px] font-bold text-cyan-400 font-mono mt-0.5">68% Kapasitas</div>
                    </div>
                </div>

                <div class="bg-slate-950/80 rounded-lg border border-slate-800 p-2 shadow-inner">
                    <div class="flex items-center justify-between text-[8px] text-slate-400 mb-1">
                        <span class="font-bold text-slate-200">Aktivitas Pergudangan Terkini:</span>
                        <span class="text-slate-300 font-mono">Rak B-04 / Pallet #18</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-[7.5px] text-slate-400">
                        <span class="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-300 font-mono">SKU-WRX-890</span>
                        <span class="text-emerald-400 font-semibold font-mono">+120 Unit Inbound</span>
                        <span class="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded ml-auto font-mono text-[7px] border border-slate-700">Verified</span>
                    </div>
                </div>

                <div class="pt-1 border-t border-slate-800/80 flex items-center justify-between text-[8px] text-slate-400 font-mono">
                    <span class="text-emerald-400 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Audit Mutasi Barang Otomatis
                    </span>
                    <span>PHP & MySQL DB</span>
                </div>
            </div>
        `
    },
    {
        id: "pmb-ubpkarawang",
        title: "PMB UBP Karawang - Sistem Admisi & Server Core",
        repoUrl: "https://github.com/Yusronaritama/Marketing.New.git",
        // Proyek tanpa gambar (Menggunakan Tampilan Preview Default):
        images: ['images/projects/PMB UBPKARAWANG/image1.png',
            'images/projects/PMB UBPKARAWANG/image2.png',
            'images/projects/PMB UBPKARAWANG/image3.png'],
        badge: "Masih Berjalan",
        statusText: "Masih Berjalan",
        statusColor: "text-slate-300 bg-slate-800/80 border-slate-700/80",
        tech: ["Node.js", "Vue.js", "Laravel", "MySQL Query Opt", "Server Security", "Database Core", "Bootstrap", "API Integrasi", "Payment Integration",

        ],
        // Tampilan Preview Default:
        renderLiveUI: () => `
            <div class="relative bg-black h-64 p-4 flex flex-col justify-between overflow-hidden font-mono text-left">
                <div class="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div class="flex items-center gap-1.5">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    </div>
                    <span class="text-[9px] text-slate-400">pmb.ubpkarawang.ac.id : live monitor</span>
                </div>

                <div class="text-[9.5px] text-slate-300 space-y-1.5 py-1">
                    <p class="text-slate-300">$ mysql -u root -p pmb_academic</p>
                    <p class="text-slate-400">&gt; OPTIMIZE TABLE pmb_registrations;</p>
                    <p class="text-emerald-400 font-semibold">&gt; Status: OK (Query latency reduced 42%)</p>
                    <p class="text-slate-400">&gt; Validating live admission form endpoints...</p>
                    <p class="text-slate-300">&gt; Pendaftar Gelombang Aktif: 1.240 Calon Mahasiswa</p>
                    <p class="text-cyan-400">&gt; Connection pool: 120/120 connection healthy</p>
                </div>

                <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
                    <span class="text-slate-300 font-semibold flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></span>
                        Masih Berjalan (Live Server PMB)
                    </span>
                    <span class="font-mono text-slate-400">Uptime: 99.98%</span>
                </div>
            </div>
        `
    },
    {
        id: "kkn-wanajaya",
        title: "Company Profile KKN Desa Wanajaya - Portal Web & GIS",
        repoUrl: "https://github.com/Yusronaritama/Web-kkn-wanajaya.git",
        // 3 Gambar screenshot/mockup lokal:
        images: [
            "images/projects/KKN_DESAWANAJAYA/image1.png",
            "images/projects/KKN_DESAWANAJAYA/image2.png",
            "images/projects/KKN_DESAWANAJAYA/image3.png",
            "images/projects/KKN_DESAWANAJAYA/image4.png",
            "images/projects/KKN_DESAWANAJAYA/image5.png",
        ],
        badge: "Company Profile",
        statusText: "Portal KKN",
        statusColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/80",
        tech: ["Laravel", "Vue.js", "Leaflet.js", "Tailwind CSS", "GeoJSON"],
        // Preview Default / Fallback jika file gambar belum tersedia di folder:
        renderLiveUI: () => `
            <div class="relative bg-slate-950 h-64 p-4 flex flex-col justify-between overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:14px_14px]"></div>
                
                <svg class="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 300 200">
                    <polygon points="40,50 120,30 180,90 140,160 50,140" fill="#475569" stroke="#94a3b8" stroke-width="1.5" />
                    <polygon points="180,90 260,70 280,140 210,170 140,160" fill="#10b981" stroke="#34d399" stroke-width="1.5" />
                </svg>

                <div class="z-10 flex justify-between items-start">
                    <span class="px-2.5 py-1 rounded-md text-[9px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/80 flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse"></span>
                        Company Profile KKN Live
                    </span>
                    <span class="text-[9px] font-mono text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                        Desa Wanajaya
                    </span>
                </div>

                <div class="z-10 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-700/80 space-y-1.5 shadow-xl">
                    <div class="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                        <svg class="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Portal Desa & Direktori Potensi UMKM</span>
                    </div>
                    <p class="text-[10px] text-slate-300 leading-relaxed">
                        Sistem company profile desa KKN dengan pemetaan interaktif batas wilayah dusun, profil aparatur, dan potensi UMKM lokal.
                    </p>
                    <div class="flex items-center gap-2 pt-1 text-[8.5px] font-mono text-slate-400">
                        <span class="text-emerald-400">● 14 Titik UMKM</span>
                        <span>● 4 Dusun Terdata</span>
                    </div>
                </div>

                <div class="z-10 flex justify-center gap-2">
                    <span class="text-[8.5px] font-mono text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/80">Layer Batas Wilayah</span>
                    <span class="text-[8.5px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">Layer UMKM Warga</span>
                </div>
            </div>
        `
    },
    {
        id: "manajemen-barang",
        title: "Sistem Manajemen Barang & Inventaris",
        repoUrl: "https://github.com/Yusronaritama/manajemen_barang.git",
        // Proyek tanpa gambar (Menggunakan Tampilan Preview Default):
        images: [
            "images/projects/manajemen_barang/image1.png",
            "images/projects/manajemen_barang/image2.png",
            "images/projects/manajemen_barang/image3.png",
        ],
        badge: "Belum Masuk Prod",
        statusText: "Belum Masuk Prod",
        statusColor: "text-slate-300 bg-slate-800/80 border-slate-700/80",
        tech: ["Larevel", "MySQL", "Inventory CRUD", "Staging"],
        // Tampilan Preview Default:
        renderLiveUI: () => `
            <div class="relative bg-slate-900 h-64 p-3.5 flex flex-col justify-between overflow-hidden font-sans text-slate-200">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-1.5 text-xs font-bold text-white">
                        <span>📋</span>
                        <span>Manajemen Barang</span>
                    </div>
                    <span class="px-2 py-0.5 rounded-full text-[8px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/80 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse"></span>
                        Belum Masuk Prod (Staging)
                    </span>
                </div>

                <div class="space-y-1.5">
                    <div class="bg-slate-950/80 rounded-lg p-2 border border-slate-800 text-[8px] flex items-center justify-between">
                        <div>
                            <div class="font-bold text-white">Monitor LED 24 Inch (Asset Kantor)</div>
                            <div class="text-slate-400 text-[7px]">Kode: AST-MTR-01 | Lokasi: Ruang IT</div>
                        </div>
                        <div class="text-right">
                            <span class="bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-semibold">Stok: 42 Unit</span>
                        </div>
                    </div>

                    <div class="bg-slate-950/80 rounded-lg p-2 border border-slate-800 text-[8px] flex items-center justify-between">
                        <div>
                            <div class="font-bold text-white">Kabel UTP Cat6 (Perlengkapan)</div>
                            <div class="text-slate-400 text-[7px]">Peringatan: Stok Di Bawah Minimum</div>
                        </div>
                        <div class="text-right">
                            <span class="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono font-semibold border border-slate-700">Stok: 3 Roll</span>
                        </div>
                    </div>
                </div>

                <div class="bg-slate-950/90 rounded-lg border border-slate-800 p-2 flex items-center justify-between">
                    <div class="text-[7.5px] text-slate-400">
                        <span class="text-slate-200 font-semibold">+ Catat Barang Masuk/Keluar</span>
                    </div>
                    <span class="bg-slate-200 text-slate-950 font-bold px-2 py-0.5 rounded text-[7.5px]">Simpan Transaksi</span>
                </div>

                <div class="pt-1 border-t border-slate-800/80 flex items-center justify-between text-[8px] text-slate-400 font-mono">
                    <span class="text-slate-300 flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        Tahap Uji Coba CRUD (Pre-Production)
                    </span>
                    <span>PHP & MySQL</span>
                </div>
            </div>
        `
    }
];

// State indeks slide aktif per proyek
const sliderStates = {};

/**
 * Berpindah ke slide sebelumnya / berikutnya
 */
function changeSlide(projectId, step) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !project.images || project.images.length <= 1) return;

    if (sliderStates[projectId] === undefined) sliderStates[projectId] = 0;
    const total = project.images.length;
    let newIndex = sliderStates[projectId] + step;
    if (newIndex >= total) newIndex = 0;
    if (newIndex < 0) newIndex = total - 1;

    goToSlide(projectId, newIndex);
}

/**
 * Berpindah langsung ke indeks slide tertentu
 */
function goToSlide(projectId, index) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !project.images) return;

    sliderStates[projectId] = index;
    const track = document.getElementById(`track-${projectId}`);
    const counter = document.getElementById(`counter-${projectId}`);

    if (track) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (counter) {
        counter.textContent = `${index + 1}/${project.images.length}`;
    }

    // Perbarui tampilan titik navigasi (dots)
    project.images.forEach((_, idx) => {
        const dot = document.getElementById(`dot-${projectId}-${idx}`);
        if (dot) {
            if (idx === index) {
                dot.className = "w-4 h-2 rounded-full transition-all bg-slate-300";
            } else {
                dot.className = "w-2 h-2 rounded-full transition-all bg-white/40 hover:bg-white/80";
            }
        }
    });
}

/**
 * Fallback penanganan jika file gambar belum dimasukkan ke folder images/projects
 */
function handleImageError(imgElement, projectId) {
    const track = document.getElementById(`track-${projectId}`);
    const fallback = document.getElementById(`fallback-${projectId}`);
    const navOverlay = document.getElementById(`nav-overlay-${projectId}`);
    if (track && fallback) {
        track.style.display = "none";
        fallback.classList.remove("hidden");
    }
    if (navOverlay) {
        navOverlay.style.display = "none";
    }
}

/**
 * Fungsi Render Kartu Proyek Otomatis
 * Mendukung slider 3 gambar untuk proyek yang memiliki gambar,
 * dan tampilan default untuk 2 proyek yang tidak memiliki gambar.
 */
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projectsData.map(project => {
        const displayUrl = project.repoUrl
            ? project.repoUrl.replace('https://', '').replace('.git', '')
            : 'github.com/Yusronaritama';

        const hasImages = project.images && project.images.length > 0;

        // Render preview: Slider 3 Gambar jika hasImages=true, atau Default Preview jika hasImages=false
        let previewContent = '';

        if (hasImages) {
            previewContent = `
                <div class="relative h-64 overflow-hidden bg-slate-900 group/slider select-none">
                    <!-- Track Gambar Slider -->
                    <div id="track-${project.id}" class="flex h-full transition-transform duration-300 ease-out" style="transform: translateX(0%);">
                        ${project.images.map((imgSrc, idx) => `
                            <div class="w-full h-full flex-shrink-0 relative bg-slate-950 flex items-center justify-center">
                                <img src="${imgSrc}" alt="${project.title} screenshot ${idx + 1}" 
                                     class="w-full h-full object-cover object-top" 
                                     loading="lazy" 
                                     onerror="handleImageError(this, '${project.id}')" />
                            </div>
                        `).join('')}
                    </div>

                    <!-- Fallback Preview Otomatis jika file gambar belum diletakkan di folder -->
                    <div id="fallback-${project.id}" class="hidden absolute inset-0 w-full h-full">
                        ${project.renderLiveUI()}
                    </div>

                    <!-- Elemen Navigasi Slider (Tombol Panah & Titik Navigasi) -->
                    <div id="nav-overlay-${project.id}">
                        <!-- Tombol Panah Kiri -->
                        <button type="button" 
                                onclick="event.preventDefault(); event.stopPropagation(); changeSlide('${project.id}', -1)"
                                aria-label="Slide sebelumnya"
                                class="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-950/80 hover:bg-slate-200 hover:text-slate-950 text-white flex items-center justify-center text-xs opacity-0 group-hover/slider:opacity-100 transition-all border border-slate-700/80 shadow-lg z-20">
                            &#10094;
                        </button>

                        <!-- Tombol Panah Kanan -->
                        <button type="button" 
                                onclick="event.preventDefault(); event.stopPropagation(); changeSlide('${project.id}', 1)"
                                aria-label="Slide selanjutnya"
                                class="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-950/80 hover:bg-slate-200 hover:text-slate-950 text-white flex items-center justify-center text-xs opacity-0 group-hover/slider:opacity-100 transition-all border border-slate-700/80 shadow-lg z-20">
                            &#10095;
                        </button>

                        <!-- Indikator Jumlah Foto (Top Right) -->
                        <div class="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[9px] font-mono text-slate-300 border border-slate-800 z-10 flex items-center gap-1 shadow-md">
                            <span>📸</span>
                            <span id="counter-${project.id}">1/${project.images.length}</span>
                        </div>

                        <!-- 3 Titik Navigasi Slider (Bottom Center) -->
                        <div class="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-slate-800/80">
                            ${project.images.map((_, idx) => `
                                <button type="button" 
                                        id="dot-${project.id}-${idx}"
                                        onclick="event.preventDefault(); event.stopPropagation(); goToSlide('${project.id}', ${idx})"
                                        class="w-2 h-2 rounded-full transition-all ${idx === 0 ? 'bg-slate-300 w-4' : 'bg-white/40 hover:bg-white/80'}"
                                        aria-label="Ke slide ${idx + 1}"></button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Tampilan Default untuk proyek tanpa gambar
            previewContent = `
                <div class="relative h-64 overflow-hidden bg-slate-900">
                    ${project.renderLiveUI()}
                </div>
            `;
        }

        const techTagsHtml = project.tech.map(t => `
            <span class="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/80">
                ${t}
            </span>
        `).join('');

        return `
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" 
               class="group bg-[#172030] rounded-2xl overflow-hidden border border-slate-700/60 hover:border-slate-500/60 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer">
                
                <!-- Browser Header Bar (Menampilkan URL GitHub Langsung) -->
                <div class="bg-[#121824] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
                    <!-- Mac-style Window Controls -->
                    <div class="flex items-center gap-1.5">
                        <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-slate-500/80"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    </div>
                    
                    <!-- URL Address Bar (Tarik langsung dari project.repoUrl) -->
                    <div class="bg-slate-900/90 text-slate-300 text-[10px] font-mono px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1.5 max-w-[170px] sm:max-w-[220px] truncate shadow-inner">
                        <span class="text-emerald-400 text-[9px]">🔒</span>
                        <span class="truncate text-slate-300">${displayUrl}</span>
                    </div>

                    <!-- Status Indicator Badge -->
                    <span class="inline-flex items-center gap-1 text-[9px] font-mono ${project.statusColor} border px-2 py-0.5 rounded-full flex-shrink-0">
                        <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                        ${project.statusText}
                    </span>
                </div>

                <!-- Tampilan Preview Utama Proyek (Slider 3 Gambar atau Tampilan Default) -->
                ${previewContent}

                <!-- Bar Judul Bawah & Tautan GitHub Langsung -->
                <div class="bg-cardheader px-5 py-4 border-t border-slate-700/60 mt-auto flex items-center justify-between">
                    <div class="min-w-0 mr-2">
                        <h4 class="text-white font-semibold text-base tracking-tight truncate group-hover:text-white transition-colors">
                            ${project.title}
                        </h4>
                        <div class="flex flex-wrap gap-1 mt-1.5">
                            ${techTagsHtml}
                        </div>
                    </div>
                    <span class="inline-flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-white font-mono font-medium opacity-90 group-hover:opacity-100 transition-all flex-shrink-0 ml-1">
                        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                        <span>GitHub ↗</span>
                    </span>
                </div>
            </a>
        `;
    }).join('');
}

// Jalankan render otomatis saat DOM siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderProjects);
} else {
    renderProjects();
}
