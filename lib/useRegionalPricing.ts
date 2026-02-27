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

interface PriceTier {
    original: { INR: string; USD: string };
    freshers: { INR: string; USD: string };
    zeroToTwo: { INR: string; USD: string };
    twoToFive: { INR: string; USD: string };
}

export interface CoursePricing {
    promptEngineering: PriceTier;
    aiEngineer: PriceTier;
    aiResearch: PriceTier;
    professionalAIEngineer: PriceTier;
    professionalAIOperations: PriceTier;
    professionalAIResearch: PriceTier;
    quantumFundamentals: PriceTier;
    deliveringAgeOfAI: PriceTier;
    aiEngineeringTelugu: PriceTier;
    aiFoundationsTelugu: PriceTier;
    sustainability: PriceTier;
    certifiedInnovator: PriceTier;
    certifiedInnovatorMBA: PriceTier;
    agenticAIBootcamp: PriceTier;
    aiFluency: PriceTier;
}

export const COURSE_PRICING: CoursePricing = {
    promptEngineering: {
        original: { INR: '20,000', USD: '500' },
        freshers: { INR: '10,000', USD: '250' },
        zeroToTwo: { INR: '15,000', USD: '375' },
        twoToFive: { INR: '18,000', USD: '450' },
    },
    aiEngineer: {
        original: { INR: '1,00,000', USD: '2,000' },
        freshers: { INR: '50,000', USD: '1,000' },
        zeroToTwo: { INR: '75,000', USD: '1,500' },
        twoToFive: { INR: '90,000', USD: '1,800' },
    },
    aiResearch: {
        original: { INR: '1,50,000', USD: '3,000' },
        freshers: { INR: '75,000', USD: '1,500' },
        zeroToTwo: { INR: '1,12,500', USD: '2,250' },
        twoToFive: { INR: '1,35,000', USD: '2,700' },
    },
    professionalAIEngineer: {
        original: { INR: '1,50,000', USD: '3,000' },
        freshers: { INR: '75,000', USD: '1,500' },
        zeroToTwo: { INR: '1,12,500', USD: '2,250' },
        twoToFive: { INR: '1,35,000', USD: '2,700' },
    },
    professionalAIOperations: {
        original: { INR: '2,00,000', USD: '4,000' },
        freshers: { INR: '1,00,000', USD: '2,000' },
        zeroToTwo: { INR: '1,50,000', USD: '3,000' },
        twoToFive: { INR: '1,80,000', USD: '3,600' },
    },
    professionalAIResearch: {
        original: { INR: '1,50,000', USD: '3,000' },
        freshers: { INR: '75,000', USD: '1,500' },
        zeroToTwo: { INR: '1,12,500', USD: '2,250' },
        twoToFive: { INR: '1,35,000', USD: '2,700' },
    },
    quantumFundamentals: {
        original: { INR: '10,000', USD: '200' },
        freshers: { INR: '5,000', USD: '100' },
        zeroToTwo: { INR: '7,500', USD: '150' },
        twoToFive: { INR: '9,000', USD: '180' },
    },
    deliveringAgeOfAI: {
        original: { INR: '1,00,000', USD: '2,000' },
        freshers: { INR: '50,000', USD: '1,000' },
        zeroToTwo: { INR: '75,000', USD: '1,500' },
        twoToFive: { INR: '90,000', USD: '1,800' },
    },
    aiEngineeringTelugu: {
        original: { INR: '1,50,000', USD: '3,000' },
        freshers: { INR: '75,000', USD: '1,500' },
        zeroToTwo: { INR: '1,12,500', USD: '2,250' },
        twoToFive: { INR: '1,35,000', USD: '2,700' },
    },
    aiFoundationsTelugu: {
        original: { INR: '1,00,000', USD: '2,000' },
        freshers: { INR: '50,000', USD: '1,000' },
        zeroToTwo: { INR: '75,000', USD: '1,500' },
        twoToFive: { INR: '90,000', USD: '1,800' },
    },
    sustainability: {
        original: { INR: '35,000', USD: '700' },
        freshers: { INR: '25,000', USD: '500' },
        zeroToTwo: { INR: '26,250', USD: '525' },
        twoToFive: { INR: '31,500', USD: '630' },
    },
    certifiedInnovator: {
        original: { INR: '30,000', USD: '600' },
        freshers: { INR: '20,000', USD: '400' },
        zeroToTwo: { INR: '22,500', USD: '450' },
        twoToFive: { INR: '27,000', USD: '540' },
    },
    certifiedInnovatorMBA: {
        original: { INR: '1,50,000', USD: '3,000' },
        freshers: { INR: '1,00,000', USD: '2,000' },
        zeroToTwo: { INR: '1,25,000', USD: '2,500' },
        twoToFive: { INR: '1,50,000', USD: '3,000' },
    },
    agenticAIBootcamp: {
        original: { INR: '30,000', USD: '600' },
        freshers: { INR: '20,000', USD: '400' },
        zeroToTwo: { INR: '22,500', USD: '450' },
        twoToFive: { INR: '27,000', USD: '540' },
    },
    aiFluency: {
        original: { INR: '10,000', USD: '200' },
        freshers: { INR: '5,000', USD: '100' },
        zeroToTwo: { INR: '7,500', USD: '150' },
        twoToFive: { INR: '5,000', USD: '200' },
    },
};
