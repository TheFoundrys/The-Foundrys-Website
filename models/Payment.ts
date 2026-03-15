import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
    name: string;
    email: string;
    phone: string;
    courseName: string;
    courseId: string;
    amount: number;
    currency: string;
    razorpayOrderId: string;
    razorpayPaymentId?: string;
    razorpaySignature?: string;
    status: 'pending' | 'captured' | 'failed';
    timestamp: Date;
}

const PaymentSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    courseName: { type: String, required: true },
    courseId: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    razorpayOrderId: { type: String, required: true, unique: true },
    razorpayPaymentId: { type: String },
    razorpaySignature: { type: String },
    status: { 
        type: String, 
        enum: ['pending', 'captured', 'failed'], 
        default: 'pending' 
    },
    timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Payment || mongoose.model<IPayment>('Payment', PaymentSchema);
