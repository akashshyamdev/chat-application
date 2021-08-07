import { Request, Response } from 'express';
import Group from '../models/Group';

export async function getAllGroups(req: Request, res: Response) {
	try {
		const groups = await Group.find();

		return res.status(200).json(groups);
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function getGroup(req: Request, res: Response) {
	try {
		const group = await Group.findById(req.params.id);

		return res.status(200).json(group);
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function createGroup(req: Request, res: Response) {
	try {
		const group = await Group.create(req.body);

		return res.status(200).json(group);
	} catch (error) {
		return res.status(500).json(error);
	}
}
