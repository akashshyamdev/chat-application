import { Schema, model, Model } from 'mongoose';
import { IUser } from '../types/users';
import { compare, hash } from 'bcryptjs';

const schema = new Schema<IUser>(
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
			select: false,
			required: true,
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Password Encryption
schema.pre('save', async function (this: IUser) {
	this.password = await hash(this.password, 12);
});

// Plain password compared to hashed password
schema.methods.comparePassword = async function (plainPassword: string, correctPassword: string) {
	return compare(plainPassword, correctPassword);
};

const User = model<IUser, Model<IUser>>('User', schema);

export default User;
