// --- 1. CONFIGURATION DATA ---
const profileData = {
    showDemoLabel: true,
    name: "Mahmoud Tarek",
    title: "Junior Network and Security Engineer",
    email: "mahmoud.tariek7@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahm0udtarek/",
    github: "https://github.com/houda71",
    location: "Sharqia, Egypt",
    tagline: "Driven Engineer with hands-on FortiGate, CCNP Security, and CCNA skills, eager to apply expertise in security operations and network infrastructure.",
    summary: "A recent graduated Electronics and Communications Engineer with knowledge in FortiGate Firewall (NSE4), CCNP Security, and CCNA, passionate about advancing my career in network security. With hands-on skills in configuring routers, switches, and firewalls, and proficiency in tools like Wireshark and GNS3. I am eager to contribute to innovative security operations while continuously growing my technical expertise.",

    skills: [
        {
            title: "Networking & Security",
            icon: '<svg class="w-8 h-8 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3M3 12a9 9 0 019-9m9 9h-3M3 12h3m0 0h12m-6 0h-2M4 6h16M4 18h16"></path></svg>',
            list: [
                "Configuration & Troubleshooting",
                "Firewalls & VPNs (FortiGate)",
                "Protocols: TCP/IP, VLANs, OSPF",
                "Network Security Solutions",
            ]
        },
        {
            title: "Security Frameworks",
            icon: '<svg class="w-8 h-8 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m-7.228 4.228A.5.5 0 0111 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-6.879l-2.929 2.93a1 1 0 01-.707.293z"></path></svg>',
            list: [
                "CIS Control v8 Hardening",
                "Windows Server Hardening",
                "CCNP Security Concepts",
                "CCNA Principles"
            ]
        },
        {
            title: "Operating Systems",
            icon: '<svg class="w-8 h-8 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.515-1.42 2.373-1.42 2.888 0l1.737 4.795h5.05a1.5 1.5 0 01.91 2.617l-4.14 3.013 1.577 4.35a1.5 1.5 0 01-2.298 1.673L12 18.04l-3.522 2.05a1.5 1.5 0 01-2.298-1.673l1.577-4.35-4.14-3.013a1.5 1.5 0 01.91-2.617h5.05l1.737-4.795z"></path></svg>',
            list: [
                "Windows Server Admin",
                "Wireshark Analysis",
                "GNS3 Simulation",
                "MSCA Principles",
            ]
        },
        {
            title: "Future Goals",
            icon: '<svg class="w-8 h-8 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>',
            list: [
                "Virtualization (vSphere)",
                "CCNP ENCORE",
                "Red Hat Linux",
                "EJPTv2 Certification"
            ]
        }
    ],

    educationAndCourses: [
        {
            type: 'Education',
            year: 'Jan 2019 - 2024',
            title: 'Bachelor of Engineering',
            institution: '10th of Ramadan - Higher Technology Institute',
            details: 'GPA: 2.7. Electronics and Communications.'
        },
        {
            type: 'Certification',
            year: '2025 – In-Progress',
            title: 'EJPTv2',
            institution: 'Netriders',
            details: 'Penetration testing skills.'
        },
        {
            type: 'Certification',
            year: '2025 – In-Progress',
            title: 'FortiGate FCF',
            institution: 'CPT-Nuggets',
            details: 'Firewall configuration and administration.'
        },
        {
            type: 'Certification',
            year: '2024',
            title: 'MCSA',
            institution: 'Tshoot',
            details: 'Microsoft Server administration.'
        },
        {
            type: 'Certification',
            year: '2022',
            title: 'CCNP Security',
            institution: 'Tshoot',
            details: 'Cisco security core technologies.'
        },
        {
            type: 'Certification',
            year: '2021',
            title: 'CCNAv1.1',
            institution: 'Tshoot',
            details: 'Foundational networking.'
        },
    ]
};

// --- 2. LOGIC & RENDERING ---

