/**
 * skills.js - Data & Komponen Partisi Keahlian & AI Tools
 * Portofolio Yusron Aritama
 */

// 1. Data Keahlian (Tech Stack)
const skillsData = [
    {
        name: "HTML",
        category: "frontend",
        role: "Frontend",
        icon: "devicon-html5-plain colored"
    },
    {
        name: "CSS",
        category: "frontend",
        role: "Frontend",
        icon: "devicon-css3-plain colored"
    },
    {
        name: "JavaScript",
        category: "frontend",
        role: "Language",
        icon: "devicon-javascript-plain colored"
    },
    {
        name: "PHP",
        category: "backend",
        role: "Backend",
        icon: "devicon-php-plain colored"
    },
    {
        name: "Node.js",
        category: "backend",
        role: "Runtime",
        icon: "devicon-nodejs-plain colored"
    },
    {
        name: "MySQL",
        category: "backend",
        role: "Database",
        icon: "devicon-mysql-original colored"
    },
    {
        name: "Laravel",
        category: "backend",
        role: "Framework",
        icon: "devicon-laravel-original colored"
    },
    {
        name: "Vue.js",
        category: "frontend",
        role: "Frontend",
        icon: "devicon-vuejs-plain colored"
    },
    {
        name: "Tailwind",
        category: "frontend",
        role: "Styling",
        icon: "devicon-tailwindcss-original colored"
    },
    {
        name: "Bootstrap",
        category: "frontend",
        role: "UI Library",
        icon: "devicon-bootstrap-plain colored"
    },
    {
        name: "Angular",
        category: "frontend",
        role: "Framework",
        icon: "devicon-angularjs-plain colored"
    },
    {
        name: "Ionic",
        category: "tools",
        role: "Mobile",
        icon: "devicon-ionic-original colored"
    },
    {
        name: "Python",
        category: "backend",
        role: "Scripting",
        icon: "devicon-python-plain colored"
    },
    {
        name: "Git",
        category: "tools",
        role: "Version Control",
        icon: "devicon-git-plain colored"
    },
    {
        name: "Figma",
        category: "tools",
        role: "UI Design",
        icon: "devicon-figma-plain colored"
    },
    {
        name: "Canva",
        category: "tools",
        role: "Graphic Design",
        icon: "devicon-canva-plain colored"
    }
];

