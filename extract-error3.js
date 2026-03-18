const fs = require('fs');

async function test() {
    const r = await fetch('http://127.0.0.1:3000/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 100, currency: 'INR', courseName: 'Test', courseId: 'test', name: 'Test', email: 'test@test.com', phone: '9876543210', username: 'testuser99', password: 'Test123!' })
    });
    
    const html = await r.text();
    
    // Try to find ALL error-related text by looking for module-not-found
    const moduleMatch = html.match(/module-not-found.*?"message":"(.*?)"/s);
    if (moduleMatch) {
        const msg = moduleMatch[1]
            .replace(/\\u001b\[[0-9;]*m/g, '')
            .replace(/\\n/g, '\n')
            .replace(/\\"/g, '"')
            .replace(/\\\\/g, '\\');
        console.log('=== Module Not Found Error ===');
        console.log(msg);
    }
    
    // Find everything between "message" and the next key
    const fullMsgMatch = html.match(/"message":"((?:[^"\\]|\\.)*)"/g);
    if (fullMsgMatch) {
        fullMsgMatch.forEach((m, i) => {
            const decoded = m
                .replace(/\\u001b\[[0-9;]*m/g, '')
                .replace(/\\n/g, '\n')
                .replace(/\\"/g, '"')
                .replace(/\\\\/g, '\\');
            console.log(`\n=== Message ${i} ===`);
            console.log(decoded);
        });
    }
}

test();
