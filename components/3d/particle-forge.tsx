"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// --- High Fidelity Configuration ---
const COUNT = 7000; // High particle count for detail
const RADIUS = 4;

// 1. Chaos: Random distribution (Widened)
function getChaosPositions() {
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    // Spread wider on X to cover full screen even when shifted
    positions[i * 3] = (Math.random() - 0.5) * 25; // Widened X
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }
  return positions;
}

// 2. Brain (AI): Hyper-Detailed Cortex
function getBrainPositions() {
  const positions = new Float32Array(COUNT * 3);
  const numPerHemi = Math.floor(COUNT * 0.9);
  const numCerebellum = COUNT - numPerHemi;

  // Cerebrum
  for (let i = 0; i < numPerHemi; i++) {
    const isLeft = i < numPerHemi / 2;
    const idx = i % (numPerHemi / 2);
    
    // Golden Spiral
    const phi = Math.acos(-1 + (2 * idx) / (numPerHemi / 2));
    const theta = Math.sqrt((numPerHemi/2) * Math.PI) * phi;

    let r = 2.8; 
    let x = r * Math.sin(phi) * Math.cos(theta);
    let y = r * Math.sin(phi) * Math.sin(theta);
    let z = r * Math.cos(phi);

    // Sculpting
    x *= 0.75; y *= 0.9; z *= 1.2;
    x = Math.abs(x) + 0.15; // Sagittal Gap
    if (z > 0) { x *= (1 - z * 0.1); y *= (1 - z * 0.1); } // Front taper
    if (y < -1) y = -1 + (y+1)*0.3; // Flat bottom

    // Deep Sulci (The Folds)
    const f1 = 3.5; const a1 = 0.2;
    const f2 = 8.0; const a2 = 0.05;
    
    const d1 = Math.sin(x*f1) * Math.cos(y*f1) * Math.sin(z*f1);
    const d2 = Math.sin(x*f2 + 1) * Math.cos(y*f2 + 2) * Math.sin(z*f2 + 3);
    const displacement = d1*a1 + d2*a2;

    x += x * displacement;
    y += y * displacement;
    z += z * displacement;

    if (isLeft) x = -x;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  // Cerebellum
  for (let i = 0; i < numCerebellum; i++) {
     const phi = Math.acos(-1 + (2 * i) / numCerebellum);
     const theta = Math.sqrt(numCerebellum * Math.PI) * phi;
     const r = 1.0;
     let x = r * Math.sin(phi) * Math.cos(theta) * 1.4;
     let y = r * Math.sin(phi) * Math.sin(theta) * 0.7;
     let z = r * Math.cos(phi) * 0.8;
     
     const disp = Math.sin(x*15) * 0.05;
     x+=disp; 

     y -= 1.6; z -= 1.8;

     const offset = numPerHemi * 3;
     positions[offset + i*3] = x;
     positions[offset + i*3 + 1] = y;
     positions[offset + i*3 + 2] = z;
  }
  return positions;
}

// 3. Security (Cyber): Heater Shield (Classic Defense)
function getSecurityPositions() {
  const positions = new Float32Array(COUNT * 3);
  const rimCount = 2000; // Heavy Rim
  const surfaceCount = COUNT - rimCount;

  // RIM: Heater Shield Outline
  for (let i = 0; i < rimCount; i++) {
      const t = i / rimCount; // 0 to 1
      // Outline:
      // Top line (flat): 20% of points
      // Curves: 80% of points
      
      let x = 0, y = 0;
      const w = 2.0;
      const h = 2.5;

      if (t < 0.2) { // Top Line
          const lt = t / 0.2; // 0-1
          x = (lt - 0.5) * 2 * w; // -w to w
          y = h * 0.6; // Top height
      } else { // Curved Sides meeting at bottom
          const ct = (t - 0.2) / 0.8; // 0-1
          // Parabolic/Cos curve
          // Angle from 0 to PI (semi-circleish) but pointed
          const angle = ct * Math.PI; // 0 to PI
          // x = w * cos(angle)
          // y = h * 0.6 - ...
          
          // Let's use a pointed arch math: x = w * (1-t^2) ??
          
          // Simpler: Parametric Heart/Shield equation
          // x = 16sin^3(t) ... no that's heart.
          
          // Let's trace it:
          // Right side: t goes 0 to 0.5
          // Left side: t goes 0.5 to 1.0
          
          // Modified circle
          const ang = (ct * Math.PI) + 0; // 0 to PI (Bottom half of circle?)
          // No, heater shield is U shaped but pointed.
          
          // Let's just do a Bezier approx
          const sideT = (ct < 0.5) ? ct * 2 : (1 - ct) * 2; // 0->1 (Tip)
          const sign = (ct < 0.5) ? 1 : -1;
          
          // x goes from w to 0
          // y goes from top to bottom
          x = w * (1 - Math.pow(sideT, 2)) * sign;
          y = h * 0.6 - sideT * (h * 1.6); // Top to bottom tip
      }

      // Curve the surface (Z-axis)
      let z = Math.cos(x * 0.5) * 0.6; 
      
      // Thicken Rim
      z += (Math.random()) * 0.15;
      
      positions[i*3] = x;
      positions[i*3+1] = y;
      positions[i*3+2] = z;
  }

  // SURFACE + EMBLEM
  for (let i = 0; i < surfaceCount; i++) {
      // Random points on shield surface
      let u = Math.random(); 
      let v = Math.random();
      
      const w = 1.9; const h = 2.4;
      let x = (u - 0.5) * 2 * w;
      let y = (v - 0.5) * 2 * h;
      
      // Masking to Shield Shape
      // Basic check: is inside parabola?
      // y_norm = (h*0.6 - y) / (h*1.6) -> 0 (top) to 1 (tip)
      const y_norm = (h * 0.6 - y) / (h * 1.6);
      
      if (y > h*0.6) continue; // Above top
      if (y_norm < 0 || y_norm > 1) {
          x*=0; y*=0; // Collapse outliers (lazy fix)
      } else {
          // Width at this height
          const maxW = w * (1 - Math.pow(y_norm, 2));
           if (Math.abs(x) > maxW) {
               // Push inside
               x = (x > 0 ? 1 : -1) * maxW * Math.random();
           }
      }

      let z = Math.cos(x * 0.5) * 0.6 - 0.2; // Inside rim

      // EMBLEM: Cross
      // Vertical bar: |x| < 0.4
      // Horizontal bar: |y - 0.2| < 0.4
      const isCross = (Math.abs(x) < 0.35) || (Math.abs(y - 0.3) < 0.35);
      
      if (isCross) {
          z += 0.3; // Pop out
      } else {
          // Dim background or sparse it
          if (Math.random() > 0.6) z -= 0.5; // Push back
      }

      const offset = rimCount * 3;
      positions[offset + i*3] = x;
      positions[offset + i*3 + 1] = y;
      positions[offset + i*3 + 2] = z;
  }
  return positions;
}

// 4. Atom (Quantum): Dense Nucleus + Particle Trails
function getAtomPositions() {
  const positions = new Float32Array(COUNT * 3);
  const nucleusCount = 2000;
  const ringsCount = COUNT - nucleusCount;
  const pointsPerRing = ringsCount / 3;

  for (let i = 0; i < nucleusCount; i++) {
    const r = Math.cbrt(Math.random()) * 0.9; 
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const fuzz = (Math.random() - 0.5) * 0.2;
    positions[i * 3] = (r + fuzz) * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = (r + fuzz) * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = (r + fuzz) * Math.cos(phi);
  }

  for (let i = 0; i < ringsCount; i++) {
      const ringIdx = Math.floor(i / pointsPerRing);
      const t = (i % pointsPerRing) / pointsPerRing; 
      const angle = t * Math.PI * 2;
      const r = 3.8;
      
      let x = r * Math.cos(angle);
      let y = r * Math.sin(angle);
      let z = 0;
      
      // Thickness
      const r2 = Math.random() * 0.15;
      const a2 = Math.random() * Math.PI * 2;
      x += r2*Math.cos(a2); y += r2*Math.sin(a2);

      const pos = new THREE.Vector3(x, y, z);
      if (ringIdx === 0) pos.applyAxisAngle(new THREE.Vector3(1, 1, 0).normalize(), Math.PI / 3);
      if (ringIdx === 1) pos.applyAxisAngle(new THREE.Vector3(1, -1, 0).normalize(), Math.PI / 3);
      if (ringIdx === 2) pos.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);

      const offset = nucleusCount * 3;
      positions[offset + i*3] = pos.x;
      positions[offset + i*3 + 1] = pos.y;
      positions[offset + i*3 + 2] = pos.z;
  }
  return positions;
}

