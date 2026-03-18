const path = require('path');
const razorpayPath = path.join(process.cwd(), 'node_modules', 'razorpay');
try {
    console.log('Checking path:', razorpayPath);
    const Razorpay = require(razorpayPath);
    console.log('Razorpay loaded from absolute path:', !!Razorpay);
} catch (e) {
    console.error('Error with absolute path:', e.message);
}
