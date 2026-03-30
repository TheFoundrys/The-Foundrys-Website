import mongoose from 'mongoose';
import Enrollment from './lib/models/Enrollment';
import * as dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function triggerVerification() {
  await mongoose.connect(MONGODB_URI!);
  
  const enrollment = await Enrollment.findOne({ email: 'venkat@thefoundrys.com' }).sort({ createdAt: -1 });
  
  if (!enrollment) {
    console.log('No enrollment found for venkat@thefoundrys.com');
    process.exit(1);
  }

  console.log(`Found enrollment: ${enrollment._id}`);
  
  // Simulate common verify route logic
  const razorpay_order_id = enrollment.razorpayOrderId;
  const razorpay_payment_id = 'pay_mock_' + Date.now();
  const razorpay_signature = 'mock_sig'; // Not real, but we can bypass verification in a test script or just call the API if we don't have real keys
  
  // Since we want to test the ACTUAL api route which sends mail, we'll try to use FETCH to call the local endpoint
  // But wait, the API route VERIFIES the signature. 
  // I'll modify the verification logic temporarily to allow a "test" signature or just call the email logic directly in a script.
  // Actually, the user wants to see the mail. Let's just create a script that calls the transporter.sendMail directly with the same template.
  
  console.log('Sending mock verification call to http://localhost:3000/api/payment/verify');
}

triggerVerification();
