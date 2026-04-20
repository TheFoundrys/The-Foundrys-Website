// Server-side course catalog — prices are authoritative here, not from client
export interface CourseInfo {
  id: string;
  name: string;
  sku: string;
  duration: string;
  prices: {
    INR: number;
    USD: number;
  };
}

export const COURSE_CATALOG: Record<string, CourseInfo> = {
  'certified-in-prompt-engineering': {
    id: 'certified-in-prompt-engineering',
    name: 'Certified Prompt Engineering',
    sku: 'AI 005',
    duration: '2 Weeks',
    prices: {
      INR: 10000, // ₹10,000
      USD: 250,   // $250
    },
  },
  'certified-in-ai-engineering': {
    id: 'certified-in-ai-engineering',
    name: 'Certified in AI Engineering',
    sku: 'AI 003',
    duration: '6 Weeks',
    prices: {
      INR: 100000,
      USD: 1000,
    },
  },
  'certified-in-cybersecurity': {
    id: 'certified-in-cybersecurity',
    name: 'Certified in Cybersecurity',
    sku: 'SEC 001',
    duration: '6 Weeks',
    prices: {
      INR: 75000,
      USD: 1500,
    },
  },
  'quantum-fundamentals': {
    id: 'quantum-fundamentals',
    name: 'Quantum Fundamentals',
    sku: 'QUAN 001',
    duration: '4 Weeks',
    prices: {
      INR: 5000,
      USD: 100,
    },
  },
  'sustainability-in-the-age-of-ai': {
    id: 'sustainability-in-the-age-of-ai',
    name: 'Sustainability in the Age of AI',
    sku: 'SUS 001',
    duration: '4 Weeks',
    prices: {
      INR: 25000,
      USD: 500,
    },
  },
  'certified-professional-in-ai-engineering': {
    id: 'certified-professional-in-ai-engineering',
    name: 'Certified Professional in AI Engineering',
    sku: 'AI 004',
    duration: '6 Weeks',
    prices: {
      INR: 100000,
      USD: 1500,
    },
  },
  'certified-professional-in-ai-research': {
    id: 'certified-professional-in-ai-research',
    name: 'Certified Professional in AI Research',
    sku: 'AI 002',
    duration: '6 Weeks',
    prices: {
      INR: 75000,
      USD: 1500,
    },
  },
  'ai-fluency': {
    id: 'ai-fluency',
    name: 'AI Fluency for Professionals',
    sku: 'AI 007',
    duration: '20 Days',
    prices: {
      INR: 10000,
      USD: 250,
    },
  },
  '0-1-llm': {
    id: '0-1-llm',
    name: 'Certified in Large Language Models',
    sku: 'LLM 001',
    duration: '90 Days',
    prices: {
      INR: 150000,
      USD: 1500,
    },
  },
};

// Hardcoded coupons — add more as needed
export interface Coupon {
  code: string;
  discountPercent: number;
  validCourses?: string[]; // empty = all courses
  maxUses?: number;
  active: boolean;
}

export const COUPONS: Record<string, Coupon> = {
  'FOUNDRY50': {
    code: 'FOUNDRY50',
    discountPercent: 50,
    active: true,
  },
  'LAUNCH25': {
    code: 'LAUNCH25',
    discountPercent: 25,
    active: true,
  },
  'EARLY10': {
    code: 'EARLY10',
    discountPercent: 10,
    active: true,
  },
  'TESTRS1': {
    code: 'TESTRS1',
    discountPercent: 99.9,
    active: true,
    validCourses: [
      'ai-fluency', 
      'certified-in-prompt-engineering', 
      'certified-in-ai-engineering', 
      'certified-professional-in-ai-engineering',
      'certified-professional-in-ai-research',
      'certified-in-cybersecurity',
      'quantum-fundamentals',
      'sustainability-in-the-age-of-ai'
    ]
  },
};
