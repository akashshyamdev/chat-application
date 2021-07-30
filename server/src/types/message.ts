import { Document } from 'mongoose';
import { User } from './users';

export interface Message extends Document {
	user: User;
	createdAt?: Date;
	content: string;
}
