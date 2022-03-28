/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userMinAva from '../../image/ava.jpg';

const Header_plf = ({ openContainer }) => {
	const [flag, setFlag] = useState('');

	const handleClick = (e) => {
		// if (!e.target.name) {
		// 	setFlag(e.target.parentElement.name);
		// } else {
		// 	setFlag(e.target.name);
		// }
		openContainer('');
	};

	// useEffect(() => {
	// 	if (flag) {
	// 		openContainer(flag);
	// 	}
	// 	setFlag('');
	// }, [flag]);

	return (
		<div className='com-header-platform'>
			<div className='header__bar-items'>
				<div className='button__account-balance'>
					<button className='account-balance'>
						<div className='accaunt-balance__title'>
							<span>USD ACCOUNT</span>
						</div>
						<div className='accaunt-balance__amount'>
							<span>USD&nbsp;0.00</span>
						</div>
					</button>
				</div>
				<div className='button__replenish-profile'>
					<button
						className='account-replenish'
						onClick={handleClick}
						name='payments'>
						{/* <span className='payments-text'>Payments</span> */}
						<Link to='/payments'>Payments</Link>
						<svg
							className='payments-icon'
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
					</button>
					<button
						className='button-profile'
						name='profile'
						onClick={handleClick}>
						<Link to='/profile'>
							<img
								className='profile-icon'
								src={userMinAva}
								alt='profile avatar'
							/>
						</Link>
					</button>
				</div>
				{/* <Header/> */}
			</div>
		</div>
	);
};

export default Header_plf;
