import { NextResponse } from 'next/server';

export async function GET() {
  const uri = process.env.MONGODB_URI;
  return NextResponse.json({
    hasUri: !!uri,
    uriHead: uri ? uri.substring(0, 20) + '...' : 'undefined',
    envKeys: Object.keys(process.env).filter(k => k.includes('MONGO') || k.includes('RAZOR') || k.includes('SMTP')),
  });
}
