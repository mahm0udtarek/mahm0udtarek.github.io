// --- 1. CONFIGURATION DATA ---
const profileData = {
    showDemoLabel: true,
    name: "Mahmoud Tarek",
    title: "Junior Network and Security Engineer",
    email: "mahmoud.tariek7@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahm0udtarek/",
    github: "https://github.com/houda71",
    location: "Egypt",
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
                "CCNP ENCORE",
                "Virtualization (vSphere)",
                "Red Hat Linux",
            ]
        }
    ],

    books: [
        {
            title: "CCNA 200-301 v1.1",
            image: "images/ccna_book.png",
            link: "https://t.me/NettTip/10",
            edition: "2nd Edition"
        },
        {
            title: "CCNP SCORE 350-701",
            image: "images/ccnp_security_book.png",
            link: "https://t.me/NettTip/6",
            edition: "v1"
        },
        {
            title: "MCSA",
            image: "images/mcsa_book.png",
            link: "#",
            edition: "v1",
            comingSoon: true
        },
        {
            title: "NSE4 – CPT Nuggets",
            image: "images/nse4_book.png",
            link: "#",
            edition: "v1",
            comingSoon: true
        }
    ],

    labs: [
        {
            title: "Secure Campus Network",
            image: "images/lab_vpn.png",
            link: "#",
            type: "GNS3 Topology"
        },

    ],

    educationAndCourses: [
        {
            type: 'Education',
            year: 'Jan 2019 - 2024',
            title: 'Bachelor of Engineering',
            institution: '10th of Ramadan - Higher Technology Institute',
            details: 'Department of Electronics and Communications.'
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
    ],

    socRoadmap: {
        title: "SOC Analyst Radmap by Mostafa Yahia",
        description: "A comprehensive learning path for aspiring SOC Analysts",
        stages: [
            {
                id: 'networking',
                title: 'Networking Fundamentals',
                subtitle: 'Study networking theory from Network+ or CCNA',
                color: 'from-blue-600 to-cyan-600',
                note: 'Do not spend excessive time - focus on theory only',
                topics: [
                    { name: 'OSI Layers', tooltip: 'Essential for understanding how network traffic flows and where security controls operate' },
                    { name: 'IP Addressing', tooltip: 'Critical for identifying attack sources and understanding network segmentation' },
                    { name: 'Ports and Protocols', tooltip: 'Know common ports to quickly identify suspicious traffic patterns' },
                    { name: 'Routing & Switching', tooltip: 'Understanding traffic paths helps in incident investigation' },
                    { name: 'Port Security', tooltip: 'First line of defense against unauthorized network access' },
                    { name: 'DNS & DHCP', tooltip: 'Often targeted in attacks - understand DNS for threat detection' },
                    { name: 'TCP vs UDP', tooltip: 'Different protocols behave differently during attacks' },
                    { name: 'ARP Table', tooltip: 'ARP poisoning is a common attack vector in internal networks' }
                ]
            },
            {
                id: 'windows',
                title: 'Windows Environment',
                subtitle: 'Enterprise Windows fundamentals',
                color: 'from-indigo-600 to-purple-600',
                note: 'Covered in the first part of MCSA',
                topics: [
                    { name: 'Active Directory Services', tooltip: 'AD is the backbone of enterprise authentication and a prime attack target' },
                    { name: 'Windows Domain Environment', tooltip: 'Understanding domains is crucial for detecting lateral movement' },
                    { name: 'Domain Controller', tooltip: 'Compromised DCs mean full network compromise' },
                    { name: 'Group Policy Objects (GPO)', tooltip: 'GPOs can be exploited for persistence and privilege escalation' }
                ]
            },
            {
                id: 'linux',
                title: 'Linux Skills',
                subtitle: 'Hands-on familiarity with Linux',
                color: 'from-purple-600 to-pink-600',
                note: 'Not mandatory for most SOC Analysts, but very helpful later',
                topics: [
                    { name: 'Basic Linux Commands', tooltip: 'Navigate and investigate Linux systems during incidents' },
                    { name: 'File Permissions', tooltip: 'Identify unauthorized access and privilege escalation attempts' },
                    { name: 'Log Files', tooltip: 'Linux logs are goldmines for forensic investigation' }
                ]
            },
            {
                id: 'security',
                title: 'Security Fundamentals',
                subtitle: 'Start after completing networking and OS basics',
                color: 'from-pink-600 to-red-600',
                resources: [
                    {
                        type: 'video',
                        title: 'Introductory Cybersecurity Series',
                        url: 'https://www.youtube.com/playlist?list=PLdUDP-atVHBpsvwINVbfbPAasnQnuCxGk',
                        description: 'Start here for security fundamentals'
                    },
                    {
                        type: 'book',
                        title: 'SANS SEC401 (Books 2 & 3)',
                        description: 'Security fundamentals from SANS'
                    },
                    {
                        type: 'book',
                        title: 'SANS SEC511 (Book 2)',
                        description: 'After SEC401, study this for deeper knowledge'
                    }
                ]
            },
            {
                id: 'incident',
                title: 'Incident Handling',
                subtitle: 'Understanding the IR lifecycle',
                color: 'from-red-600 to-orange-600',
                topics: [
                    { name: 'Detection', tooltip: 'First step: identify that an incident has occurred' },
                    { name: 'Analysis', tooltip: 'Determine scope, severity, and attack vectors' },
                    { name: 'Containment', tooltip: 'Stop the attack from spreading' },
                    { name: 'Eradication', tooltip: 'Remove the threat from the environment' },
                    { name: 'Recovery', tooltip: 'Restore systems to normal operation' },
                    { name: 'Lessons Learned', tooltip: 'Document and improve processes post-incident' }
                ],
                resources: [
                    {
                        type: 'book',
                        title: 'SANS 504H (Book 1)',
                        description: 'Comprehensive incident handling guide'
                    },
                    {
                        type: 'article',
                        title: 'Community Summary by Khaled Allam',
                        url: 'https://www.facebook.com/groups/371869175117889/permalink/493258529645619/',
                        description: 'Quick reference summary'
                    },
                    {
                        type: 'video',
                        title: 'Crash Course Series',
                        url: 'https://www.youtube.com/watch?v=Lh0bmeDQGhA&list=PL-ychzBA8c71ph1BVH26-h_SMYQnVGOaW',
                        description: 'Fast-track option if in a hurry'
                    },
                    {
                        type: 'video',
                        title: 'Incident Handling Deep Dive',
                        url: 'https://www.youtube.com/watch?v=laG15T1oRyI',
                        description: 'Single comprehensive video'
                    }
                ]
            },
            {
                id: 'siem',
                title: 'SIEM Solutions',
                subtitle: 'Log collection, correlation, and alerting',
                color: 'from-orange-600 to-yellow-600',
                note: 'IBM QRadar is one of the most widely used SIEM solutions in Egypt',
                description: 'SIEM platforms are the central nervous system of SOC operations',
                topics: [
                    { name: 'Log Collection', tooltip: 'Aggregate logs from all sources into one platform' },
                    { name: 'Correlation Rules', tooltip: 'Detect attack patterns across multiple log sources' },
                    { name: 'Alerts', tooltip: 'Automated notifications for suspicious activity' },
                    { name: 'Dashboards', tooltip: 'Visual representation of security posture' }
                ],
                resources: [
                    {
                        type: 'video',
                        title: 'IBM QRadar Training Series',
                        url: 'https://www.youtube.com/watch?v=lcgWgavJ-vc&list=PL-ychzBA8c71hZHAMIxkbMBXWaZ3EHxlg',
                        description: 'Complete QRadar hands-on training'
                    }
                ]
            },
            {
                id: 'investigation',
                title: 'SOC Investigation',
                subtitle: 'Before and during SOC work',
                color: 'from-yellow-600 to-green-600',
                note: 'Useful before starting work and while working as a SOC Analyst',
                topics: [
                    { name: 'Alert Triage', tooltip: 'Prioritize and categorize incoming alerts efficiently' },
                    { name: 'Incident Investigation', tooltip: 'Deep dive into alerts to determine true positives' },
                    { name: 'Attack Timeline Reconstruction', tooltip: 'Build a chronological view of attacker actions' },
                    { name: 'Decision Making', tooltip: 'Make critical calls during active incidents' }
                ],
                resources: [
                    {
                        type: 'video',
                        title: 'SOC Investigation Course',
                        url: 'https://www.youtube.com/playlist?list=PLdUDP-atVHBoDae43tcUZnW1YsjoPJRvP',
                        description: 'Practical investigation techniques and workflows'
                    }
                ]
            },
            {
                id: 'practice-labs',
                title: 'Practice Labs & Resources',
                subtitle: 'Hands-on Rooms & Challenges',
                color: 'from-emerald-600 to-teal-600',
                note: 'Note: There is no specific order to follow (مفيش ترتيب معين تمشي عليه)',
                description: 'A curated collection of free rooms and challenges to apply your knowledge.',
                topics: [
                    { name: 'TryHackMe Rooms', tooltip: 'Covering Linux, Networking, SOC, Forensics, and more' },
                    { name: 'Blue Team Labs', tooltip: 'Defensive security challenges' },
                    { name: 'Cyber Defenders', tooltip: 'Blue team CTFs and practice' },
                    { name: 'Let\'s Defend', tooltip: 'Investigation simulation platform' },
                    { name: 'Splunk & QRadar', tooltip: 'SIEM specific training and challenges' }
                ],
                resources: [
                    // Fundamentals
                    { type: 'link', title: 'Linux Fundamentals Part 1', url: 'https://tryhackme.com/r/room/linuxfundamentalspart1' },
                    { type: 'link', title: '[Easy] Intro to Networking', url: 'https://tryhackme.com/room/introtonetworking' },
                    { type: 'link', title: '[Easy] What is Networking', url: 'https://tryhackme.com/r/room/whatisnetworking' },
                    { type: 'link', title: '[Easy] HTTP in Detail', url: 'https://tryhackme.com/r/room/httpindetail' },
                    { type: 'link', title: '[Easy] DNS in Detail', url: 'https://tryhackme.com/r/room/dnsindetail' },
                    { type: 'link', title: '[Mid] Firmware (rfirmware)', url: 'https://tryhackme.com/room/rfirmware' },

                    // SOC Mentality
                    { type: 'link', title: '[Easy] Pyramid of Pain', url: 'https://tryhackme.com/r/room/pyramidofpainax' },
                    { type: 'link', title: '[Easy] Cyber Kill Chain', url: 'https://tryhackme.com/r/room/cyberkillchainzmt' },

                    // Log & SIEM
                    { type: 'link', title: '[Easy] Intro to Logs', url: 'https://tryhackme.com/r/room/introtologs' },
                    { type: 'link', title: '[Easy] Servidae', url: 'https://tryhackme.com/r/room/servidae' },
                    { type: 'link', title: '[Easy] Intro to SIEM', url: 'https://tryhackme.com/r/room/introtosiem' },
                    { type: 'link', title: '[Mid] Splunk: Exploring SPL', url: 'https://tryhackme.com/r/room/splunkexploringspl' },

                    // Threat Hunting & Intel
                    { type: 'link', title: '[Easy] Intro to Threat Hunting', url: 'https://tryhackme.com/r/room/introductiontothreathunting' },
                    { type: 'link', title: '[Mid] Cryptography Intro', url: 'https://tryhackme.com/r/room/cryptographyintro' },
                    { type: 'link', title: '[Easy] Cyber Threat Intel', url: 'https://tryhackme.com/r/room/cyberthreatintel' },
                    { type: 'link', title: '[Easy] Threat Intel Tools', url: 'https://tryhackme.com/r/room/threatinteltools' },
                    { type: 'link', title: '[Mid] Threat Intel for SOC', url: 'https://tryhackme.com/r/room/threatintelligenceforsoc' },

                    // OSINT & Forensics
                    { type: 'link', title: '[Easy] OhSINT', url: 'https://tryhackme.com/r/room/ohsint' },
                    { type: 'link', title: '[Easy] Intro DFIR', url: 'https://tryhackme.com/r/room/introductoryroomdfirmodule' },
                    { type: 'link', title: '[Easy] Memory Forensics', url: 'https://tryhackme.com/r/room/memoryforensics' },
                    { type: 'link', title: '[Easy] Forensic Imaging', url: 'https://tryhackme.com/r/room/forensicimaging' },
                    { type: 'link', title: '[Mid] Windows Forensics 1', url: 'https://tryhackme.com/r/room/windowsforensics1' },

                    // Malware & Tools
                    { type: 'link', title: '[Easy] History of Malware', url: 'https://tryhackme.com/r/room/historyofmalware' },
                    { type: 'link', title: '[Easy] Intro Detection Eng.', url: 'https://tryhackme.com/r/room/introtodetectionengineering' },
                    { type: 'link', title: '[Easy] Malware Introductory', url: 'https://tryhackme.com/r/room/malmalintroductory' },
                    { type: 'link', title: '[Easy] OWASP Top 10', url: 'https://tryhackme.com/r/room/owasptop10' },
                    { type: 'link', title: '[Easy] Further Nmap', url: 'https://tryhackme.com/r/room/furthernmap' },
                    { type: 'link', title: '[Easy] Hydra', url: 'https://tryhackme.com/r/room/hydra' },
                    { type: 'link', title: '[Mid] Snort', url: 'https://tryhackme.com/r/room/snort' },
                    { type: 'link', title: '[Mid] KAPE', url: 'https://tryhackme.com/r/room/kape' },
                    { type: 'link', title: '[Mid] Wireshark (TShark)', url: 'https://tryhackme.com/r/room/tshark' },

                    // Platforms & Challenges
                    { type: 'link', title: 'Let\'s Defend (Practice Free)', url: 'https://www.letsdefend.io/' },
                    { type: 'link', title: 'Cyber Defenders', url: 'https://cyberdefenders.org/' },
                    { type: 'link', title: 'Blue Team Labs', url: 'https://blueteamlabs.online/' },
                    { type: 'link', title: 'PicoCTF', url: 'https://picoctf.org/' },

                    // SIEM Specific
                    { type: 'link', title: 'Splunk Free Training', url: 'https://www.splunk.com/en_us/training.html' },
                    { type: 'link', title: 'Splunk BOTS v1', url: 'https://github.com/splunk/botsv1' },
                    { type: 'link', title: 'Splunk BOTS v2', url: 'https://github.com/splunk/botsv2' },
                    { type: 'link', title: 'Splunk BOTS v3', url: 'https://github.com/splunk/botsv3' },
                    { type: 'link', title: 'IBM QRadar Community', url: 'https://community.ibm.com/community/user/security/communities/community-home/recent-community-blogs?communitykey=d3969e06-96eb-4a11-a9c1-52e24dc52096&tab=recentcommunityblogsdashboard' },
                    { type: 'link', title: 'QRadar 101 (CyberDefenders)', url: 'https://cyberdefenders.org/blueteam-ctf-challenges/qradar101/' }
                ]
            }
        ]
    }
};