// 5. Blockchain: Complex Blocks (Wireframe + Data)
function getBlockchainPositions() {
    const positions = new Float32Array(COUNT * 3);
    const numBlocks = 3;
    const blockSize = 1.4;
    const blockParticles = Math.floor(COUNT * 0.75);
    const linkParticles = COUNT - blockParticles;
    const particlesPerBlock = Math.floor(blockParticles / numBlocks);
    const particlesPerLink = Math.floor(linkParticles / (numBlocks - 1));

    for (let b = 0; b < numBlocks; b++) {
        const cx = (b - 1) * 2.8; const cy = (b - 1) * 0.8; const cz = 0;
        for (let i = 0; i < particlesPerBlock; i++) {
            // Edges Only? Or Surface?
            // Weighted towards edges
            const r = Math.random();
            let lx, ly, lz;
            
            if (r < 0.6) { // Edges
                // Pick an axis and fixed coords for others
                const edge = Math.floor(Math.random()*12);
                const t = Math.random() * blockSize - blockSize/2;
                const h = blockSize/2;
                // Simplified edge distribution
                lx = (Math.random() > 0.5 ? h : -h); ly = (Math.random() > 0.5 ? h : -h); lz = (Math.random() > 0.5 ? h : -h);
                const vary = Math.floor(Math.random()*3);
                if (vary === 0) lx = t;
                if (vary === 1) ly = t;
                if (vary === 2) lz = t;
            } else { // Internal Mist
                lx = (Math.random()-0.5)*blockSize;
                ly = (Math.random()-0.5)*blockSize;
                lz = (Math.random()-0.5)*blockSize;
            }
            
            const idx = (b * particlesPerBlock + i) * 3;
            positions[idx] = lx + cx; positions[idx + 1] = ly + cy; positions[idx + 2] = lz + cz;
        }
    }
    
    // Links (Heavy Chains)
    const linksOffset = blockParticles * 3;
    for (let l = 0; l < numBlocks - 1; l++) {
        const sx = (l - 1) * 2.8; const sy = (l - 1) * 0.8;
        const ex = l * 2.8; const ey = l * 0.8;

        for (let i = 0; i < particlesPerLink; i++) {
            const t = i / particlesPerLink;
            const cx = sx + (ex-sx)*t;
            const cy = sy + (ey-sy)*t;
            
            // Double helix
            const rad = 0.2; const freq = 15;
            const hx = Math.sin(t*freq)*rad;
            const hz = Math.cos(t*freq)*rad;
            
            // Rotate to align with vector? simple approximation since mostly horizontal
            const idx = linksOffset + (l * particlesPerLink + i) * 3;
            positions[idx] = cx; // + hx?
            positions[idx + 1] = cy + hx; // Perpendicular displace
            positions[idx + 2] = hz;
        }
    }
    return positions;
}

