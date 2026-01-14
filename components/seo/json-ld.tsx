import Script from "next/script";

export function JsonLd() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization", // Specific type for a school
    "name": "The Foundry's",
    "alternateName": [
        "The Foundry", 
        "TheFoundry", 
        "Foundrys", 
        "The Foundrys", 
        "The Foundry School",
        "The Foundry's School of Deep Tech"
    ],
    "url": "https://thefoundrys.com",
    "logo": "https://thefoundrys.com/logo.png",
    "founder": {
        "@type": "Person",
        "name": "Vishwanath Akuthota",
        "alternateName": ["Dr. Pinnacle", "DrPinnacle", "Vishwanath"]
    },
    "sameAs": [
      "https://twitter.com/thefoundrys",
      "https://instagram.com/thefoundrys",
      "https://linkedin.com/company/the-foundry-s"
    ],
    "address": {
      "@type": "PostalAddress",
      // "streetAddress": "Hitech City",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4435, 
      "longitude": 78.3772
    },
    "description": "India's first Deep Tech and Venture Building school located inside a workspace. Founded by Vishwanath Akuthota (Dr. Pinnacle). We forge Architects, not just engineers.",
    "foundingDate": "2024",
    "priceRange": "$$$"
  };

  const programData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Course",
          "position": 1,
          "name": "Artificial Intelligence & ML",
          "description": "The Intelligence Layer. Build LLMs, Agents, and Neural Networks.",
          "provider": {
            "@type": "Organization",
            "name": "The Foundry's"
          }
        },
        {
          "@type": "Course",
          "position": 2,
          "name": "Cyber Security & Defense",
          "description": "The Defense Layer. Offensive Security, Red Teaming, and Zero Trust.",
          "provider": {
             "@type": "Organization",
             "name": "The Foundry's"
          }
        },
        {
          "@type": "Course",
          "position": 3,
          "name": "Quantum Computing",
          "description": "The Quantum Layer. Qubits, Quantum Algorithms, and Future Tech.",
          "provider": {
             "@type": "Organization",
             "name": "The Foundry's"
          }
        }
      ]
  };

  return (
    <>
      <Script id="json-ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
      <Script id="json-ld-programs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programData) }} />
    </>
  );
}
