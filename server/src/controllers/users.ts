import { IUser } from '../types/users';
import { sign } from 'jsonwebtoken';
import { Request, Response } from 'express';
import User from '../models/Users';

function createSendToken(user: IUser, res: Response) {
	const token = sign({ id: user.id }, process.env.JWT_SECRET!, {});

	const cookieOptions = {
		expires: new Date(Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES_IN!) * 24 * 60 * 60 * 1000),
		httpOnly: true,
		secure: false,
	};

	if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
	if (process.env.NODE_ENV === 'production') cookieOptions.httpOnly = false;

	res.cookie('jwt', token, cookieOptions);

	res.status(200).json({
		token,
		// @ts-ignore
		...user._doc,
	});
}

export async function signup(req: Request, res: Response) {
	try {
		const user = await User.create(req.body);

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
