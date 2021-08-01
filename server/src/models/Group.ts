import { ObjectId } from 'mongodb';
import { model, Schema } from 'mongoose';

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	members: [
		{
			type: ObjectId,
			ref: 'User',
		},
	],
	messages: [
		{
			type: ObjectId,
			ref: 'Message',
		},
	],
});

const Group = model('Group', schema);

export default Group;