// 6. Venture (Entrepreneurship): The Lightbulb (Ideas)
function getVenturePositions() {
    const positions = new Float32Array(COUNT * 3);
    
    for (let i = 0; i < COUNT; i++) {
        const part = Math.random(); 
        // 0.0 - 0.6: Glass Bulb
        // 0.6 - 0.8: Filament (Glowing core)
        // 0.8 - 1.0: Base (Threads)
        
        let x=0, y=0, z=0;

        if (part < 0.6) { // BULB GLASS
            // Sphere that tapers down
            // y goes from -1 to 2
            const t = Math.random(); // 0 to 1
            // Distribution: More points at top?
            
            // Rejection sampling for perfect bulb shape
            // Sphere: x^2 + y^2 + z^2 = r^2
            // Taper: x^2 + z^2 = (width(y))^2
            
            // Random point in cylinder
            const h = 3.0; // Total height
            const localY = (Math.random() - 0.5) * h + 0.5; // -1 to 2
            
            let r = 0;
            if (localY > 0) { // Top Hemisphere
                 // x^2 + y^2 = 1.5^2
                 r = Math.sqrt(Math.max(0, 1.5*1.5 - localY*localY)); // Sphere
                 if (localY < 0.5) r = 1.5; // Widen? No sphere is best.
                 // Correct sphere:
                 // Center at y=0.8?
                 const cy = 0.8;
                 const cr = 1.4;
                 if (localY > cy - cr && localY < cy + cr) {
                      r = Math.sqrt(Math.max(0, cr*cr - (localY-cy)*(localY-cy)));
                  }
            } else { // Tapering Neck
                 // neck width at bottom (-1) is 0.6
                 // neck width at join (0) is 1.4
                 // Linear taper? Or Curved?
                 const t = (localY + 1); // 0 at bottom, 1 at join
                 r = 0.6 + t * 0.8;
                 
                 // Smooth join to sphere?
                 // Let's use simple logic:
                 // y > 0.5: Sphere r=1.5
                 // y < 0.5: Taper to 0.6
            }
            // Use just simple math for now
            // Top sphere center (0, 0.5, 0) radius 1.5
            // Neck cylinder
            
            // Let's iterate angle
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI; // For sphere
            
            // 70% Sphere, 30% Neck
            if (Math.random() > 0.4) {
                 const sr = 1.5;
                 x = sr * Math.sin(phi) * Math.cos(theta);
                 y = sr * Math.cos(phi) + 0.5;
                 z = sr * Math.sin(phi) * Math.sin(theta);
                 
                 if (y < 0.2) { // Cut off bottom of sphere
                      y = 0.2 - Math.random()*0.5; // Fake smooth
                      const scale = 0.5 + (y+0.5); // Taper
                      x *= scale; z *= scale;
                 }
            } else {
                 // Neck
                 y = -1.0 + Math.random() * 1.5; // -1 to 0.5
                 const w = 0.6 + (y+1)*0.6; // Taper
                 x = w * Math.cos(theta);
                 z = w * Math.sin(theta);
            }

        } else if (part < 0.8) { // FILAMENT (The Idea)
             // Coil
             const t = Math.random() * 10;
             const r = 0.3;
             const h = 0.8;
             
             x = Math.cos(t) * r;
             z = Math.sin(t) * r;
             y = (Math.random() - 0.5) * h + 0.5; // Center of bulb
             
             // Intensify brightness? (Handled by material usually, but we can pack density)
             x *= 0.5; z *= 0.5; // Tigher coil

        } else { // BASE (Threads)
             // Cylinder with screw threads
             const t = Math.random();
             y = -1.0 - t * 0.8; // -1 to -1.8
             const r = 0.65;
             
             const theta = Math.random() * Math.PI * 2;
             
             // Screw thread offset
             const thread = Math.sin(y * 20) * 0.05;
             
             x = (r + thread) * Math.cos(theta);
             z = (r + thread) * Math.sin(theta);
        }

        positions[i*3] = x;
        positions[i*3+1] = y;
        positions[i*3+2] = z;
    }
    return positions;
}

