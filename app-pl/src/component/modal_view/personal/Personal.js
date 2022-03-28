import React from 'react';

const Personal = () => {
	return (
		<div className='con-mod'>
			<div className='content-title'>
				<span>Личные данные</span>
			</div>
			<div className='pro-p-setting__group'>
				<div className='pro-p-setting__group_has_grow'>
					<span>Личные</span>
				</div>
				<button className='button__module pro-p-setting__group-item'>
					<span className='btn-mod-item-content'>
						<span className='pro_settings_name'>Имя</span>
					</span>
				</button>
				<div className='pro-p-root__setting'>
					<button className='button__module btn__pro button__setting -open'>
						<label className='pro-p-personal-c-upload-avatar__label'>
							<span className='itemStartIcon'>
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
										d='M12 3a5 5 0 00-3.456 8.613c-1.895.74-3.174 2.046-4.01 3.346a10.917 10.917 0 00-1.506 3.789l-.013.075-.003.023-.001.008v.005a1 1 0 001.979.285v-.007l.008-.042.036-.186a8.914 8.914 0 011.182-2.868C7.197 14.514 8.91 13 12 13c3.091 0 4.802 1.514 5.784 3.04a8.915 8.915 0 011.218 3.055l.006.035.001.007.001.005v.002a1 1 0 001.98-.285v-.006l-.002-.007-.003-.023a7.202 7.202 0 00-.063-.333 10.92 10.92 0 00-1.455-3.53c-.837-1.301-2.116-2.608-4.01-3.347A5 5 0 0012 3zM9 8a3 3 0 116 0 3 3 0 01-6 0z'
										clipRule='evenodd'></path>
								</svg>
							</span>
							<input
								type='file'
								className='hidden'
								accept='image/jpeg,image/jpg,image/png,image/gif,image/webp'
							/>
							<span className='item_setting'>
								Загрузить аватар
							</span>
							<span className='button-module-itemIconFake'></span>
						</label>
					</button>
				</div>
			</div>
			<div className='pro-p-setting__group'>
				<div className='pro-p-setting__group_has_grow'>
					<span>Контакты</span>
				</div>
				<button className='button__module pro-p-setting__group-item'>
					<span className='btn-mod-item-content'>
						<span className='pro_settings_name'>Email</span>
					</span>
					<svg
						className='pro-c-status_failed'
						width='24px'
						height='24px'
						viewBox='0 0 24 24'
						role='presentation'
						focusable='false'
						aria-hidden='true'>
						<path
							fill='currentColor'
							fillRule='evenodd'
							d='M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z'
							clipRule='evenodd'></path>
						<path
							fill='currentColor'
							d='M11 16a1 1 0 111.998 0A1 1 0 0111 16z'></path>
						<path
							fill='currentColor'
							fillRule='evenodd'
							d='M12 13a1 1 0 01-1-1V8a1 1 0 112 0v4a1 1 0 01-1 1z'
							clipRule='evenodd'></path>
					</svg>
				</button>
				<button className='button__module pro-p-setting__group-item'>
					<span className='btn-mod-item-content'>
						<span className='pro_settings_name'>
							Номер телефона
						</span>
					</span>
					<svg
						className='pro-c-status_failed'
						width='24px'
						height='24px'
						viewBox='0 0 24 24'
						role='presentation'
						focusable='false'
						aria-hidden='true'>
						<path
							fill='currentColor'
							fillRule='evenodd'
							d='M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z'
							clipRule='evenodd'></path>
						<path
							fill='currentColor'
							d='M11 16a1 1 0 111.998 0A1 1 0 0111 16z'></path>
						<path
							fill='currentColor'
							fillRule='evenodd'
							d='M12 13a1 1 0 01-1-1V8a1 1 0 112 0v4a1 1 0 01-1 1z'
							clipRule='evenodd'></path>
					</svg>
				</button>
			</div>
			<div className='pro-p-setting__group'>
				<div className='pro-p-setting__group_has_grow'>
					<span>Социальные сети</span>
				</div>
				<div className='pro-p-root__setting'>
					<button className='button__module btn__pro button__setting -open'>
						<span className='itemStartIcon'>
							<svg
								width='24px'
								height='24px'
								viewBox='0 0 24 24'
								role='presentation'
								focusable='false'
								aria-hidden='true'>
								<path
									fill='currentColor'
									d='M20.942 18.107a11.84 11.84 0 01-1.191 2.114c-.627.881-1.14 1.492-1.535 1.83-.613.557-1.27.841-1.973.858-.504 0-1.113-.142-1.822-.43-.71-.286-1.364-.428-1.961-.428-.627 0-1.299.142-2.017.428-.72.288-1.3.438-1.743.452-.675.029-1.347-.264-2.018-.88-.428-.368-.963-1-1.605-1.895-.688-.955-1.254-2.063-1.697-3.327-.475-1.364-.713-2.686-.713-3.965 0-1.466.32-2.73.963-3.789A5.615 5.615 0 015.65 7.061a5.484 5.484 0 012.729-.76c.535 0 1.237.164 2.11.485.87.322 1.43.486 1.674.486.183 0 .804-.192 1.856-.573.996-.353 1.835-.5 2.524-.442 1.864.149 3.265.874 4.196 2.18-1.667.998-2.492 2.394-2.476 4.185.015 1.395.528 2.556 1.537 3.478.457.428.967.759 1.534.994-.123.352-.253.69-.39 1.013zM16.666 1.504c0 1.094-.405 2.115-1.212 3.06-.974 1.123-2.152 1.773-3.43 1.67A3.356 3.356 0 0112 5.82c0-1.05.463-2.174 1.286-3.092.41-.465.932-.852 1.566-1.16.632-.304 1.23-.473 1.792-.501.016.146.023.292.023.437z'></path>
							</svg>
						</span>
						<span className='item_setting'>Привязать Apple</span>
						<span className='button-module-itemIconFake'></span>
					</button>
				</div>
				<div className='pro-p-root__setting'>
					<button className='button__module btn__pro button__setting -open'>
						<span className='itemStartIcon'>
							<svg
								width='24px'
								height='24px'
								viewBox='0 0 24 24'
								role='presentation'
								focusable='false'
								aria-hidden='true'>
								<path
									fill='#227bef'
									fillRule='evenodd'
									d='M12 1C5.925 1 1 5.955 1 12.067 1 17.591 5.023 22.17 10.281 23v-7.734H7.488v-3.199h2.793V9.63c0-2.774 1.643-4.306 4.155-4.306 1.204 0 2.462.216 2.462.216v2.724h-1.387c-1.366 0-1.792.853-1.792 1.728v2.076h3.05l-.487 3.2h-2.563V23C18.977 22.17 23 17.591 23 12.067 23 5.955 18.075 1 12 1z'
									clipRule='evenodd'></path>
							</svg>
						</span>
						<span className='item_setting'>Привязать Facebook</span>
						<span className='button-module-itemIconFake'></span>
					</button>
				</div>
				<div className='pro-p-root__setting'>
					<button className='button__module btn__pro button__setting -open'>
						<span className='itemStartIcon'>
							<svg
								width='24px'
								height='24px'
								viewBox='0 0 24 24'
								role='presentation'
								focusable='false'
								aria-hidden='true'>
								<path
									fill='#FBBB00'
									d='M5.876 14.295l-.766 2.859-2.799.059A10.952 10.952 0 011 12c0-1.824.444-3.545 1.23-5.059l2.492.457 1.092 2.476a6.54 6.54 0 00.06 4.421h.002z'></path>
								<path
									fill='#518EF8'
									d='M22.807 9.945a10.998 10.998 0 01-3.922 10.633l-3.138-.16-.444-2.774a6.556 6.556 0 002.82-3.347h-5.881v-4.35h10.565v-.002z'></path>
								<path
									fill='#28B446'
									d='M18.885 20.578A10.951 10.951 0 0112 23a10.996 10.996 0 01-9.687-5.787l3.563-2.918a6.54 6.54 0 009.426 3.35l3.583 2.933z'></path>
								<path
									fill='#F14336'
									d='M19.02 3.532L15.458 6.45a6.541 6.541 0 00-9.64 3.423L2.232 6.94A10.997 10.997 0 0112 1c2.669 0 5.116.95 7.02 2.532z'></path>
							</svg>
						</span>
						<span className='item_setting'>Привязать Google</span>
						<span className='button-module-itemIconFake'></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Personal;
