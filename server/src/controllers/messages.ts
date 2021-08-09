import Message from '../models/Message';

export async function getRecentMessages() {
	try {
		return Message.find().limit(10);
	} catch (err) {
		return err;
	}
}

export async function createMessage(msg) {
	try {
		const { text, userId } = msg;

		const message = await Message.create({ text, user: userId });

		return message;
	} catch (err) {
		return err;
	}
}