// 2. Data AI-Assisted Development Tools
const aiToolsData = [
    {
        name: "Google Gemini",
        role: "Riset & Solusi Arsitektur",
        badge: "Multimodal LLM",
        desc: "Eksplorasi arsitektur sistem web, perancangan skema data spasial/GIS, dan analisis referensi dokumentasi multimodal.",
        tags: ["System Design", "GIS Spatial", "Data Analytics"],
        stat: "Arsitektur & Riset",
        color: {
            badge: "bg-indigo-950/80 text-indigo-300 border-indigo-700/60",
            iconContainer: "bg-indigo-950/60 border border-indigo-500/40 text-indigo-400 group-hover:border-indigo-400 group-hover:shadow-[0_0_22px_rgba(99,102,241,0.4)]",
            glowBorder: "bg-gradient-to-br from-indigo-500/40 via-blue-500/20 to-transparent",
            cornerGlow: "bg-indigo-500/20",
            dot: "bg-indigo-400 animate-pulse",
            roleText: "text-indigo-300",
            statColor: "text-indigo-300"
        },
        svg: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
              </svg>`
    },
    {
        name: "ChatGPT",
        role: "Logika & Dokumentasi",
        badge: "Reasoning Engine",
        desc: "Sintesis algoritma penanganan data, optimasi sintaks query MySQL server PMB, dan perancangan dokumentasi REST API.",
        tags: ["Algorithm", "SQL Tuning", "API Schemas"],
        stat: "Query & Algoritma",
        color: {
            badge: "bg-emerald-950/80 text-emerald-300 border-emerald-700/60",
            iconContainer: "bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_22px_rgba(16,185,129,0.4)]",
            glowBorder: "bg-gradient-to-br from-emerald-500/40 via-teal-500/20 to-transparent",
            cornerGlow: "bg-emerald-500/20",
            dot: "bg-emerald-400 animate-pulse",
            roleText: "text-emerald-300",
            statColor: "text-emerald-300"
        },
        svg: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.28 9.38a5.98 5.98 0 0 0-.5-4.85 6.06 6.06 0 0 0-5.83-3.1 6.04 6.04 0 0 0-4.66 2.18 6.05 6.05 0 0 0-7.85 2.5 6.05 6.05 0 0 0 .54 6.64 6.04 6.04 0 0 0-.53 4.85 6.06 6.06 0 0 0 5.83 3.1 6.04 6.04 0 0 0 4.67-2.18 6.05 6.05 0 0 0 7.84-2.5 6.05 6.05 0 0 0-.51-6.64Zm-8.73 11.23a4.54 4.54 0 0 1-2.92-1.07l.15-.08 4.84-2.8a.78.78 0 0 0 .39-.68v-6.84l2.06 1.19a.07.07 0 0 1 .04.05v5.82a4.57 4.57 0 0 1-4.56 4.41Zm-8.47-3.9a4.53 4.53 0 0 1-.58-3.07l.15.09 4.84 2.8a.77.77 0 0 0 .78 0l5.92-3.42v2.38a.07.07 0 0 1-.03.06l-5.04 2.91a4.56 4.56 0 0 1-6.04-1.75ZM3.53 7.85A4.54 4.54 0 0 1 5.87 5.8v5.7a.78.78 0 0 0 .39.68l5.92 3.42-2.06 1.19a.07.07 0 0 1-.07 0L5 13.88a4.57 4.57 0 0 1-1.47-6.03Zm13.2-1.28-5.92 3.42-2.06-1.19a.07.07 0 0 1-.04-.06V2.92a4.56 4.56 0 0 1 7.48-.9l-.15.09-4.84 2.8a.77.77 0 0 0-.39.68v2.34l5.92-3.42a.07.07 0 0 1 .08.06v2.38ZM18.9 12a.78.78 0 0 0-.39-.68l-5.92-3.42 2.06-1.19a.07.07 0 0 1 .07 0l5.04 2.91a4.57 4.57 0 0 1-1.47 6.03 4.54 4.54 0 0 1-2.34 2.05v-5.7Zm2.04-3.56a4.53 4.53 0 0 1 .58 3.07l-.15-.09-4.84-2.8a.77.77 0 0 0-.78 0L9.83 12.04V9.66a.07.07 0 0 1 .03-.06l5.04-2.91a4.56 4.56 0 0 1 6.04 1.75Z"/>
              </svg>`
    },
    {
        name: "Claude",
        role: "Refactoring & Code Review",
        badge: "Clean Code",
        desc: "Pemeriksaan standar clean code Laravel & Vue.js, eliminasi duplikasi kode, dan investigasi mendalam akar masalah bug.",
        tags: ["Deep Refactor", "Clean Code", "Security Audit"],
        stat: "Code Review & Quality",
        color: {
            badge: "bg-amber-950/80 text-amber-300 border-amber-700/60",
            iconContainer: "bg-amber-950/60 border border-amber-500/40 text-amber-400 group-hover:border-amber-400 group-hover:shadow-[0_0_22px_rgba(245,158,11,0.4)]",
            glowBorder: "bg-gradient-to-br from-amber-500/40 via-orange-500/20 to-transparent",
            cornerGlow: "bg-amber-500/20",
            dot: "bg-amber-400 animate-pulse",
            roleText: "text-amber-300",
            statColor: "text-amber-300"
        },
        svg: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v4.6l3.25-3.26a1.5 1.5 0 1 1 2.12 2.12L15.6 10.2h4.6a1.5 1.5 0 0 1 0 3h-4.6l3.26 3.25a1.5 1.5 0 0 1-2.12 2.12L13.5 15.3v4.6a1.5 1.5 0 0 1-3 0v-4.6l-3.25 3.26a1.5 1.5 0 0 1-2.12-2.12L8.4 13.2H3.8a1.5 1.5 0 0 1 0-3h4.6L5.13 6.96a1.5 1.5 0 0 1 2.12-2.12L10.5 8.1V3.5A1.5 1.5 0 0 1 12 2z"/>
              </svg>`
    },
    {
        name: "Antigravity IDE",
        role: "AI Agentic Development",
        badge: "Agentic Studio",
        desc: "Pair-programming otonom berbasis agentic workspace untuk modifikasi multi-file simultan dan perancangan UI presisi.",
        tags: ["Autonomous Pair", "Multi-file Coding", "Rapid Dev"],
        stat: "Agentic Coding",
        color: {
            badge: "bg-cyan-950/80 text-cyan-300 border-cyan-700/60",
            iconContainer: "bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_22px_rgba(6,182,212,0.4)]",
            glowBorder: "bg-gradient-to-br from-cyan-500/40 via-sky-500/20 to-transparent",
            cornerGlow: "bg-cyan-500/20",
            dot: "bg-cyan-400 animate-pulse",
            roleText: "text-cyan-300",
            statColor: "text-cyan-300"
        },
        svg: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>`
    }
];

