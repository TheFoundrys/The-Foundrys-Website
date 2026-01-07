"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Enhanced 3D Visual - Nested Gyroscope
const WireframeVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    
    const resize = () => {
        canvas.width = canvas.parentElement?.clientWidth || 600;
        canvas.height = canvas.parentElement?.clientHeight || 600;
    }
    // Initial resize and listener
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas.parentElement!);

    let angleX = 0;
    let angleY = 0;

    const drawSphere = (radius: number, color: string, segments: number, rotationSpeed: number) => {
        if (!ctx) return;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1; // Thinner, crisper lines

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        for (let lat = 0; lat <= segments; lat++) {
             const theta = lat * Math.PI / segments;
             const sinTheta = Math.sin(theta);
             const cosTheta = Math.cos(theta);

             ctx.beginPath();
             for (let lon = 0; lon <= segments; lon++) {
                 const phi = lon * 2 * Math.PI / segments;
                 const sinPhi = Math.sin(phi);
                 const cosPhi = Math.cos(phi);

                 const x = radius * sinTheta * cosPhi;
                 const y = radius * cosTheta;
                 const z = radius * sinTheta * sinPhi;

                 // Rotation
                 let rx = x * Math.cos(angleY * rotationSpeed) - z * Math.sin(angleY * rotationSpeed);
                 let rz = z * Math.cos(angleY * rotationSpeed) + x * Math.sin(angleY * rotationSpeed);
                 
                 let ry = y * Math.cos(angleX * rotationSpeed) - rz * Math.sin(angleX * rotationSpeed);
                 rz = rz * Math.cos(angleX * rotationSpeed) + y * Math.sin(angleX * rotationSpeed);

                 const scale = 1000 / (1000 + rz);
                 const px = cx + rx * scale;
                 const py = cy + ry * scale;

                 if (lon === 0) ctx.moveTo(px, py);
                 else ctx.lineTo(px, py);
             }
             ctx.stroke();
        }
    }

    const render = () => {
        if (!ctx || !canvas) return;
        // CRT Clear Effect (Trail)
        ctx.fillStyle = "rgba(10, 10, 10, 0.2)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        angleY += 0.005;
        angleX += 0.002;

        // Outer Sphere (Slow)
        drawSphere(180, "rgba(255, 255, 255, 0.15)", 16, 1);
        
        // Inner Core (Fast)
        drawSphere(100, "rgba(255, 255, 255, 0.8)", 12, 2.5);
        
        // Scanline
        const time = Date.now() / 2000;
        const y = (time % 1) * canvas.height;
        ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
        ctx.fillRect(0, y, canvas.width, 20);

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

// Realistic Compiling Logs Component
const TerminalLogs = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const phrases = [
            "Compiling src/core/neural_net.rs...",
            "Optimizing tensor operations [AVX-512 enabled]",
            "Linking dynamic libraries...",
            "Checking memory safety constraints...",
            "Deploying smart contract to testnet...",
            "Verifying Merkle tree root...",
            "Handshake established with peer node.",
            "Encryption keys generated: RSA-4096",
            "Building artifact: target/release/foundry",
            "[SUCCESS] Build completed in 0.42s",
            "Pinging cluster nodes...",
            "Replicating database shards...",
            "Running integration tests...",
        ];
        
        let index = 0;
        const interval = setInterval(() => {
            setLogs(prev => {
                const newLogs = [...prev, `> ${phrases[index % phrases.length]}`];
                if (newLogs.length > 6) newLogs.shift(); // Keep fewer lines for cleaner look
                return newLogs;
            });
            index++;
        }, 120); // Faster updates

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] md:text-xs text-green-400 opacity-90 pointer-events-none">
            {logs.map((log, i) => (
                <div key={i} className="truncate tracking-tight leading-tight">
                    <span className="opacity-50 mr-2">{new Date().toLocaleTimeString().split(' ')[0]}</span>
                    {log}
                </div>
            ))}
            <div className="w-2 h-4 bg-green-400 mt-2 animate-pulse" />
        </div>
    );
};

export function Philosophy() {
  return (
    <section className="bg-white text-slate-900 min-h-screen flex flex-col md:flex-row border-y border-slate-100 overflow-hidden">
        {/* Left Side - Text */}
        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-r border-slate-100 bg-slate-50/50 z-10">
            <span className="text-blue-600 font-bold tracking-widest text-sm mb-8 uppercase">The Origin</span>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
                Degrees are printed. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Skills are forged.</span>
            </h2>
            
            <div className="text-xl text-slate-600 leading-relaxed mb-12 max-w-lg">
                <p className="mb-6">The lecture hall is dead. We killed it. Traditional systems measure success by grades. We measure it by what you ship.</p>
                <p>At The Foundry's, we strip away the <span className="line-through decoration-slate-400 text-slate-400">fluff</span> and apply heat, pressure, and real-world problems.</p>
            </div>

            <ul className="space-y-6 text-2xl font-bold">
                <li className="flex items-center gap-4">
                    <span className="text-slate-400 line-through decoration-2">Memorize Syntax</span>
                    <span className="text-blue-600">→</span>
                    <span>Architect Logic</span>
                </li>
                 <li className="flex items-center gap-4">
                    <span className="text-slate-400 line-through decoration-2">Pass Exams</span>
                    <span className="text-blue-600">→</span>
                    <span>Deploy Products</span>
                </li>
            </ul>
        </div>

        {/* Right Side - Realistic Tech Console */}
        <div className="md:w-1/2 bg-white relative flex items-center justify-center p-8 md:p-16">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />

            {/* Floating Console Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full aspect-square max-w-[600px] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300 border-[8px] border-slate-100 ring-1 ring-slate-200"
            >
                {/* Visual Content */}
                <WireframeVisual />
                
                {/* HUD Overlay - Techy Corners */}
                <div className="absolute inset-0 pointer-events-none p-6">
                    {/* Top Left Corner */}
                    <div className="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-white/30 rounded-tl-xl" />
                    {/* Top Right Corner */}
                    <div className="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-white/30 rounded-tr-xl" />
                    {/* Bottom Left Corner */}
                    <div className="absolute bottom-6 left-6 w-16 h-16 border-l-2 border-b-2 border-white/30 rounded-bl-xl" />
                    {/* Bottom Right Corner */}
                    <div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-white/30 rounded-br-xl" />
                    
                    {/* Status Indicators */}
                    <div className="absolute top-8 right-8 flex flex-col items-end gap-2 font-mono text-[10px] text-white/50">
                        <div className="flex items-center gap-2">
                            <span>SYS.OP</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>MEM.ALLOC</span>
                            <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full w-[70%] bg-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-8 left-8 font-mono text-[10px] text-white/50">
                        <p>ID: FND-2026-X</p>
                        <p>LOC: HYD-HITEC</p>
                    </div>
                </div>

                {/* CRT Screen Effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] [background-size:100%_2px,3px_100%] pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none rounded-[2rem]" />
                
                <TerminalLogs />
            </motion.div>
        </div>
    </section>
  );
}
