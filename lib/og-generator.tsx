import { ImageResponse } from 'next/og';

// Font Fetcher
async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (resource) return await fetch(resource[1]).then((res) => res.arrayBuffer());
  return null;
}

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

interface OgImageProps {
    title: string;
    category?: string;
    author?: string;
    slug?: string;
}

export async function GenerateOgImage({ title, category = "The Foundry's", author = "The Foundry's Team", slug }: OgImageProps) {
  // Load Font (Ubuntu Sans Bold)
  const fontData = await loadGoogleFont('Ubuntu+Sans:wght@700', title + category + author + "The Foundry's");

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#020617', // Slate-950
          backgroundImage: 'radial-gradient(circle at 100% 0%, #1e293b 0%, #020617 50%)',
          padding: '80px',
          fontFamily: '"Ubuntu Sans", sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Abstract Grid Background */}
        <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.15,
        }} />

        {/* Glowing Orb Effect - Radial Gradient Supported */}
        <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(6,182,212,0) 70%)',
            filter: 'blur(80px)',
            opacity: 0.3,
            borderRadius: '50%',
        }} />

        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', zIndex: 10 }}>
             <div style={{ 
                 width: '12px', 
                 height: '12px', 
                 background: '#38bdf8', // cyan-400
                 borderRadius: '50%',
                 boxShadow: '0 0 20px #38bdf8'
             }} />
             <div style={{ fontSize: 24, fontWeight: 700, color: '#e2e8f0', letterSpacing: '2px', textTransform: 'uppercase' }}>
                The Foundry's
             </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '1000px', zIndex: 10 }}>
            <div style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#60a5fa', // blue-400
                background: 'rgba(30, 41, 59, 0.8)', // slate-800/80
                padding: '8px 20px',
                borderRadius: '100px',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                alignSelf: 'flex-start',
                textTransform: 'uppercase',
                letterSpacing: '1px',
            }}>
                {category}
            </div>
            <div style={{ 
                fontSize: 80, 
                fontWeight: 900, 
                color: 'white', 
                lineHeight: 1.05,
                letterSpacing: '-2px',
                textShadow: '0 4px 10px rgba(0,0,0,0.5)',
            }}>
                {title}
            </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', zIndex: 10, marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#0f172a',
                }}>
                    {author.charAt(0)}
                </div>
                 <div style={{ fontSize: 28, color: '#e2e8f0', fontWeight: 500 }}>
                    {author}
                 </div>
            </div>
            <div style={{ 
                fontSize: 24, 
                color: '#94a3b8', 
                fontFamily: 'monospace',
                background: 'rgba(15, 23, 42, 0.6)',
                padding: '10px 20px',
                borderRadius: '12px',
                border: '1px solid rgba(148, 163, 184, 0.1)',
            }}>
                thefoundrys.com
            </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData ? [
        {
          name: 'Ubuntu Sans',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ] : undefined,
    }
  );
}
