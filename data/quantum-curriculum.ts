export const quantumCurriculum = {
    title: "4-Week Quantum Accelerator",
    description: "From Linear Algebra to Quantum Hardware in 30 Days.",
    weeks: [
        {
            number: 1,
            title: "What is Quantum Computing?",
            focus: "Mathematical postulates, quantum logic, and basic circuit design using Python/Qiskit.",
            outcomes: ["Calculus", "Linear Algebra", "Qiskit", "Superposition"],
            modules: [
                {
                    title: "Module 1: Mathematical Framework",
                    topics: [
                        "Postulates of Quantum Mechanics: Deep dive into state space, unitary evolution, and projective measurement.",
                        "Linear Algebra for Quantum: Mastery of Hilbert spaces, eigenvectors, spectral theorem, and Dirac notation (Bra-ket).",
                        "LMS Practical: Hands-on Python exercises focused on complex matrix multiplication and state vector simulation."
                    ]
                },
                {
                    title: "Module 2: Qubits and Quantum Gates",
                    topics: [
                        "The Qubit: Bloch sphere visualization, physical interpretation of Superposition, and Bell State Entanglement.",
                        "Quantum Gates: Comprehensive study of single-qubit (H, X, Y, Z, S, T) and multi-qubit control gates (CNOT, SWAP).",
                        "Reversible Logic: Transitioning from classical Boolean logic to reversible Toffoli and Fredkin gates."
                    ]
                },
                {
                    title: "Module 3: Basic Algorithms",
                    topics: [
                        "Introduction to Quantum Algorithms: Step-by-step derivation of Deutsch-Jozsa and Grover’s Search complexities.",
                        "LMS Practical: Build, simulate, and debug a Bell State circuit and Teleportation protocol in Qiskit."
                    ]
                }
            ]
        },
        {
            number: 2,
            title: "Quantum Communication (Secure Connections)",
            focus: "Secure communication protocols and the physics of information transfer.",
            outcomes: ["QKD Protocols", "BB84", "Entanglement", "Post-Quantum Crypto"],
            modules: [
                {
                    title: "Module 1: Quantum Information Theory",
                    topics: [
                        "No-Cloning Theorem: Mathematical proof and its profound implications for classical copying vs quantum transmission.",
                        "Quantum Teleportation: Detailed protocol analysis for transferring quantum states using pre-shared entanglement."
                    ]
                },
                {
                    title: "Module 2: Cryptography Protocols",
                    topics: [
                        "Quantum Key Distribution (QKD): Security proofs for BB84, E91 (Ekert), and B92 protocols against eavesdropping.",
                        "Post-Quantum Cryptography: Analyzing threats to RSA/ECC and exploring lattice-based cryptography candidates."
                    ]
                },
                {
                    title: "Module 3: Optical Systems",
                    topics: [
                        "Polarization Optics: Manipulating photon states with waveplates, beam splitters, and interferometers.",
                        "LMS Practical: Simulating the complete BB84 QKD key exchange and error correction steps in Python."
                    ]
                }
            ]
        },
        {
            number: 3,
            title: "Quantum Sensing (Seeing the Invisible)",
            focus: "Precision measurement using quantum phenomena.",
            outcomes: ["Heisenberg Limit", "LIGO Physics", "Magnetometry", "QuTiP Modeling"],
            modules: [
                {
                    title: "Module 1: Fundamentals of Sensing",
                    topics: [
                        "Measurement Sensitivity: Overcoming the Standard Quantum Limit (SQL) to reach the fundamental Heisenberg Limit.",
                        "Squeezed Light: Generation and application of squeezed states to enhance precision in interferometers (e.g., LIGO)."
                    ]
                },
                {
                    title: "Module 2: Applications",
                    topics: [
                        "Atomic Clocks: Operating principles of Cesium fountains and Optical Lattice clocks for GPS and relativistic geodesy.",
                        "Magnetometry: Using NV centers in diamond for nano-scale magnetic field detection in biological systems.",
                        "Quantum Imaging: Ghost imaging, quantum radar, and lithography beyond the divergence limit."
                    ]
                },
                {
                    title: "Module 3: Sensor Simulation",
                    topics: [
                        "LMS Practical: Modeling Spin Hamiltonian dynamics and Ramsey interferometry fringes using the QuTiP library."
                    ]
                }
            ]
        },
        {
            number: 4,
            title: "Quantum Materials & Devices (The Hidden Heroes)",
            focus: "The physical realization of qubits and material properties, utilizing simulation tools.",
            outcomes: ["Superconductivity", "Noise Analysis", "Band Structure", "Topological Matter"],
            modules: [
                {
                    title: "Module 1: Realizing the Qubit",
                    topics: [
                        "Hardware Architectures: Engineering Superconducting Transmon qubits (Google Sycamore) vs Trapped Ion systems (IonQ).",
                        "Decoherence and Noise: Analyzing T1 relaxation and T2 dephasing times and their critical impact on gate fidelity."
                    ]
                },
                {
                    title: "Module 2: Quantum Materials",
                    topics: [
                        "Structure-Property Relationships: Understanding electronic band structures and Fermi surfaces in semiconductors.",
                        "Emerging Materials: Introduction to Topological Insulators, Majoranas, and 2D Van der Waals heterostructures."
                    ]
                },
                {
                    title: "Module 3: Defects as Qubits",
                    topics: [
                        "Nitrogen-Vacancy (NV) Centers: atomic physics, spin properties, and optical initialization for room-temp quantum tech.",
                        "LMS Practical: Visualization of Electronic Band Structures and Density of States (DOS) using Python/Tight-Binding."
                    ]
                }
            ]
        }
    ]
};
