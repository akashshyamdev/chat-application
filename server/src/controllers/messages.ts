import { Request, Response } from 'express';
import Message from '../models/Message';

export async function createMessage(req: Request, res: Response) {
	try {
		const { text, userId } = req.body;

		const message = await Message.create({ text, userId });

		return res.status(201).json(message);
	} catch (err) {
		res.status(500).json({
			status: 'fail',
			err,
		});
	}
}
