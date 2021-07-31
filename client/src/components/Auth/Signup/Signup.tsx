import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/ducks/auth';

interface FormData {
	name: string;
	email: string;
	password: string;
}

export default function Signup() {
	// Form
	const [formData, setFormData] = React.useState<FormData>({ name: '', email: '', password: '' });

	// Redux
	const dispatch = useDispatch();

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(signup(formData));
	};

	return (
		<main>
			<h1 className='text-center text-6xl'>Signup</h1>

			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor='name'>Name</label>
					<input name='name' id='name-input' type='text' className='bg-gray-300' value={formData.name} onChange={onChange} />
				</div>

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
					Signup Now!
				</button>
			</form>
		</main>
	);
}
