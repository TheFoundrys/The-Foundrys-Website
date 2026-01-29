import { Metadata } from "next";
import { FaqJsonLd } from "@/components/seo/faq-json-ld";
import CyberClient from "./CyberClient";

export const metadata: Metadata = {
  title: "Best Cyber Security College in Hyderabad | Ethical Hacking & VAPT",
  description: "Become a certified Cyber Security Professional. Learn Offensive Security, Red Teaming, and AI Defense. Better than a traditional theory degree.",
  keywords: ["Cyber Security Course Hyderabad", "Ethical Hacking College", "VAPT Certification", "Cyber Defense Career"],
  alternates: {
      canonical: "https://thefoundrys.com/programs/professional/cyber-security",
  },
};

const cyberFaqs = [
    {
        question: "Is Cyber Security a good career for MPC students?",
        answer: "It is one of the highest paid sectors. With the rise of AI, security is critical. Our program trains you in Red Teaming and AI Defense, making you future-proof."
    },
    {
        question: "Do I need a B.Tech to become a Hacker?",
        answer: "No. Cyber security is a tradecraft. You need certifications and practical experience (CTF, Bug Bounties). We facilitate exactly that."
    }
];

export default function CyberPage() {
  return (
    <>
      <FaqJsonLd questions={cyberFaqs} />
      <CyberClient />
    </>
  );
}
