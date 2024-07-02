import { Schema, model } from 'mongoose';
import { TSocialProfile } from './social.interface';

const SocialProfileSchema: Schema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

export const SocialProfile = model<TSocialProfile>('SocialProfile', SocialProfileSchema);