// 3. Fungsi Render Kartu Keahlian
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skillsData.map(skill => `
        <div class="skill-item group w-32 sm:w-36 md:w-40 flex flex-col items-center justify-center py-7 px-3 bg-darkcharcoal rounded-2xl border border-slate-800 hover:border-slate-500/60 hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(148,163,184,0.12)] transition-all duration-300" data-category="${skill.category}">
            <i class="${skill.icon} text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"></i>
            <span class="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">${skill.name}</span>
            <span class="text-[10px] font-mono text-slate-400 mt-1 uppercase">${skill.role}</span>
        </div>
    `).join('');
}

// 4. Fungsi Render Kartu AI Tools
function renderAITools() {
    const container = document.getElementById('ai-tools-container');
    if (!container) return;

    container.innerHTML = aiToolsData.map(tool => `
        <div class="group relative rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-2">
            <!-- Dynamic Gradient Glow Border on Hover -->
            <div class="absolute -inset-0.5 rounded-2xl ${tool.color.glowBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none"></div>

            <!-- Card Inner Body -->
            <div class="relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#131B28]/95 border border-slate-800/90 group-hover:border-slate-600 transition-colors duration-300 shadow-xl shadow-black/40 overflow-hidden">
                <!-- Background Ambient Corner Tint -->
                <div class="absolute top-0 right-0 w-32 h-32 ${tool.color.cornerGlow} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>

                <!-- Top Row: Icon & Category Tag -->
                <div>
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl ${tool.color.iconContainer} flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                            ${tool.svg}
                        </div>
                        <span class="text-[10px] font-mono px-2.5 py-1 rounded-full border ${tool.color.badge}">
                            ${tool.badge}
                        </span>
                    </div>

                    <!-- Title & Role -->
                    <div class="space-y-1">
                        <div class="flex items-center gap-2">
                            <h5 class="text-base sm:text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                                ${tool.name}
                            </h5>
                            <span class="w-1.5 h-1.5 rounded-full ${tool.color.dot}"></span>
                        </div>
                        <p class="text-xs font-mono font-medium ${tool.color.roleText}">
                            ${tool.role}
                        </p>
                    </div>

                    <!-- Description -->
                    <p class="text-xs text-slate-300 leading-relaxed mt-3">
                        ${tool.desc}
                    </p>
                </div>

                <!-- Bottom Tags & Synergy Metric -->
                <div class="pt-4 mt-4 border-t border-slate-800/70 space-y-2.5">
                    <div class="flex flex-wrap gap-1.5">
                        ${tool.tags.map(tag => `
                            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-700/60">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                        <span class="text-[10px] text-slate-400">Pemanfaatan:</span>
                        <span class="font-semibold ${tool.color.statColor}">${tool.stat}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// 5. Fungsi Filter Kategori Keahlian
function filterSkills(category, btnElement) {
    const allItems = document.querySelectorAll('.skill-item');
    const allTabs = document.querySelectorAll('.skill-tab');

    // Update style tab aktif
    allTabs.forEach(tab => {
        tab.className = 'skill-tab px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60 transition-all focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none';
    });
    if (btnElement) {
        btnElement.className = 'skill-tab active-tab px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 text-slate-950 shadow-md shadow-white/10 transition-all focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none';
    }

    // Filter elemen
    allItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
            item.classList.remove('hidden-skill');
        } else {
            item.classList.add('hidden-skill');
        }
    });
}

// Jalankan render otomatis saat dokumen siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderSkills();
        renderAITools();
    });
} else {
    renderSkills();
    renderAITools();
}
