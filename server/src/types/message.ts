import { Document } from 'mongoose';
import { IUser } from './users';

export interface Message extends Document {
	user: IUser;
	createdAt?: Date;
	content: string;
}

export interface CreateMessageArg {
	userId: string;
}
