import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/ducks/auth';

interface FormData {
	email: string;
	password: string;
}

export default function Login() {
	// Form
	const [formData, setFormData] = React.useState<FormData>({ email: '', password: '' });

	// Redux
	const dispatch = useDispatch();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(login(formData));
	};

	return (
		<main>
			<h1 className='text-center text-6xl'>Login</h1>

			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor='email-input'>Email</label>
					<input name='email' id='email-input' type='text' className='bg-gray-300' value={formData.email} onChange={onChange} />
				</div>

				<div>
					<label htmlFor='email-input'>Password</label>
					<input
						name='password'
						id='password-input'
						type='password'
						className='bg-gray-300'
						value={formData.password}
						onChange={onChange}
					/>
				</div>

				<button type='submit' className='bg-gray-400'>
					Login Now!
				</button>
			</form>
		</main>
	);
}
