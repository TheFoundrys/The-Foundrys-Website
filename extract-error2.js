const fs = require('fs');

async function test() {
    const r = await fetch('http://127.0.0.1:3000/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 100, currency: 'INR', courseName: 'Test', courseId: 'test', name: 'Test', email: 'test@test.com', phone: '9876543210', username: 'testuser99', password: 'Test123!' })
    });
    
    const html = await r.text();
    
    // Extract the __NEXT_DATA__ script which contains the error
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/);
    if (nextDataMatch) {
        try {
            const data = JSON.parse(nextDataMatch[1]);
            console.log('NEXT_DATA error:', JSON.stringify(data, null, 2));
        } catch(e) {
            console.log('Raw NEXT_DATA:', nextDataMatch[1].substring(0, 1000));
        }
    }
    
    // Also try to find error in the response
    const errorMatches = html.match(/"err":\s*\{[^}]*\}/g);
    if (errorMatches) {
        errorMatches.forEach(m => console.log('Error match:', m));
    }
    
    // Try to get the full message
    const msgMatch = html.match(/"message":"(.*?)(?:","|"})/s);
    if (msgMatch) {
        // Decode escape sequences
        const msg = msgMatch[1]
            .replace(/\\u001b\[[0-9;]*m/g, '')
            .replace(/\\n/g, '\n')
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\');
        console.log('\n=== Full Error Message ===');
        console.log(msg);
    }
}

test();
