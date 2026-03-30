import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICompassTransaction extends Document {
    invoiceId: string;
    user: mongoose.Types.ObjectId;
    courses: mongoose.Types.ObjectId[];
    amount: number;
    utr: string; // Razorpay Payment ID
    status: 'successful' | 'failed' | 'pending';
    paymentDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

const CompassTransactionSchema: Schema<ICompassTransaction> = new Schema({
    invoiceId: { type: String, required: true, unique: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'CompassUser',
        required: true,
        index: true
    },
    courses: [{
        type: Schema.Types.ObjectId,
        ref: 'CompassCourse',
        required: true
    }],
    amount: { type: Number, required: true },
    utr: { type: String, required: true }, // Razorpay Payment ID
    status: {
        type: String,
        enum: ['successful', 'failed', 'pending'],
        default: 'successful'
    },
    paymentDate: { type: Date, default: Date.now },
}, { timestamps: true, collection: 'transactions' });

const CompassTransaction: Model<ICompassTransaction> = mongoose.models.CompassTransaction || mongoose.model<ICompassTransaction>('CompassTransaction', CompassTransactionSchema);
export default CompassTransaction;
