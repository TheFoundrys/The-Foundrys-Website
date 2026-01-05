"use client";

let cachedDuration: number | null = null;

/**
 * Triggers a haptic feedback vibration.
 * - 1ms for Flagship devices (Pixel, Samsung S/Note series) for a crisp feel.
 * - 10ms for other Android devices to ensure the motor physically engages.
 * - iOS ignores this call (OS limitation).
 */
export const triggerHaptic = () => {
    if (typeof navigator === 'undefined' || !navigator.vibrate) return;

    if (cachedDuration === null) {
        const ua = navigator.userAgent || "";

        // Detect Pixel devices
        const isPixel = /Pixel/i.test(ua);

        // Detect Samsung Flagships
        // SM-Sxxx (S22, S23, S24 series)
        // SM-Gxxx (S21 and older S series)
        // SM-Nxxx (Note series)
        // SM-Fxxx (Fold/Flip series)
        const isSamsungFlagship = /SM-(S|G|N|F)\d/i.test(ua);

        if (isPixel || isSamsungFlagship) {
            cachedDuration = 1;
        } else {
            cachedDuration = 10; // Safe minimum for standard ERM motors
        }
    }

    try {
        navigator.vibrate(cachedDuration);
    } catch (e) {
        // Ignore errors likely due to user interaction requirements or permissions
    }
};