// 7. Globe (Sustainability): Lat/Long Grid
function getGlobePositions() {
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
     // Mix of uniform sphere + grid lines
     const type = Math.random();
     
     let x, y, z;
     const r = RADIUS;

     if (type > 0.7) { // Grid Lines
         const isLong = Math.random() > 0.5;
         if (isLong) {
             const phi = (Math.floor(Math.random()*24)/24)*Math.PI*2;
             const theta = Math.random()*Math.PI;
             x = r * Math.sin(theta)*Math.cos(phi);
             y = r * Math.sin(theta)*Math.sin(phi);
             z = r * Math.cos(theta);
         } else {
             const theta = (Math.floor(Math.random()*12)/12)*Math.PI;
             const phi = Math.random()*Math.PI*2;
             x = r * Math.sin(theta)*Math.cos(phi);
             y = r * Math.sin(theta)*Math.sin(phi);
             z = r * Math.cos(theta);
         }
         // Bump grid out
         x*=1.02; y*=1.02; z*=1.02;
     } else {
         // Continents noise
         const phi = Math.acos(-1 + (2 * i) / COUNT);
         const theta = Math.sqrt(COUNT * Math.PI) * phi;
         x = r * Math.cos(theta) * Math.sin(phi);
         y = r * Math.sin(theta) * Math.sin(phi);
         z = r * Math.cos(phi);
     }
     
     positions[i * 3] = x;
     positions[i * 3 + 1] = y;
     positions[i * 3 + 2] = z;
  }
  return positions;
}


