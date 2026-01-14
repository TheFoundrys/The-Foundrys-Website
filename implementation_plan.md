# Strategic Home Screen Additions
**Goal**: Increase strategic value and "proof of competence" on the Home Screen.

## Recommendation: "The Venture Lab Showcase"
Currently, the site says "Companies are built" (Hero) but doesn't *show* them. We need to bridge the gap between "Promise" (Hero) and "Curriculum" (Schools).

**The Solution**: A **"Venture Lab"** or **"Innovation Portfolio"** section.
*   **Strategic Value**: Validates the core claim that this is a *maker's* school, not just a *learner's* school.
*   **Placement**: Between `Philosophy` and `Triad`.
*   **Visuals**: High-end, "Stealth Mode" style project cards. Dark mode aesthetic to contrast with the white page, signaling "Deep Tech".

---

## Implementation Plan

### 1. New Component: `components/home/venture-lab.tsx`
*   **Design**: A specialized "dark mode" section (slate-950) to break up the visual rhythm.
*   **Content**:
    *   **Header**: "From Classroom to Cap Table." / "What We're Building."
    *   **Carousel/Grid**: 3-4 "Featured Ventures" or "Capstone Projects".
        *   *Project 1*: **"Aether"** (AI/Deep Tech) - "Autonomous Drone Swarm Logistics".
        *   *Project 2*: **"Verde"** (Sustainability) - "Carbon Capture Concrete".
        *   *Project 3*: **"Cipher"** (Cyber) - "Quantum-Resistant Ledger".
    *   **Metrics**: "12 Patents Filed", "$5M Seed Raised" (Mock data for prestige).

### 2. Update `app/page.tsx`
*   Import and insert `<VentureLab />`.

### 3. Verification
*   Ensure the dark section transitions smoothly from the white `Philosophy` section.
*   Check responsiveness of project cards.

## Alternative Option: "The Future Radar"
*   If you prefer "Thought Leadership" over "Ventures".
*   A section showing "Topics Trending at Foundry" (e.g., Agentic AI, Fusion Energy).
*   *Recommendation*: Stick to **Venture Lab** for now as it makes the "School for Founders" pitch undeniable.
