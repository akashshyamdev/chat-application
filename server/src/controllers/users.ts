import { Request, Response } from 'express';
import User from '../models/Users';

export async function signup(req: Request, res: Response) {
	try {
		const user = await User.create(req.body);

		res.status(201).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
}