function ParticleSwarm() {
  const mesh = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  const isMobile = viewport.width < 10; // Simple check for mobile/narrow screens in 3D units

  // Adjust position: Right shift on Desktop, Centered on Mobile
  const groupPosition = isMobile ? [0, 0, 0] : [3.5, 0, 0];
  
  // Pre-calculate shapes
  const shapes = useMemo(() => [
    getChaosPositions(),    // 0: Start
    getBrainPositions(),    // 1: AI (Brain)
    getSecurityPositions(), // 2: Cyber (Heater Shield)
    getAtomPositions(),     // 3: Quantum (Atom)
    getBlockchainPositions(),// 4: Blockchain (Cubes)
    getVenturePositions(),  // 5: Venture (Lightbulb)
    getGlobePositions()     // 6: Sustainability (Globe)
  ], []);

  const [currentShapeIndex, setCurrentShapeIndex] = useState(0);

  // Cycle shapes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShapeIndex((prev) => (prev + 1) % shapes.length);
    }, 4500); 
    return () => clearInterval(interval);
  }, [shapes.length]);

  // Initial State: Chaos
  const initialPositions = useMemo(() => new Float32Array(shapes[0]), [shapes]);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    // Target positions
    const targetPositions = shapes[currentShapeIndex];
    
    // Lerp Speed
    const lerpSpeed = 2.0 * delta;

    // Get the current positions from the geometry attribute
    const positionAttribute = mesh.current.geometry.attributes.position;
    const currentPositions = positionAttribute.array as Float32Array;
    
    for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        currentPositions[ix] += (targetPositions[ix] - currentPositions[ix]) * lerpSpeed;
        currentPositions[iy] += (targetPositions[iy] - currentPositions[iy]) * lerpSpeed;
        currentPositions[iz] += (targetPositions[iz] - currentPositions[iz]) * lerpSpeed;
    }

    // Flag for update
    positionAttribute.needsUpdate = true;

    // Rotation
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
  });

  return (
    <group rotation={[0, 0, 0]}>
         {/* Shift shapes based on Viewport */}
         <group position={new THREE.Vector3(...groupPosition)}>
            <points ref={mesh} frustumCulled={false}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={initialPositions.length / 3}
                        array={initialPositions}
                        itemSize={3}
                        args={[initialPositions, 3]} 
                    />
                </bufferGeometry>
                <PointMaterial
                transparent
                color="#22d3ee"
                size={0.06}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.8}
                />
            </points>
      </group>
    </group>
  );
}

export default function ParticleForge() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 2, 12], fov: 50 }} onCreated={() => console.log("3D Canvas Created")}>
        <ambientLight intensity={1} />
        <ParticleSwarm />
        {/* <fog attach="fog" args={['#0f172a', 6, 25]} />  */}
      </Canvas>
    </div>
  );
}
