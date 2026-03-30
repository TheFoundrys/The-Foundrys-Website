import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICompassCourse extends Document {
    title: string;
    slug: string;
    domain: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const CompassCourseSchema: Schema<ICompassCourse> = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    domain: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
}, { timestamps: true, collection: 'courses' });

const CompassCourse: Model<ICompassCourse> = mongoose.models.CompassCourse || mongoose.model<ICompassCourse>('CompassCourse', CompassCourseSchema);
export default CompassCourse;
