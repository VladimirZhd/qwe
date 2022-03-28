import React from 'react';

const Payments = () => {
	return (
		<div className='con-mod'>
			<div className='pro-p-root__setting'>
				<button className='button__module btn__pro button__setting payments payments-color'>
					<span className='itemStartIcon'>
						<svg
							width='24px'
							height='24px'
							fill='currentColor'
							viewBox='0 0 24 24'
							role='presentation'
							focusable='false'
							aria-hidden='true'>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M17 4.775a1 1 0 00-1.316-.949L9.162 6H17V4.775zM19 6V4.775a3 3 0 00-3.949-2.846l-11 3.666A3 3 0 002 8.442V17a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zM5 8a1 1 0 00-1 1v8a1 1 0 001 1h14a1 1 0 001-1V9a1 1 0 00-1-1H5z'
								clipRule='evenodd'></path>
							<path
								fill='currentColor'
								d='M16 13a1 1 0 111.998 0A1 1 0 0116 13z'></path>
						</svg>
					</span>
					<span className='item_setting'>Пополнить</span>
					<span className='button-module-itemIconFake'></span>
				</button>
			</div>
			<div className='pro-p-root__setting'>
				<button className='button__module btn__pro button__setting payments'>
					<span className='itemStartIcon'>
						<svg
							width='24px'
							height='24px'
							fill='currentColor'
							viewBox='0 0 24 24'
							role='presentation'
							focusable='false'
							aria-hidden='true'>
							<path
								fill='currentColor'
								fillRule='evenodd'
								d='M17 4.775a1 1 0 00-1.316-.949L9.162 6H17V4.775zM19 6V4.775a3 3 0 00-3.949-2.846l-11 3.666A3 3 0 002 8.442V17a3 3 0 003 3h.5a1 1 0 100-2H5a1 1 0 01-1-1V9a1 1 0 011-1h14a1 1 0 011 1v8a1 1 0 01-1 1h-.5a1 1 0 100 2h.5a3 3 0 003-3V9a3 3 0 00-3-3zm-7 5a1 1 0 011 1v6.599l1.296-1.286a1 1 0 011.408 1.42l-3 2.977a1 1 0 01-1.408 0l-3-2.977a1 1 0 011.408-1.42L11 18.599V12a1 1 0 011-1z'
								clipRule='evenodd'></path>
						</svg>
					</span>
					<span className='item_setting'>Вывести</span>
					<span className='button-module-itemIconFake'></span>
				</button>
			</div>
			<div className='pro-p-root__setting'>
				<button className='button__module btn__pro button__setting payments'>
					<span className='itemStartIcon'>
						<svg
							width='24px'
							height='24px'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12 4a8 8 0 11-5.65 13.66 1 1 0 00-1.42 1.42A10 10 0 102.83 8L2.2 6.49a1 1 0 00-1.84.79l1.78 4.13a1 1 0 001.32.53l4.13-1.78a1 1 0 10-.79-1.84l-2.32 1A8.03 8.03 0 0112 4z'
								fill='currentColor'></path>
							<path
								d='M12 7a1 1 0 011 1v4.59l1.91 1.91a1 1 0 01-1.41 1.41l-2.15-2.14a1.2 1.2 0 01-.35-.85V8a1 1 0 011-1z'
								fill='currentColor'></path>
						</svg>
					</span>
					<span className='item_setting'>Операции</span>
					<span className='button-module-itemIconFake'></span>
				</button>
			</div>
		</div>
	);
};

export default Payments;
