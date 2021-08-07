import { PlusCircleIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Http from 'services/Http';
import { Group } from 'types/group';

export default function GroupList() {
	const history = useHistory();

	// API state
	const [groups, setGroups] = useState<Group[]>([]);

	useEffect(() => {
		(async () => {
			const http = new Http('api/v1/groups');
			const groups = await http.getAll();

			setGroups(groups);
		})();
	}, []);

	return (
		<main>
			<div className='flex flex-row justify-between'>
				<h1>Group List</h1>

				<PlusCircleIcon width='40' height='40' className='cursor-pointer' onClick={() => history.push('/groups/create')} />
			</div>

			<div>
				{groups.map((group) => (
					<div>{group.name}</div>
				))}
			</div>
		</main>
	);
}
