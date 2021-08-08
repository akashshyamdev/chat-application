import { useState } from 'react';

export default function useModal<T>(meta: T) {
	const [metadata, setMetadata] = useState<T>(meta);
	const [isVisible, setIsVisible] = useState(false);

	const toggleModal = () => {
		setIsVisible(!isVisible);
	};

	return {
		metadata,
		isVisible,
		toggleModal,
		setMetadata,
	};
}
