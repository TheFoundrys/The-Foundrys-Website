export const quantumCurriculum = {
    duration: "1 Year (2 Semesters)",
    years: [
        {
            title: "YEAR 1: FOUNDATION PHASE",
            subtitle: "\"From Linear Algebra to Logic Gates\"",
            goal: "To move students from classical intuition to quantum intuition by building the necessary mathematical toolkit alongside practical coding skills.",
            semesters: [
                {
                    id: "sem1",
                    title: "Semester 1: Quantum Mathematics & Physics Foundations",
                    theme: "Language of Quantum & The Physical Shift",
                    modules: [
                        {
                            category: "Module 1: The Mathematical Toolkit",
                            items: [
                                "Complex Numbers: Algebra, Euler’s formula, Polar representation",
                                "Linear Algebra: Vectors & Vector Spaces (Hilbert Space)",
                                "Matrices: Multiplication, Identity, Inverse, Hermitian",
                                "Eigenvalues & Eigenvectors: Meaning of measurement",
                                "Inner Products, Orthogonality, Orthonormality (Bra-Ket Basics)"
                            ]
                        },
                        {
                            category: "Module 2: The Quantum Leap",
                            items: [
                                "Why Quantum? Limits of classical physics (Photoelectric, Atomic spectra)",
                                "The Postulates: Wave-particle duality, Uncertainty Principle, Superposition",
                                "The Qubit: Conceptual difference from Classical Bit",
                                "The Sphere of Possibility: Visualizing the Bloch Sphere"
                            ]
                        },
                        {
                            category: "Lab 1: Scientific Computing & Visualization",
                            items: [
                                "Introduction to Python: Variables, Lists, Loops",
                                "Numpy for Quantum Math: Matrix multiplication, Eigenvalues",
                                "Visualizing Math: Plotting vectors and complex numbers"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 1: \"Simulating Superposition\"",
                        task: "Build a Python visualizer that demonstrates wave interference and superposition.",
                        outcome: "Visual intuition of quantum phenomena."
                    }
                },
                {
                    id: "sem2",
                    title: "Semester 2: Intro to Quantum Computation",
                    theme: "The Logic of Quantum: Circuits & Algorithms",
                    modules: [
                        {
                            category: "Module 3: Qubits and Gates",
                            items: [
                                "Single Qubit Gates: X, Z, H (Superposition), Matrix representation",
                                "Multiple Qubits: Tensor products & Entanglement (Bell States)",
                                "Multi-Qubit Gates: CNOT, Toffoli, Reversible Computing"
                            ]
                        },
                        {
                            category: "Module 4: Basic Quantum Algorithms",
                            items: [
                                "Quantum Teleportation & Superdense Coding",
                                "Deutsch Algorithm: Proof of advantage",
                                "Real-World Context: RSA Encryption threat (Shor's) & QKD (BB84)"
                            ]
                        },
                        {
                            category: "Lab 2: The Quantum Forge",
                            items: [
                                "Tools: Qiskit (IBM) or Cirq (Google)",
                                "Practical 1: Quantum Random Number Generator",
                                "Practical 2: Creating Superposition on a simulator",
                                "Practical 3: Implementing Teleportation Circuit",
                                "Practical 4: Running a job on real IBM Quantum hardware"
                            ]
                        }
                    ],
                    project: {
                        title: "Project 2: \"Teleportation Protocol\"",
                        task: "Implement the Quantum Teleportation protocol using Qiskit.",
                        outcome: "Moving information using entanglement."
                    }
                }
            ]
        }
    ]
};
