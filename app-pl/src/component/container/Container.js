import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Payments from '../modal_view/payments/Payments';
import Profile from '../modal_view/profile/Profile';
import Setting from '../modal_view/setting/Setting';
import Personal from '../modal_view/personal/Personal';

const Container = ({ closeContainer }) => {
	const [backVisible, setBackVisible] = useState(false);
	const url = useLocation();

	const navigator = useNavigate();
	const handleClick = (e) => {
		navigator(-1);
	};

	useEffect(() => {
		if (url.pathname.includes('settings')) {
			setBackVisible(true);
		} else {
			setBackVisible(false);
		}
	}, [url]);
	return (
		<>
			<div className='cor-w-panel ad-pro-m-panel' id='modal-container'>
				<div className='cor-w-panel__container'>
					<div className='cor-w-panel-header'>
						<span className='pro-t-hed-text'></span>
						{backVisible && (
							<button
								className='button__define button__define-opened'
								id='back-button'
								onClick={handleClick}>
								<span>
									<svg
										width='24px'
										height='24px'
										viewBox='0 0 24 24'
										role='presentation'
										focusable='false'
										aria-hidden='true'>
										<path
											fill='currentColor'
											fillRule='evenodd'
											d='M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z'
											clipRule='evenodd'></path>
									</svg>
								</span>
							</button>
						)}
						<button
							className='button__close'
							onClick={closeContainer}>
							<span>
								<svg
									width='24px'
									height='24px'
									viewBox='0 0 24 24'
									role='presentation'
									focusable='false'
									aria-hidden='true'>
									<path
										fill='currentColor'
										fillRule='evenodd'
										d='M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z'
										clipRule='evenodd'></path>
								</svg>
							</span>
						</button>
					</div>
					<Routes>
						<Route path='/profile' element={<Profile />} />
						<Route path='/payments' element={<Payments />} />
						<Route path='/profile/settings' element={<Setting />} />
						<Route
							path='/profile/settings/personal'
							element={<Personal />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
};

export default Container;
