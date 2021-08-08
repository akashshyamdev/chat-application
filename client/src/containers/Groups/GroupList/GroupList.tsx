import { PlusCircleIcon, TrashIcon } from '@heroicons/react/outline';
import useModal from 'hooks/useModal';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Http from 'services/Http';
import { Group } from 'types/group';
import Modal from '../../../components/Modal';

export default function GroupList() {
	const history = useHistory();

	// API state
	const [groups, setGroups] = useState<Group[]>([]);

	// Component state
	const { isVisible, toggleModal, metadata, setMetadata } = useModal<{ id: string }>({ id: '' });

	useEffect(() => {
		(async () => {
			const http = new Http('api/v1/groups');
			const groups = await http.getAll();

			setGroups(groups);
		})();
	}, []);

	const deleteGroup = async ({ id }: { id: string }) => {
		const http = new Http('api/v1/groups');
		await http.delete(id);

		setGroups(groups.filter((group) => group?._id !== id));
	};

	return (
		<main>
			<div className='flex flex-row justify-between'>
				<h1>Group List</h1>

				<PlusCircleIcon width='40' height='40' className='cursor-pointer' onClick={() => history.push('/groups/create')} />
			</div>

			<div>
				{groups.map((group, i) => (
					<div className='flex items-center' key={i}>
						<h3 className='mr-5'>{group.name}</h3>

						<TrashIcon
							width='40'
							height='40'
							className='cursor-pointer inline-block'
							onClick={() => {
								setMetadata({ id: group._id });
								toggleModal();
							}}
						/>
					</div>
				))}
			</div>

			<Modal
				isVisible={isVisible}
				heading='Delete Group'
				onAllow={deleteGroup}
				hideModal={toggleModal}
				metadata={metadata}
				subHeading='Are you sure you want to delete this?'
			/>
		</main>
	);
}
