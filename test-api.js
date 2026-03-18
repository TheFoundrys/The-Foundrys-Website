const fs = require('fs');

async function test() {
    try {
        // Test 1: Simple GET
        console.log('=== Test 1: GET /api/simple ===');
        const r1 = await fetch('http://127.0.0.1:3000/api/simple');
        console.log('Status:', r1.status);
        console.log('Content-Type:', r1.headers.get('content-type'));
        const t1 = await r1.text();
        // Save full response to file for analysis
        fs.writeFileSync('api-response.html', t1);
        console.log('Response length:', t1.length);
        console.log('First 200 chars:', t1.substring(0, 200));
        console.log('');

        // Test 2: POST to create-order
        console.log('=== Test 2: POST /api/payments/create-order ===');
        const payload = JSON.parse(fs.readFileSync('payload.json', 'utf8'));
        const r2 = await fetch('http://127.0.0.1:3000/api/payments/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log('Status:', r2.status);
        console.log('Content-Type:', r2.headers.get('content-type'));
        const t2 = await r2.text();
        fs.writeFileSync('api-response-order.html', t2);
        console.log('Response length:', t2.length);
        console.log('First 200 chars:', t2.substring(0, 200));
        
        // Try to extract error from the HTML
        const errorMatch = t2.match(/"error":"([^"]+)"/);
        if (errorMatch) console.log('Error found in HTML:', errorMatch[1]);
        
        const messageMatch = t2.match(/"message":"([^"]+)"/);
        if (messageMatch) console.log('Message found in HTML:', messageMatch[1]);

    } catch (error) {
        console.error('Test Error:', error);
    }
}

test();
