import React, { ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import Http from 'services/Http';

interface FormData {
	name: string;
	email: string;
	password: string;
}

export default function GroupCreate() {
	const history = useHistory();

	// Form
	const [formData, setFormData] = React.useState<FormData>({ name: '', email: '', password: '' });

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const http = new Http('api/v1/groups');
		await http.create(formData);

		setTimeout(() => {
			history.push('/groups');
		}, 5000);
	};

	return (
		<main>
			<h1 className='text-center text-6xl'>Signup</h1>

			<form onSubmit={onSubmit}>
				<div>
					<label htmlFor='name'>Name</label>
					<input name='name' id='name-input' type='text' className='bg-gray-300' value={formData.name} onChange={onChange} />
				</div>

				<button type='submit' className='bg-gray-400'>
					Create Now!
				</button>
			</form>
		</main>
	);
}
