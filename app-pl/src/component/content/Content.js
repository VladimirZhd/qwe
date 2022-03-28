import React from 'react';
import Header_plf from '../header/Header_plf';

const Content = ({ openContainer, modal }) => {
	return (
		<div className='layout__main'>
			<div className='layout__header'>
				<Header_plf openContainer={openContainer} />
			</div>
			<div className='layout__body'>
				<h1 style={{ margin: '0', height: '750px' }}>Меню</h1>
				<h1 style={{ margin: '0', height: '750px' }}>Главная</h1>
				<h1 style={{ margin: '0', height: '750px' }}>Выход</h1>
			</div>
			{/* <div className="layout__footer"></div> */}
		</div>
	);
};

export default Content;
