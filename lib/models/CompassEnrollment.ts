import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICompassEnrollment extends Document {
    userId: mongoose.Types.ObjectId;
    courseId: mongoose.Types.ObjectId;
    status: 'active' | 'completed' | 'dropped';
    progress: Map<string, boolean>;
    lastAccessedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

const CompassEnrollmentSchema: Schema<ICompassEnrollment> = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Refers to 'users' collection in the same DB
        required: true,
        index: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course', // Refers to 'courses' collection in the same DB
        required: true,
        index: true
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'dropped'],
        default: 'active'
    },
    progress: {
        type: Map,
        of: Boolean,
        default: {}
    },
    lastAccessedAt: { type: Date, default: Date.now },
}, { timestamps: true, collection: 'enrollments' });

// Ensure a user can enroll in a course only once
CompassEnrollmentSchema.index({ userId: 1, courseId: 1 }, { unique: true });

const CompassEnrollment: Model<ICompassEnrollment> = mongoose.models.CompassEnrollment || mongoose.model<ICompassEnrollment>('CompassEnrollment', CompassEnrollmentSchema);
export default CompassEnrollment;
