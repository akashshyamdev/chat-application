import { Schema, model, Model } from 'mongoose';
import { User } from '../types/users';

const schema = new Schema<User>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const User = model<User, Model<User>>('User', schema);

export default User;
