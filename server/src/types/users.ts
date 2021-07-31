import { Document } from 'mongoose';

export interface IUser extends Document {
	name: string;
	email: string;
	password: string;
	createdAt?: string;
	comparePassword: (plainPassword: string, correctPassword: string) => Promise<boolean>;
}
