import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IEnrollment extends Document {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  courseName: string;
  amount: number;
  currency: 'INR' | 'USD';
  razorpayOrderId: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  status: 'pending' | 'paid' | 'failed';
  couponCode?: string;
  discountAmount?: number;
  experienceLevel?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EnrollmentSchema = new Schema<IEnrollment>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, enum: ['INR', 'USD'], required: true },
    razorpayOrderId: { type: String, required: true, unique: true },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    couponCode: { type: String },
    discountAmount: { type: Number, default: 0 },
    experienceLevel: { type: String },
  },
  { timestamps: true }
);

// Compound index for checking duplicate enrollments
EnrollmentSchema.index({ email: 1, courseId: 1 });

// Prevent model recompilation in Next.js hot reload
const Enrollment: Model<IEnrollment> =
  mongoose.models.Enrollment || mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema);

export default Enrollment;