document.addEventListener('DOMContentLoaded', () => {

    // --- Demo Indicator ---
    if (profileData.showDemoLabel) {
        const demoContainer = document.getElementById('demo-indicator-container');
        if (demoContainer) {
            demoContainer.innerHTML = `
                <div class="fixed bottom-6 right-6 z-50 animate-bounce pointer-events-none">
                    <div class="bg-yellow-500/90 backdrop-blur text-gray-900 font-bold px-4 py-2 rounded shadow-lg border-2 border-yellow-400 flex items-center gap-2">
                        <span>🚧</span>
                        <span>DEMO</span>
                    </div>
                </div>
            `;
        }
    }

    // --- Profile Content ---
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    const setHTML = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };

    setHTML('nav-name', `${profileData.name}<span class="text-sky-500">.netsec</span>`);
    setText('hero-name', profileData.name.toUpperCase());

    // Typing Effect for Title
    const titleElement = document.getElementById('hero-title');
    if (titleElement) {
        const titleText = profileData.title;
        titleElement.textContent = "";
        let i = 0;
        function typeWriter() {
            if (i < titleText.length) {
                titleElement.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                titleElement.classList.remove('border-r-2', 'border-sky-400'); // Stop cursor blink if added
            }
        }
        typeWriter();
    }

    setHTML('hero-tagline', `<span class="font-semibold text-sky-400">Mission:</span> ${profileData.tagline}`);
    setText('summary-content', profileData.summary);
    setText('contact-location', profileData.location);

    // --- Skills Grid ---
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        skillsGrid.innerHTML = profileData.skills.map(skill => `
            <div class="glass-card p-6 rounded-xl reveal">
                ${skill.icon}
                <h4 class="text-xl font-bold mb-3 text-gray-100">${skill.title}</h4>
                <ul class="text-gray-400 space-y-2 text-sm">
                    ${skill.list.map(item => `<li class="flex items-start"><span class="mr-2 text-sky-500">›</span>${item}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // --- Education Timeline ---
    const timeline = document.getElementById('education-timeline');
    if (timeline) {
        timeline.innerHTML = profileData.educationAndCourses.map((item, index, array) => {
            const isLast = index === array.length - 1;
            return `
                <div class="flex relative pl-8 ${!isLast ? 'border-l-2 border-sky-800' : ''} reveal">
                    <div class="absolute w-4 h-4 rounded-full bg-sky-500 -left-[9px] top-0 border-4 border-gray-900 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                    <div class="flex-grow pb-10">
                        <span class="inline-block px-2 py-1 text-xs font-semibold text-sky-300 bg-sky-900/30 rounded mb-1">${item.year}</span>
                        <h4 class="text-lg font-bold text-white mt-1">${item.title}</h4>
                        <p class="text-sky-400 text-sm">${item.institution}</p>
                        <p class="text-sm text-gray-500 mt-2 italic">${item.details}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // --- Contact Links ---
    const linksContainer = document.getElementById('contact-links-container');
    if (linksContainer) {
        const linkClass = "text-gray-400 hover:text-white transition duration-300 flex items-center space-x-2 group hover:scale-105 transform";
        linksContainer.innerHTML = `
            <a href="mailto:${profileData.email}" class="${linkClass}">
                <div class="p-2 bg-gray-800 rounded-full group-hover:bg-sky-600 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-17 4v7a2 2 0 002 2h12a2 2 0 002-2v-7"></path></svg>
                </div>
                <span>Email</span>
            </a>
            <a href="${profileData.linkedin}" target="_blank" class="${linkClass}">
                <div class="p-2 bg-gray-800 rounded-full group-hover:bg-sky-600 transition">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.535-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <span>LinkedIn</span>
            </a>
            <a href="${profileData.github}" target="_blank" class="${linkClass}">
                <div class="p-2 bg-gray-800 rounded-full group-hover:bg-sky-600 transition">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.69.084-.69 1.205.086 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.303.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.196 11.196 0 013.333-.45c1.155.006 2.308.152 3.333.45 2.292-1.552 3.301-1.23 3.301-1.23.652 1.652.241 2.873.117 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.474 5.922.43.37.823 1.107.823 2.222v3.293c0 .319.192.694.8 1.056c4.764-1.587 8.201-6.085 8.201-11.387c0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <span>GitHub</span>
            </a>
        `;
    }

    // --- Scroll Animations (IntersectionObserver) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scroll for Nav
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
