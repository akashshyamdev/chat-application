import { Model, model, Schema } from 'mongoose';
import { Message } from '../types/message';

const schema = new Schema<Message>(
	{
		content: {
			type: String,
			required: true,
		},
		user: {
			ref: 'User',
		},
		createdAt: {
			type: Date,
			default: Date.now(),
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Message = model<Message, Model<Message>>('Message', schema);

export default Message;
