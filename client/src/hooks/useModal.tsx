import { useState } from 'react';

export default function useModal() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleModal = () => {
		setIsVisible(!isVisible);
	};

	return {
		isVisible,
		toggleModal,
	};
}
