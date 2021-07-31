import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import User from '../models/Users';
import { IUser } from '../types/users';

function createSendToken(user: IUser, res: Response) {
	const token = sign({ id: user.id }, process.env.JWT_SECRET!, {});

	// TODO: Implement cookies

	res.status(200).json({
		token,
		// @ts-ignore
		...user._doc,
	});
}

export async function signup(req: Request, res: Response) {
	try {
		const user = await User.create(req.body);
		console.log('signup');

		return createSendToken(user, res);
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function login(req: Request, res: Response) {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email }).select('+password');

		if (!user || !(await user.comparePassword(password, user.password))) {
			return res.status(401).json({ error: 'Email or Password is incorrect' });
		}

		return createSendToken(user, res);
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function getAllUsers(req: Request, res: Response) {
	try {
		const users = await User.find();

		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json(error);
	}
}

export async function deleteUser(req: Request, res: Response) {
	try {
		const user = await User.findByIdAndDelete(req.params.id);

		return res.status(204).json(user);
	} catch (error) {
		return res.status(500).json(error);
	}
}
