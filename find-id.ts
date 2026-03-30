import mongoose from 'mongoose';
import Enrollment from './lib/models/Enrollment';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

async function f() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not found in env');
    process.exit(1);
  }
  await mongoose.connect(uri);
  const e = await Enrollment.findOne({ email: 'venkat@thefoundrys.com' }).sort({ createdAt: -1 });
  if (e) {
    console.log('ENROLL_ID=' + e._id);
  } else {
    console.log('ENROLL_ID=not_found');
  }
  process.exit(0);
}

f().catch(err => {
  console.error(err);
  process.exit(1);
});
