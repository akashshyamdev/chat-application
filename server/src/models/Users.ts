import { Schema, model, Model } from 'mongoose';
import { User } from '../types/users';
import { hash } from 'bcryptjs';

const schema = new Schema<User>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

schema.pre('save', async function (this: User) {
	this.password = await hash(this.password, 12);
});

const User = model<User, Model<User>>('User', schema);

export default User;
