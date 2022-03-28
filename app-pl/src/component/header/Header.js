import React from 'react';

const Header = () => {
	return (
		<div className='com-header__buttons'>
			<button type='submit' className='button__log mr1'>
				<span>Login</span>
			</button>
			<button type='submit' className='button__reg'>
				<span>Registration</span>
			</button>
		</div>
	);
};

export default Header;