// --- 2. LOGIC & RENDERING ---

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Logic ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';

            // Toggle aria-expanded
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

            // Toggle menu visibility
            if (isExpanded) {
                mobileMenu.classList.remove('open');
                mobileMenu.classList.add('hidden');
            } else {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('open');
            }
        });

        // Close menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('open');
                mobileMenu.classList.add('hidden');
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuButton.getAttribute('aria-expanded') === 'true') {
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.remove('open');
                mobileMenu.classList.add('hidden');
                mobileMenuButton.focus(); // Return focus to button
            }
        });
    }

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

    // --- Guide Books & Labs Rendering ---
    const renderCards = (data, containerId, isBook = true) => {
        const container = document.getElementById(containerId);
        if (container && data) {
            container.innerHTML = data.map(item => {
                const isComingSoon = item.comingSoon;
                // Use a default image if not present (handled by user creating images later or placeholders)
                // For now assuming images exist or broken image icon will show.
                // Using a generic placeholder if image path might be missing.
                const imgPath = item.image;

                const linkAttrs = isComingSoon ? 'href="javascript:void(0)" class="cursor-default group relative block h-96 rounded-2xl overflow-hidden shadow-2xl reveal grayscale"' : `href="${item.link}" target="_blank" class="group relative block h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-sky-500/50 transition-all duration-500 transform hover:-translate-y-2 reveal"`;

                const buttonContent = isComingSoon
                    ? `<span class="text-yellow-500 font-bold flex items-center"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Coming Soon</span>`
                    : `<div class="flex items-center text-gray-300 text-sm font-medium group-hover:text-white transition-colors"><span>${isBook ? 'Download Guide' : 'View Lab Topology'}</span><svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div>`;

                const imageClass = isComingSoon ? "w-full h-full object-cover opacity-50" : "w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700";
                const label = isBook ? item.edition : item.type;

                return `
                <a ${linkAttrs}>
                    <div class="absolute inset-0 bg-gray-900 flex items-center justify-center overflow-hidden">
                        <!-- Placeholder for missing images to look better -->
                         <div class="absolute inset-0 bg-gray-800 animate-pulse -z-10"></div>
                        <img src="${imgPath}" alt="${item.title}" class="${imageClass}" onerror="this.src='https://via.placeholder.com/400x600/1e293b/0ea5e9?text=${encodeURIComponent(item.title)}'">
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                    ${isComingSoon ? '<div class="absolute top-4 right-4 bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">COMING SOON</div>' : ''}
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <span class="inline-block px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded-full mb-3 shadow-lg">${label}</span>
                        <h4 class="text-2xl font-bold text-white mb-2 ${!isComingSoon ? 'group-hover:text-sky-400 transition-colors' : ''}">${item.title}</h4>
                        ${buttonContent}
                    </div>
                </a>
                `;
            }).join('');
        }
    };

    renderCards(profileData.books, 'books-grid', true);
    renderCards(profileData.labs, 'labs-grid', false);

    // --- Simple Horizontal SOC Roadmap ---
    const renderSOCRoadmap = (data, containerId) => {
        const container = document.getElementById(containerId);
        if (!container || !data) return;

        const { title, description, stages } = data;

        container.innerHTML = `
            <div class="text-center mb-8 reveal">
                <h3 class="text-3xl font-bold text-white mb-2">${title}</h3>
                <p class="text-gray-400">${description}</p>
            </div>
            
            <div class="overflow-x-auto pb-8">
                <div class="flex gap-8 min-w-max px-4 py-8 items-start">
                    ${stages.map((stage, index) => `
                        <div class="roadmap-node reveal relative" style="animation-delay: ${index * 0.1}s">
                            ${index < stages.length - 1 ? `
                                <div class="roadmap-line"></div>
                            ` : ''}
                            
                            <div class="w-80 border-2 border-sky-600 rounded-xl shadow-lg hover:shadow-xl hover:border-sky-400 transition-all duration-300">
                                <div class="bg-gray-900 rounded-xl p-6">
                                    <div class="text-center mb-4">
                                        <div class="w-10 h-10 mx-auto mb-3 rounded-full bg-sky-600 flex items-center justify-center font-bold text-white text-lg">
                                            ${index + 1}
                                        </div>
                                        <h4 class="text-xl font-bold text-white mb-2">${stage.title}</h4>
                                        <p class="text-gray-400 text-sm">${stage.subtitle}</p>
                                    </div>
                                    
                                    ${stage.note ? `
                                        <div class="mb-4 p-2 bg-sky-500/10 border border-sky-500/30 rounded-lg text-sky-400 text-xs text-center">
                                             ${stage.note}
                                        </div>
                                    ` : ''}
                                    
                                    ${stage.description ? `
                                        <div class="mb-4 text-gray-300 text-sm text-center italic">
                                            ${stage.description}
                                        </div>
                                    ` : ''}
                                    
                                    ${stage.topics ? `
                                        <div class="mb-4">
                                            <div class="flex items-center justify-between cursor-pointer topic-section-header" onclick="toggleTopics('${stage.id}')">
                                                <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wide">Topics</h5>
                                                <span class="topic-chevron text-gray-400 transition-transform">▼</span>
                                            </div>
                                            <div class="topics-content hidden mt-2" data-topics="${stage.id}">
                                                <div class="topics-scroll max-h-48 overflow-y-auto pr-2">
                                                    <ul class="space-y-0.5 text-sm text-gray-300">
                                                        ${stage.topics.map((topic, idx) => `
                                                            <li class="topic-item-hover flex items-start gap-2 p-1 rounded-lg transition-all duration-200 relative group">
                                                                <span class="text-sky-400 mt-0.5">•</span>
                                                                <span>${topic.name}</span>
                                                                <div class="topic-tooltip hidden group-hover:block absolute left-0 bottom-full mb-2 w-64 p-3 bg-gray-800 border border-sky-500/30 rounded-lg shadow-xl z-50 text-xs">
                                                                    ${topic.tooltip}
                                                                    <div class="absolute top-full left-6 -mt-1 w-3 h-3 bg-gray-800 border-r border-b border-sky-500/30 transform rotate-45"></div>
                                                                </div>
                                                            </li>
                                                        `).join('')}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ` : ''}
                                    
                                    ${stage.resources ? `
                                        <div>
                                            <h5 class="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Resources</h5>
                                            <div class="resources-scroll max-h-40 overflow-y-auto pr-2">
                                                <div class="space-y-2">
                                                    ${stage.resources.map(resource => `
                                                    ${resource.url ? `
                                                        <a href="${resource.url}" target="_blank" rel="noopener noreferrer" 
                                                           class="block p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition text-sky-400 hover:text-sky-300 text-sm">
                                                            <div class="flex items-center gap-2">
                                                                <span>${resource.type === 'video' ? '' : resource.type === 'book' ? '' : ''}</span>
                                                                <span class="flex-1 truncate">${resource.title}</span>
                                                                <span class="text-xs"></span>
                                                            </div>
                                                        </a>
                                                    ` : `
                                                        <div class="p-2 bg-gray-800/50 rounded-lg text-sm text-gray-300">
                                                            <div class="flex items-center gap-2">
                                                                <span>${resource.type === 'book' ? '' : ''}</span>
                                                                <span class="flex-1 truncate">${resource.title}</span>
                                                            </div>
                                                        </div>
                                                    `}
                                                    `).join('')}
                                                </div>
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="text-center text-gray-500 text-sm mt-4">
                <span class="text-sky-400"></span> Scroll horizontally to explore the complete roadmap
            </div>
        `;
    };

    renderSOCRoadmap(profileData.socRoadmap, 'soc-roadmap-container');

    // Toggle topics visibility
    window.toggleTopics = (stageId) => {
        const content = document.querySelector(`[data-topics="${stageId}"]`);
        const header = content?.previousElementSibling;
        const chevron = header?.querySelector('.topic-chevron');

        if (content && chevron) {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                chevron.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                chevron.style.transform = 'rotate(0deg)';
            }
        }
    };


    // --- Slider & Toggle Logic ---
    const sliderTrack = document.getElementById('slider-track');
    const btnBooks = document.getElementById('btn-books');
    const btnLabs = document.getElementById('btn-labs');
    const btnRoadmap = document.getElementById('btn-roadmap');

    if (sliderTrack && btnBooks && btnLabs && btnRoadmap) {
        let currentView = 'books';

        const updateView = (view) => {
            currentView = view;

            // Reset all buttons
            [btnBooks, btnLabs, btnRoadmap].forEach(btn => {
                btn.classList.remove('toggle-active');
                btn.classList.add('toggle-inactive');
            });

            // Update slider position and active button
            if (view === 'books') {
                sliderTrack.style.transform = 'translateX(0%)';
                btnBooks.classList.add('toggle-active');
                btnBooks.classList.remove('toggle-inactive');
            } else if (view === 'labs') {
                sliderTrack.style.transform = 'translateX(-33.333%)';
                btnLabs.classList.add('toggle-active');
                btnLabs.classList.remove('toggle-inactive');
            } else if (view === 'roadmap') {
                sliderTrack.style.transform = 'translateX(-66.666%)';
                btnRoadmap.classList.add('toggle-active');
                btnRoadmap.classList.remove('toggle-inactive');
            }
        };

        // Initialize styles
        updateView('books');

        btnBooks.addEventListener('click', () => updateView('books'));
        btnLabs.addEventListener('click', () => updateView('labs'));
        btnRoadmap.addEventListener('click', () => updateView('roadmap'));

        // Swipe Functionality
        let touchStartX = 0;
        let touchEndX = 0;
        const sliderContainer = document.getElementById('slider-container'); // Correct ID from index.html

        if (sliderContainer) {
            sliderContainer.addEventListener('touchstart', e => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            sliderContainer.addEventListener('touchend', e => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });

            const handleSwipe = () => {
                const swipeThreshold = 50;
                if (touchEndX < touchStartX - swipeThreshold) {
                    // Swiped Left -> Go to next view
                    if (currentView === 'books') updateView('labs');
                    else if (currentView === 'labs') updateView('roadmap');
                }
                if (touchEndX > touchStartX + swipeThreshold) {
                    // Swiped Right -> Go to previous view
                    if (currentView === 'roadmap') updateView('labs');
                    else if (currentView === 'labs') updateView('books');
                }
            }
        }
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

