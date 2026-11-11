// --- 1. CONFIGURATION DATA ---
const profileData = {
    showDemoLabel: true,
    name: "Mahmoud Tarek",
    title: "Network and Security Engineer",
    email: "mahmoud.tariek7@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahm0udtarek/",
    github: "https://github.com/houda71",
    location: "Egypt",
    tagline: "Driven Engineer with hands-on FortiGate, CCNP Security, and CCNA skills, eager to apply expertise in security operations and network infrastructure.",
    summary: `<p>Electronics and Communications Engineer currently working as an <strong class="text-white font-semibold">IT Specialist at Intelcia</strong>, with practical experience in IT support, hardware and software troubleshooting, and network connectivity support.</p>
<p>I have a strong foundation in networking and network security, including TCP/IP, Routing & Switching, VLANs, VPNs, and firewall technologies. My technical background includes Cisco technologies, FortiGate Firewall, Hyper-V, VMware, and practical lab experience using GNS3, PNETLab, and Wireshark.</p>
<p>I have studied <strong class="text-white font-semibold">CCNA, CCNP Security, and FortiGate NSE 4</strong> technologies, and have foundational knowledge of security and monitoring solutions such as Wazuh, Zabbix, and Kaspersky Security Center. I also have knowledge of Windows Server and Active Directory concepts.</p>
<p>I am passionate about continuously developing my technical expertise and building my career in <strong class="text-white font-semibold">Network Engineering and Cybersecurity</strong>, with a particular interest in enterprise networking, firewall technologies, and security solutions. I enjoy learning new technologies, building practical labs, and solving technical challenges.</p>`,

    skills: [
        {
            title: "Networking & Enterprise Security",
            icon: '<svg class="w-8 h-8 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3M3 12a9 9 0 019-9m9 9h-3M3 12h3m0 0h12m-6 0h-2M4 6h16M4 18h16"></path></svg>',
            list: [
                "Network Configuration & Advanced Troubleshooting",
                "Next-Generation Firewalls & VPN Architecture (FortiGate)",
                "Routing & Switching Protocols (TCP/IP, VLANs, OSPF, EIGRP)",
                "Enterprise Network Security Design & Implementation"
            ]
        },
        {
            title: "Security Frameworks & Hardening",
            icon: '<svg class="w-8 h-8 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m-7.228 4.228A.5.5 0 0111 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-6.879l-2.929 2.93a1 1 0 01-.707.293z"></path></svg>',
            list: [
                "CIS Controls v8 Risk Assessment & Implementation",
                "Windows Server Hardening & Security Baseline Compliance",
                "Cisco Enterprise & Core Security Concepts",
                "Threat Modeling & Perimeter Defense Infrastructure"
            ]
        },
        {
            title: "Systems & Network Infrastructure Tools",
            icon: '<svg class="w-8 h-8 text-sky-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.515-1.42 2.373-1.42 2.888 0l1.737 4.795h5.05a1.5 1.5 0 01.91 2.617l-4.14 3.013 1.577 4.35a1.5 1.5 0 01-2.298 1.673L12 18.04l-3.522 2.05a1.5 1.5 0 01-2.298-1.673l1.577-4.35-4.14-3.013a1.5 1.5 0 01.91-2.617h5.05l1.737-4.795z"></path></svg>',
            list: [
                "Windows Server Administration & Active Directory (MCSA Architecture)",
                "Deep Packet Inspection & Traffic Analysis (Wireshark)",
                "Network Emulation & Topology Simulation (GNS3 / EVENG)",
                "Linux System Administration Basics"
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
            link: "https://t.me/NettTip/13",
            edition: "v1"
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
            image: "images/lab_scn_topology.jpg",
            type: "Pnet Lab",
            description: "A full-scale enterprise campus network built from scratch in PnetLab. The goal was to design a realistic, redundant infrastructure and practice how every layer works together — not just in isolation.",
            tags: ["OSPF", "HSRP", "VRRP", "LACP", "PAgP", "SD-WAN", "IPsec VPN", "FortiGate HA", "VLANs", "Inter-VLAN Routing", "DHCP", "LDAP"],
            highlights: [
                { icon: "🏗️", text: "Multi-layer design: Core / Distribution / Access" },
                { icon: "🔀", text: "VLANs 10–80 with Inter-VLAN Routing & VTP v3" },
                { icon: "📡", text: "OSPF across all layers — 84 routes learned on FortiGate" },
                { icon: "🔄", text: "HSRP & VRRP for gateway redundancy at Distribution layer" },
                { icon: "⚡", text: "LACP & PAgP EtherChannel (L2 & L3) for link aggregation" },
                { icon: "🛡️", text: "FortiGate NGFW in Active/Passive HA (FG-1 Primary, FG-2 Secondary)" },
                { icon: "🌐", text: "SD-WAN with dual ISP (ISP1 & ISP2) load balancing" },
                { icon: "🔐", text: "IPsec Site-to-Site VPN to Branch office" },
                { icon: "🧑‍💼", text: "LDAP integration with Active Directory (cybernet.com)" },
                { icon: "🚫", text: "FortiGuard URL Filtering — blocked social media (Facebook)" },
                { icon: "📋", text: "DHCP scopes for all 8 VLANs served from PDC (Windows Server)" },
            ],
            gallery: [
                { src: "images/lab_scn_topology.jpg",   caption: "Full PnetLab Network Topology" },
                { src: "images/lab_scn_fg_interfaces.jpg", caption: "FortiGate Interfaces — SD-WAN Zones & Physical Ports" },
                { src: "images/lab_scn_fg_ha.jpg",      caption: "FortiGate HA — Primary (FG-1) & Secondary (FG-2) Synchronized" },
                { src: "images/lab_scn_fg_ldap.jpg",    caption: "LDAP Integration with Active Directory (cybernet.com)" },
                { src: "images/lab_scn_fg_routing.jpg", caption: "OSPF Routing Monitor — 84 Routes on FortiGate" },
                { src: "images/lab_scn_fg_sdwan.jpg",   caption: "SD-WAN Monitor — Dual ISP Active & Up" },
                { src: "images/lab_scn_fg_ipsec.jpg",   caption: "IPsec VPN Monitor — Branch1 Tunnel Active" },
                { src: "images/lab_scn_fg_policy.jpg",  caption: "Firewall Policy — Internet, VPN In/Out, Implicit Deny" },
                { src: "images/lab_scn_fb_block.jpg",   caption: "FortiGuard URL Filtering — Facebook Blocked" },
                { src: "images/lab_scn_vpc_ping.jpg",   caption: "End-to-End Connectivity — VPC5 Pinging 192.168.90.10 via VPN" },
                { src: "images/lab_scn_dhcp.jpg",       caption: "Windows Server DHCP — Scopes for VLANs 10–80" },
                { src: "images/lab_scn_lacp.jpg",       caption: "EtherChannel Summary — LACP Po1 (SU) with Et0/0 & Et1/1" },
                { src: "images/lab_scn_vtp.jpg",        caption: "VTP v3 Status — Server Mode, 10 VLANs, Domain: cisco1" },
            ]
        },
    ],

    experience: [
        {
            role: "IT Specialist",
            company: "Intelcia",
            period: "Current Position",
            summary: "Working as an IT Specialist, providing technical support and assisting with day-to-day IT operations in a professional corporate environment.",
            responsibilities: [
                "Provide technical support and troubleshoot hardware, software, and end-user issues.",
                "Diagnose and resolve Windows operating system and application-related problems.",
                "Troubleshoot network connectivity and access-related issues.",
                "Assist users with IT-related incidents and technical requests.",
                "Support the reliability and smooth operation of end-user IT environments.",
                "Investigate technical issues and coordinate with relevant teams when escalation is required."
            ],
            skills: [
                "Windows 10/11",
                "Hardware & Software Troubleshooting",
                "IT Support & Incident Management",
                "Network Troubleshooting",
                "Microsoft Office Applications",
                "Active Directory Fundamentals"
            ]
        }
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
            year: '2026',
            title: 'Cisco CyberOps',
            institution: 'CISCO Networking Academy',
            details: 'Security Operation skills.'
        },
        {
            type: 'Certification',
            year: '2025 – In-Progress',
            title: 'FortiGate NSE4',
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
            title: 'CCNA 200-301 v1.1',
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

    setHTML('nav-name', `${profileData.name}`);
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
    setHTML('summary-content', profileData.summary);
    setText('contact-location', profileData.location);

    // --- Experience Timeline ---
    const expContainer = document.getElementById('experience-container');
    if (expContainer && profileData.experience) {
        expContainer.innerHTML = profileData.experience.map((exp, index, array) => {
            const isLast = index === array.length - 1;
            return `
                <div class="flex relative pl-8 ${!isLast ? 'border-l-2 border-sky-800' : ''} reveal">
                    <!-- Glowing timeline node -->
                    <div class="absolute w-4 h-4 rounded-full bg-sky-500 -left-[9px] top-0 border-4 border-gray-900 shadow-[0_0_12px_rgba(14,165,233,0.6)]"></div>
                    
                    <div class="flex-grow pb-12">
                        <!-- Period & Status Badge -->
                        <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span class="inline-block px-2.5 py-1 text-xs font-semibold text-sky-300 bg-sky-900/40 border border-sky-800/50 rounded">${exp.period}</span>
                            <span class="px-2 py-0.5 text-xs font-bold text-green-400 bg-green-950/60 border border-green-800/60 rounded-full inline-flex items-center gap-1.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Active
                            </span>
                        </div>

                        <!-- Role & Company -->
                        <h4 class="text-xl md:text-2xl font-bold text-white mt-1">${exp.role}</h4>
                        <p class="text-sky-400 font-semibold text-base flex items-center gap-1.5 mt-0.5">
                            <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                            ${exp.company}
                        </p>

                        <!-- Overview Summary -->
                        <p class="text-gray-300 text-sm md:text-base leading-relaxed mt-3">
                            ${exp.summary}
                        </p>

                        <!-- Key Responsibilities -->
                        <div class="mt-4">
                            <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Key Responsibilities:
                            </h5>
                            <ul class="space-y-2 text-sm text-gray-300 pl-1">
                                ${exp.responsibilities.map(resp => `
                                    <li class="flex items-start gap-2">
                                        <span class="text-sky-400 text-xs mt-1">▸</span>
                                        <span class="leading-relaxed">${resp}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Technologies & Skills -->
                        <div class="mt-5 pt-3 border-t border-gray-800/70">
                            <h5 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                                Technologies & Skills:
                            </h5>
                            <div class="flex flex-wrap gap-2">
                                ${exp.skills.map(s => `
                                    <span class="px-2.5 py-1 text-xs font-medium bg-gray-900 text-sky-300 border border-sky-800/40 rounded-lg">
                                        ${s}
                                    </span>
                                `).join('')}
                            </div>
                        </div>

                    </div>
                </div>
            `;
        }).join('');
    }

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

                const linkAttrs = isComingSoon ? 'href="javascript:void(0)" class="cursor-default group relative block h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl reveal grayscale"' : `href="${item.link}" target="_blank" class="group relative block h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-sky-500/50 transition-all duration-500 transform hover:-translate-y-2 reveal"`;

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

    // --- Rich Lab Cards with Modal Gallery ---
    const renderLabCards = (data, containerId) => {
        const container = document.getElementById(containerId);
        if (!container || !data) return;

        container.innerHTML = data.map((lab, index) => `
            <div class="group relative block h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl hover:shadow-sky-500/50 transition-all duration-500 transform hover:-translate-y-2 reveal cursor-pointer" onclick="openLabModal(${index})">
                <div class="absolute inset-0 bg-gray-900 flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 bg-gray-800 animate-pulse -z-10"></div>
                    <img src="${lab.image}" alt="${lab.title}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" onerror="this.src='https://via.placeholder.com/800x500/0f172a/0ea5e9?text=Secure+Campus+Network'">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div class="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">COMPLETED</div>
                <div class="absolute bottom-0 left-0 p-6 w-full">
                    <span class="inline-block px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded-full mb-2 shadow-lg">${lab.type}</span>
                    <h4 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">${lab.title}</h4>
                    <div class="flex flex-wrap gap-1 mb-3">
                        ${(lab.tags || []).slice(0, 5).map(t => `<span class="text-xs bg-gray-800/80 text-sky-300 px-2 py-0.5 rounded-full border border-sky-800/50">${t}</span>`).join('')}
                        ${lab.tags && lab.tags.length > 5 ? `<span class="text-xs bg-gray-800/80 text-gray-400 px-2 py-0.5 rounded-full border border-gray-700">+${lab.tags.length - 5} more</span>` : ''}
                    </div>
                    <div class="flex items-center text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        <span>View Lab Details</span>
                        <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            </div>
        `).join('');

        // --- Lab Modal Logic ---
        window._labData = data;

        window.openLabModal = function(index) {
            const lab = window._labData[index];
            if (!lab) return;
            let currentImg = 0;

            const galleryHTML = lab.gallery.map((g, i) => `
                <div class="lab-gallery-thumb cursor-pointer flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 ${i === 0 ? 'border-sky-400' : 'border-transparent'} transition-all hover:border-sky-400" onclick="switchLabImg(${i})" id="lab-thumb-${i}">
                    <img src="${g.src}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/80x56/1e293b/0ea5e9?text=img'">
                </div>
            `).join('');

            const highlightsHTML = (lab.highlights || []).map(h => `
                <div class="flex items-start gap-2 text-sm text-gray-300">
                    <span class="text-lg flex-shrink-0 leading-tight">${h.icon}</span>
                    <span>${h.text}</span>
                </div>
            `).join('');

            const tagsHTML = (lab.tags || []).map(t => `
                <span class="text-xs bg-sky-900/50 text-sky-300 px-3 py-1 rounded-full border border-sky-700/50">${t}</span>
            `).join('');

            const modal = document.createElement('div');
            modal.id = 'lab-modal';
            modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeLabModal()"></div>
                <div class="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f172a] border border-gray-700 shadow-2xl z-10">
                    <!-- Header -->
                    <div class="sticky top-0 z-20 flex items-center justify-between p-5 bg-[#0f172a]/95 backdrop-blur border-b border-gray-800">
                        <div>
                            <span class="text-xs font-bold text-sky-400 uppercase tracking-widest">${lab.type}</span>
                            <h2 class="text-2xl font-bold text-white">${lab.title}</h2>
                        </div>
                        <button onclick="closeLabModal()" class="text-gray-400 hover:text-white w-9 h-9 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors text-xl">✕</button>
                    </div>

                    <div class="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Left: Image Gallery -->
                        <div class="flex flex-col gap-3">
                            <div class="relative rounded-xl overflow-hidden bg-gray-900 h-64 md:h-80">
                                <img id="lab-main-img" src="${lab.gallery[0].src}" class="w-full h-full object-contain" onerror="this.src='https://via.placeholder.com/800x500/0f172a/0ea5e9?text=Image'">
                                <!-- Nav arrows -->
                                <button onclick="prevLabImg()" class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg transition-colors">‹</button>
                                <button onclick="nextLabImg()" class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg transition-colors">›</button>
                                <div id="lab-img-counter" class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">1 / ${lab.gallery.length}</div>
                            </div>
                            <p id="lab-img-caption" class="text-xs text-gray-400 text-center italic">${lab.gallery[0].caption}</p>
                            <!-- Thumbnails -->
                            <div class="flex gap-2 overflow-x-auto pb-1" style="scrollbar-width:thin">
                                ${galleryHTML}
                            </div>
                        </div>

                        <!-- Right: Details -->
                        <div class="flex flex-col gap-4">
                            <p class="text-gray-300 text-sm leading-relaxed">${lab.description}</p>

                            <div>
                                <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Technologies Used</h3>
                                <div class="flex flex-wrap gap-2">${tagsHTML}</div>
                            </div>

                            <div>
                                <h3 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">What I Implemented</h3>
                                <div class="grid grid-cols-1 gap-2">${highlightsHTML}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            window._labGallery = lab.gallery;
            window._labCurrentImg = 0;

            window.switchLabImg = function(i) {
                const imgs = window._labGallery;
                window._labCurrentImg = i;
                document.getElementById('lab-main-img').src = imgs[i].src;
                document.getElementById('lab-img-caption').textContent = imgs[i].caption;
                document.getElementById('lab-img-counter').textContent = `${i + 1} / ${imgs.length}`;
                document.querySelectorAll('.lab-gallery-thumb').forEach((el, idx) => {
                    el.classList.toggle('border-sky-400', idx === i);
                    el.classList.toggle('border-transparent', idx !== i);
                });
            };
            window.prevLabImg = function() {
                const len = window._labGallery.length;
                window.switchLabImg((window._labCurrentImg - 1 + len) % len);
            };
            window.nextLabImg = function() {
                const len = window._labGallery.length;
                window.switchLabImg((window._labCurrentImg + 1) % len);
            };
        };

        window.closeLabModal = function() {
            const modal = document.getElementById('lab-modal');
            if (modal) modal.remove();
            document.body.style.overflow = '';
        };

        // Keyboard navigation for modal
        document.addEventListener('keydown', function(e) {
            if (!document.getElementById('lab-modal')) return;
            if (e.key === 'Escape') window.closeLabModal();
            if (e.key === 'ArrowLeft') window.prevLabImg && window.prevLabImg();
            if (e.key === 'ArrowRight') window.nextLabImg && window.nextLabImg();
        });
    };

    renderLabCards(profileData.labs, 'labs-grid');

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
                <div class="flex gap-8 min-w-max px-2 sm:px-4 py-8 items-start">
                    ${stages.map((stage, index) => `
                        <div class="roadmap-node reveal relative" style="animation-delay: ${index * 0.1}s">
                            ${index < stages.length - 1 ? `
                                <div class="roadmap-line"></div>
                            ` : ''}
                            
                            <div class="w-[90vw] md:w-80 border-2 border-sky-600 rounded-xl shadow-lg hover:shadow-xl hover:border-sky-400 transition-all duration-300">
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

