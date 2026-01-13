"use strict";
import { QuantumClient } from "@/components/scenes/quantum/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantum Computing Engineering | Future Tech Course",
  description: "The future of computing is here. Learn Qubits, Superposition, and Quantum Algorithms. Be 10 years ahead of the industry.",
  keywords: ["Quantum Computing Course India", "Qiskit Training", "Future Technology Jobs", "Advanced Physics Course", "Next Gen Computing"],
  openGraph: {
    title: "Quantum Computing Engineering | Future Tech Course",
    description: "The future of computing is here. Learn Qubits, Superposition, and Quantum Algorithms.",
    images: ["/quantum-computer.jpg"], 
  },
};

export default function QuantumPage() {
  return <QuantumClient />;
}
