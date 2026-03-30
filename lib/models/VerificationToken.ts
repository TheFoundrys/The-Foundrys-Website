import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVerificationToken extends Document {
  email: string;
  token: string;
  expiresAt: Date;
  verified: boolean;
}

const VerificationTokenSchema = new Schema<IVerificationToken>({
  email: { type: String, required: true },
  token: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  verified: { type: Boolean, default: false },
});

// Automatically delete expired tokens
VerificationTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const VerificationToken: Model<IVerificationToken> =
  mongoose.models.VerificationToken || mongoose.model<IVerificationToken>('VerificationToken', VerificationTokenSchema);

export default VerificationToken;
