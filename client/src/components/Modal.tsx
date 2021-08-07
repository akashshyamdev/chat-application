import React, { MouseEvent } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
	heading: string;
	subHeading: string;
	isVisible: boolean;
	hideModal: (e: MouseEvent<HTMLOrSVGElement>) => void;
	onAllow: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Modal({ isVisible, hideModal, heading, subHeading, onAllow }: ModalProps) {
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
						<div className='items-center bg-white rounded flex flex-col m-7 max-w-lg relative z-30'>
							<div className='items-center flex flex-col px-7 py-4'>
								<h3 className='mb-1'>{heading}</h3>
								<h5 className='text-gray-400 text-center'>{subHeading}</h5>
							</div>

							<button onClick={onAllow}></button>
							<button className='text-purple-700 border-t mb-4 border-solid border-gray-100 mt-2' onClick={hideModal}>
								Close
							</button>
						</div>
					</div>
				</>,
				document.body
		  )
		: null;
}
