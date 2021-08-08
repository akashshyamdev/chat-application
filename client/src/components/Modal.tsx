import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
	heading: string;
	subHeading: string;
	isVisible: boolean;
	metadata: any;
	hideModal: () => void;
	onAllow: (metadata: ModalProps['metadata']) => void;
}

export default function Modal({ isVisible, hideModal, heading, metadata, subHeading, onAllow }: ModalProps) {
	const allowed = () => {
		hideModal();
		onAllow(metadata);
	};

	return isVisible
		? createPortal(
				<>
					{/* Overlay */}
					<div className='h-full w-full z-40 left-0 opacity-50 fixed top-0 bg-gray-400'></div>

					{/* Modal */}
					<div
						aria-modal={true}
						aria-hidden={true}
						tabIndex={-1}
						role='dialog'
						className='flex justify-center left-0 overflow-x-hidden overflow-y-auto fixed top-1/4 w-full z-50'
						style={{ outlineWidth: '0' }}
					>
						<div className='items-center bg-white rounded flex flex-col m-7 max-w-lg relative z-30 pt-7'>
							<div className='items-center flex flex-col px-10 py-4 mb-3'>
								<h3 className='text-4xl font-sans mb-2'>{heading}</h3>
								<h5 className='text-gray-400 text-center text-2xl'>{subHeading}</h5>
							</div>

							<div className='mt-2 w-full'>
								<button className='text-red-600 py-3 w-full border-t border-solid hover:bg-gray-50 border-gray-100' onClick={allowed}>
									Yes
								</button>

								<button
									className='text-purple-700 py-3 w-full border-t border-solid hover:bg-gray-50 border-gray-100'
									onClick={hideModal}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</>,
				document.body
		  )
		: null;
}
