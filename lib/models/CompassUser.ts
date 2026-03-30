import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICompassUser extends Document {
    name: string;
    email: string;
    username: string;
    phoneNumber?: string;
    password?: string;
    role: string;
    status: 'active' | 'pending' | 'suspended' | 'banned';
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const CompassUserSchema: Schema<ICompassUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    username: { type: String, unique: true, sparse: true, lowercase: true },
    phoneNumber: { type: String },
    password: { type: String }, // Hashed
    role: { type: String, default: 'learner' },
    status: { type: String, enum: ['active', 'pending', 'suspended', 'banned'], default: 'active' },
    isVerified: { type: Boolean, default: true },
}, { timestamps: true, collection: 'users' });

const CompassUser: Model<ICompassUser> = mongoose.models.CompassUser || mongoose.model<ICompassUser>('CompassUser', CompassUserSchema);
export default CompassUser;
