import { Request, Response } from 'express';
import Group from '../models/Group';

export async function createGroup(req: Request, res: Response) {
	try {
		const group = await Group.create(req.body);

		return res.status(200).json(group);
	} catch (error) {
		return res.status(500).json(error);
	}
}
