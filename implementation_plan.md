# Strategic Home Screen Additions: The Vision & The Roadmap
**Context**: Pre-Launch Phase (No current students).
**Goal**: Build trust and excitement through **"Vision"** (What you will build) and **"Structure"** (How we get you there).

## Strategy: "Sell the Destination, Show the Map"
Since we cannot show *past* success (Alumni), we must visualize *future* success.

### 1. New Section: "The Blueprints" (Student/Parent POV)
*   **Concept**: "Don't just learn theory. Build the future."
*   **Content**: A showcase of **"Capstone Projects"** that are part of the curriculum.
    *   *Visuals*: High-tech schematics/renders of:
        *   **"Autonomous Systems"**: A drone delivery network simulation.
        *   **"Energy Core"**: A next-gen battery management system.
        *   **"FinTech Engine"**: A high-frequency trading algo.
*   **Value**: Tangible proof of the *skills* they will acquire. "I want to build *that*."

### 2. New Section: "The Founder's Arc" (Parent/Business POV)
*   **Concept**: A clear, visual timeline of the 3-Year Degree/Program.
*   **Flow**:
    *   *Year 1: The Foundation* (Basics & Mental Models)
    *   *Year 2: The Builder* (Prototyping & Hackathons)
    *   *Year 3: The Founder* (Incubation, Pitch Days, Seed Funding)
*   **Value**: Removes ambiguity. Parents see a structured path to a career/company. Business/Marketing sees a validated pipeline.

### 3. "The Venture Ecosystem" (Retained & Refined)
*   **Focus**: On the **Infrastructure** available.
    *   "Access to $X Million Seed Pool" (via partners).
    *   "Legal & IP Clinics".
    *   "Co-working Space Access".

---

## Implementation Plan

### Step 1: Create `components/home/project-blueprints.tsx`
*   **Design**: "Schematic" or "Blueprint" aesthetic (blue/grid lines).
*   **Cards**: 3 interactive cards representing the 3 Schools (Deep Tech, Energy, Entrepreneurship).

### Step 2: Create `components/home/founders-arc.tsx`
*   **Design**: A vertical or horizontal step-progress timeline.
*   **Interactive**: Hovering over "Year 3" reveals "Investor Pitch Day" details.

### Step 3: Update `app/page.tsx`
*   **Order**:
    1.  Hero
    2.  Philosophy
    3.  **The Founder's Arc** (The Roadmap - High Priority)
    4.  **The Blueprints** (The Fun Stuff)
    5.  Triad (The Schools)
    6.  Campus
    7.  Footer
