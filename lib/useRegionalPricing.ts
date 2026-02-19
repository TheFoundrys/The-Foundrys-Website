"use client";

import { useState, useEffect } from 'react';

interface PricingData {
    currency: 'INR' | 'USD';
    symbol: string;
    isIndia: boolean;
}

export function useRegionalPricing(): PricingData {
    const [pricingData, setPricingData] = useState<PricingData>({
        currency: 'INR',
        symbol: '₹',
        isIndia: true,
    });

    useEffect(() => {
        // Check if we're in the browser
        if (typeof window === 'undefined') return;

        let isIndia = true;
        let detectionMethod = 'default';

        // Development mode: Check URL params and localStorage for overrides
        if (process.env.NODE_ENV !== 'production') {
            // Check URL parameter first
            const urlParams = new URLSearchParams(window.location.search);
            const regionParam = urlParams.get('region');

            if (regionParam === 'usd' || regionParam === 'inr') {
                isIndia = regionParam === 'inr';
                detectionMethod = 'URL parameter';
                // Save to localStorage for persistence
                localStorage.setItem('pricing_region_override', regionParam);
            } else {
                // Check localStorage
                const savedRegion = localStorage.getItem('pricing_region_override');
                if (savedRegion === 'usd' || savedRegion === 'inr') {
                    isIndia = savedRegion === 'inr';
                    detectionMethod = 'localStorage';
                } else {
                    // Fall back to timezone detection
                    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    isIndia = timezone.includes('Kolkata') ||
                        timezone.includes('Mumbai') ||
                        timezone.includes('Delhi') ||
                        timezone.includes('Asia/Calcutta');
                    detectionMethod = `timezone (${timezone})`;
                }
            }

            // Debug logging in development
            console.log(`[Regional Pricing] Detected region: ${isIndia ? 'India (INR)' : 'Non-India (USD)'}`);
            console.log(`[Regional Pricing] Detection method: ${detectionMethod}`);
            console.log(`[Regional Pricing] To test USD: Add ?region=usd to URL`);
            console.log(`[Regional Pricing] To test INR: Add ?region=inr to URL`);
        } else {
            // Production mode: Only use timezone detection
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            isIndia = timezone.includes('Kolkata') ||
                timezone.includes('Mumbai') ||
                timezone.includes('Delhi') ||
                timezone.includes('Asia/Calcutta');
        }

        setPricingData({
            currency: isIndia ? 'INR' : 'USD',
            symbol: isIndia ? '₹' : '$',
            isIndia,
        });
    }, []);

    return pricingData;
}

export interface CoursePricing {
    promptEngineering: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    aiEngineer: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    aiResearch: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    professionalAIEngineer: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    professionalAIOperations: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    professionalAIResearch: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    quantumFundamentals: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    deliveringAgeOfAI: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    aiEngineeringTelugu: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    aiFoundationsTelugu: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    sustainability: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    certifiedInnovator: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
    agenticAIBootcamp: {
        original: { INR: string; USD: string };
        discounted: { INR: string; USD: string };
    };
}

export const COURSE_PRICING: CoursePricing = {
    promptEngineering: {
        original: { INR: '20,000', USD: '500' },
        discounted: { INR: '10,000', USD: '250' },
    },
    aiEngineer: {
        original: { INR: '100,000', USD: '2000' },
        discounted: { INR: '50,000', USD: '1000' },
    },
    aiResearch: {
        original: { INR: '150,000', USD: '3000' },
        discounted: { INR: '75,000', USD: '1500' },
    },
    professionalAIEngineer: {
        original: { INR: '150,000', USD: '3000' },
        discounted: { INR: '75,000', USD: '1500' },
    },
    professionalAIOperations: {
        original: { INR: '200,000', USD: '4000' },
        discounted: { INR: '100,000', USD: '2000' },
    },
    professionalAIResearch: {
        original: { INR: '150,000', USD: '3000' },
        discounted: { INR: '75,000', USD: '1500' },
    },
    quantumFundamentals: {
        original: { INR: '10,000', USD: '200' },
        discounted: { INR: '5,000', USD: '100' },
    },
    deliveringAgeOfAI: {
        original: { INR: '1,00,000', USD: '2000' },
        discounted: { INR: '75,000', USD: '1500' },
    },
    aiEngineeringTelugu: {
        original: { INR: '150,000', USD: '3000' },
        discounted: { INR: '75,000', USD: '1500' },
    },
    aiFoundationsTelugu: {
        original: { INR: '100,000', USD: '2000' },
        discounted: { INR: '50,000', USD: '1000' },
    },
    sustainability: {
        original: { INR: '35,000', USD: '700' },
        discounted: { INR: '25,000', USD: '500' },
    },
    certifiedInnovator: {
        original: { INR: '30,000', USD: '600' },
        discounted: { INR: '20,000', USD: '400' },
    },
    agenticAIBootcamp: {
        original: { INR: '30,000', USD: '600' },
        discounted: { INR: '20,000', USD: '400' },
    },
};
