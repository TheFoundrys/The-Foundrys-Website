try {
    console.log('CWD:', process.cwd());
    console.log('Razorpay resolve:', require.resolve('razorpay'));
} catch (e) {
    console.error('Error:', e.message);
}
