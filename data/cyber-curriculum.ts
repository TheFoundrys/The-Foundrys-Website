export const cyberCurriculum = {
    duration: "3 Years (6 Semesters)",
    years: [
        {
            title: "YEAR 1: FOUNDATION PHASE",
            subtitle: "\"The Builder\"",
            goal: "Mastering the machine. From kernel internals to network packets, building the bedrock of offensive and defensive capabilities.",
            semesters: [
                {
                    id: "sem1",
                    title: "Semester 1: Build & Secure",
                    theme: "Systems, Networks, and Low-Level Architecture",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Systems Programming (C/C++ Memory Management)",
                                "Linux Internals & Kernel Architecture",
                                "Network Engineering (TCP/IP, DNS, HTTP/S)",
                                "Discrete Mathematics for Cryptography",
                                "Computer Architecture & Low-Level Operations",
                                "Operating System Fundamentals",
                                "Introduction to Security Architecture"
                            ]
                        },
                        {
                            category: "Value Added Module (Mindset)",
                            items: [
                                "The Hacker Mindset: Psychology of Security",
                                "History of Cyber Warfare (Stuxnet to SolarWinds)",
                                "Ethics in Cyber Security"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "Command Line Ninja (Bash Scripting & Automation)",
                                "Virtualization & Sandbox Environments"
                            ]
                        },
                        {
                            category: "Skill Enhancement Module",
                            items: [
                                "Python for Security Professionals",
                                "Technical Documentation & Reporting"
                            ]
                        },
                        {
                            category: "Elective Module",
                            items: [
                                "Advanced Algebra for Crypto",
                                "Hardware Security Basics"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 1: \"The Stealth Chat\"",
                        task: "Build a secure, end-to-end encrypted messaging application using socket programming.",
                        outcome: "Socket Programming, E2EE Implementation, Data Interception Defense."
                    }
                },
                {
                    id: "sem2",
                    title: "Semester 2: Attack & Defend",
                    theme: "Crypto, Web, and Applied Security",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Applied Cryptography (AES, RSA, ECC)",
                                "Web Security Architecture (OWASP Top 10)",
                                "Operating System Security (ACLs, SELinux)",
                                "Database Security (SQL & NoSQL Hardening)",
                                "Secure Coding Practices (Memory Safety)",
                                "Introduction to Rust for Security",
                                "Network Defense Fundamentals"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "Cyber Law: GDPR & IT Act",
                                "Digital Rights & Privacy",
                                "Decision Making in Incident Response"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "CTF Tooling Mastery (Burp Suite, Metasploit)",
                                "Wireshark & Packet Analysis"
                            ]
                        },
                        {
                            category: "Skill Enhancement Module",
                            items: [
                                "Open Source Intelligence (OSINT) Research",
                                "Professional Communication for Pentesters"
                            ]
                        },
                        {
                            category: "Elective Module",
                            items: [
                                "Advanced SQL Injection",
                                "Mobile Security Fundamentals"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 2: \"The Vault\"",
                        task: "Develop a secure password manager and a corresponding cracking tool to test its strength.",
                        outcome: "Secure Storage Design, Hashing Algorithms, Brute-force Scripting."
                    }
                }
            ]
        },
        {
            title: "YEAR 2: GROWTH PHASE",
            subtitle: "\"The Breaker\"",
            goal: "Deep dive into exploitation and advanced defense. Analyzing malware, maneuvering networks, and securing AI.",
            semesters: [
                {
                    id: "sem3",
                    title: "Semester 3: Analyze & Evade",
                    theme: "Reverse Engineering & Advanced Defense",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Reverse Engineering (x86 Assembly, Ghidra)",
                                "Binary Exploitation (Buffer Overflows, ROP)",
                                "Malware Analysis (Static & Dynamic)",
                                "Advanced Network Defense (IDS/IPS Configuration)",
                                "Digital Forensics (Disk & Memory)",
                                "Threat Hunting Methodologies",
                                "System Hardening & Compliance"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "Threat Intelligence (MITRE ATT&CK Framework)",
                                "Advanced Persistent Threats (APT) Case Studies"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "Fuzzing Methodologies (AFL++)",
                                "Debugging & Disassembly"
                            ]
                        },
                        {
                            category: "Skill Enhancement Module",
                            items: [
                                "Exploit Writing & Reporting",
                                "Crisis Management in Security"
                            ]
                        },
                        {
                            category: "Elective Module",
                            items: [
                                "Wireless Security",
                                "Cloud Security Fundamentals"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 3: \"The Polymorphic Engine\"",
                        task: "Create a polymorphic engine to test AV evasion techniques in a controlled sandbox.",
                        outcome: "Malware Signatures, Code Mutation, Behavioral Analysis."
                    }
                },
                {
                    id: "sem4",
                    title: "Semester 4: Generate & Detect",
                    theme: "AI Security & Adversarial Machine Learning",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "Machine Learning Foundations for Security",
                                "AI for Defense (Anomaly Detection)",
                                "Adversarial Machine Learning (Evasion Attacks)",
                                "Data Poisoning & Backdoor Attacks",
                                "Model Inversion & Extraction",
                                "Neural Network Security",
                                "AI-Based Threat Detection"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "Reading Research: Adversarial Examples",
                                "AI Ethics & Safety Alignment",
                                "Cognitive Bias in AI Systems"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "ML Security Libraries (ART, CleverHans)",
                                "Tensor Analysis for Security"
                            ]
                        },
                        {
                            category: "Skill Enhancement Module",
                            items: [
                                "Research Paper Deconstruction",
                                "AI Risk Assessment Documentation"
                            ]
                        },
                        {
                            category: "Elective Module",
                            items: [
                                "Computer Vision Security",
                                "NLP Security Basics"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 4: \"The DeepFake Detector\"",
                        task: "Train a GAN to generate DeepFakes and build a detection model to identify them.",
                        outcome: "GANs, Adversarial Training, Model Robustness Testing."
                    }
                }
            ]
        },
        {
            title: "YEAR 3: SCALE PHASE",
            subtitle: "\"The Architect\"",
            goal: "Securing the future. Large Language Models, Quantum Cryptography, and Global Impact.",
            semesters: [
                {
                    id: "sem5",
                    title: "Semester 5: Govern & Protect",
                    theme: "LLM Security & Next-Gen Tech",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "LLM Architecture & Vulnerabilities",
                                "Prompt Engineering & Injection Attacks",
                                "Indirect Prompt Injection Strategies",
                                "Privacy Preserving AI (Differential Privacy)",
                                "Federated Learning Security",
                                "Homomorphic Encryption",
                                "AI Governance (NIST RMF)"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "The Future of AI Regulation",
                                "Managing AI Supply Chain Risks"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "Vector Database Security",
                                "API Security for LLMs (JWT, Rate Limiting)"
                            ]
                        },
                        {
                            category: "Skill Enhancement Module",
                            items: [
                                "Security Auditing for AI Models",
                                "Stakeholder Negotiation for AI Safety"
                            ]
                        },
                        {
                            category: "Elective Module",
                            items: [
                                "Multi-Modal Model Security",
                                "AI in Fintech Security"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 5: \"LLM Firewall\"",
                        task: "Build a guardrail system to intercept queries and prevent malicious prompt injections.",
                        outcome: "Prompt Interception, Malicious Intent Classification, Attack Blocking."
                    }
                },
                {
                    id: "sem6",
                    title: "Semester 6: Scale & Impact",
                    theme: "Red Teaming, Strategy, and The Capstone",
                    modules: [
                        {
                            category: "Discipline Specific Modules",
                            items: [
                                "AI Red Teaming Methodologies",
                                "Secure MLOps (CI/CD for ML)",
                                "Advanced Adversarial Simulation",
                                "Security of Agents & Autonomous Systems",
                                "Quantum Cryptography Basics",
                                "Blockchain Security (Smart Contracts)",
                                "Strategic AI Defense"
                            ]
                        },
                        {
                            category: "Value Added Module",
                            items: [
                                "Founder Fundamentals (Cyber Startups)",
                                "IP Strategy for Security Tools"
                            ]
                        },
                        {
                            category: "Ability Enhancement Module",
                            items: [
                                "Automated Red Teaming Tools",
                                "Large Scale Vulnerability Scanning"
                            ]
                        },
                        {
                            category: "Skill Enhancement Module",
                            items: [
                                "Career Readiness: The Security Interview",
                                "Public Speaking: Presenting Vulnerabilities"
                            ]
                        },
                        {
                            category: "Elective Module",
                            items: [
                                "Zero Trust Architecture",
                                "Bio-hacking & Medical Security"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 6: \"The Capstone\"",
                        task: "Track A: Startup Launch (Security Product) OR Track B: Research Thesis.",
                        outcome: "Product/Research Development, Market/Academic Validation."
                    }
                }
            ]
        }
    ]
};
