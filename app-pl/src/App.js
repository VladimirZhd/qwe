import React from 'react';
import Layout from './component/layout/Layout';
import Logout from './component/modal_view/logout/Logout';
import Container from './component/container/Container';

const App = () => {
	const closeContainer = (event) => {
		const overlay = document.getElementById('overlay');
		const container = document.getElementById('modal-container');
		overlay.classList.remove('ad-pro-m-panel-overlay_opened');
		container.classList.remove('cor-w-panel_opened');
	};

	const openContainer = (data) => {
		const overlay = document.getElementById('overlay');
		const container = document.getElementById('modal-container');
		overlay.classList.add('ad-pro-m-panel-overlay_opened');
		container.classList.add('cor-w-panel_opened');
	};

	return (
		<>
			<div className='wrapper'>
				<Layout openContainer={openContainer} />
				<div
					className='ad-pro-m-panel-overlay'
					id='overlay'
					onClick={closeContainer}></div>
				<Logout />
				<Container closeContainer={closeContainer} />
			</div>
		</>
	);
};

export default App;
