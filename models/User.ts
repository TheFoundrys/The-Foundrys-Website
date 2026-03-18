// eslint-disable-next-line @typescript-eslint/no-require-imports
const mongoose = require('mongoose');
const { Schema } = mongoose;

export interface IUser {
    name: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    enrolledCourses: string[];
    isVerified: boolean;
    verificationToken?: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    enrolledCourses: [{ type: String }],
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
