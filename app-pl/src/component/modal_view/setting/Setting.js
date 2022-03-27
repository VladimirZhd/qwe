import React from 'react';

class Setting extends React.Component {
    render() {
        return(
            <div className="con-mod popup-setting">
                <div className="content-title">
                    <span>Настройки</span>
                </div>
                <div className="pro-p-setting__group">
                    <div className="pro-p-setting__group_has_grow">
                        <span>Профиль</span>
                    </div>
                    <button className="button__module pro-p-setting__group-item">
                        <span className="btn-mod-item-content">
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 3a5 5 0 00-3.456 8.613c-1.895.74-3.174 2.046-4.01 3.346a10.917 10.917 0 00-1.506 3.789l-.013.075-.003.023-.001.008v.005a1 1 0 001.979.285v-.007l.008-.042.036-.186a8.914 8.914 0 011.182-2.868C7.197 14.514 8.91 13 12 13c3.091 0 4.802 1.514 5.784 3.04a8.915 8.915 0 011.218 3.055l.006.035.001.007.001.005v.002a1 1 0 001.98-.285v-.006l-.002-.007-.003-.023a7.202 7.202 0 00-.063-.333 10.92 10.92 0 00-1.455-3.53c-.837-1.301-2.116-2.608-4.01-3.347A5 5 0 0012 3zM9 8a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                            <span className="porsonal_content">
                                <span>Личные данные</span>
                                <span className="personal_data">Имя и контакты</span>
                            </span>
                        </span>
                    </button>
                    {/* <button className="button__module pro-p-setting__group-item">
                        <span className="btn-mod-item-content">
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 5a3 3 0 100 6 3 3 0 000-6zM7 8a5 5 0 1110 0A5 5 0 017 8z" clipRule="evenodd"></path>
                                    <path fill="currentColor" fillRule="evenodd" d="M4.99 19.144v-.007l.008-.042.036-.186a8.915 8.915 0 011.182-2.868C7.197 14.514 8.91 13 12 13c1.875 0 3.217.555 4.194 1.296l1.21-1.592C16.074 11.694 14.306 11 12 11c-3.909 0-6.198 1.986-7.466 3.96a10.917 10.917 0 00-1.506 3.788l-.013.075-.003.023-.001.008v.004L4 19l-.99-.141a1 1 0 001.98.285z" clipRule="evenodd"></path>
                                    <path fill="currentColor" d="M21.735 14.322a1 1 0 01-.058 1.414l-5.09 4.688a1.5 1.5 0 01-2.032 0l-2.233-2.057a1 1 0 011.355-1.471l1.894 1.744 4.751-4.376a1 1 0 011.413.059z"></path>
                                </svg>
                            </span>
                            <span className="porsonal_content">
                                <span>Верификация аккаунта</span>
                                <span className="personal_data">Полная проверка и подтверждение личности</span>
                            </span>
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon warning" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" clipRule="evenodd"></path>
                                    <path fill="currentColor" d="M11 16a1 1 0 111.998 0A1 1 0 0111 16z"></path>
                                    <path fill="currentColor" fillRule="evenodd" d="M12 13a1 1 0 01-1-1V8a1 1 0 112 0v4a1 1 0 01-1 1z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </span>
                    </button> */}
                    <button className="button__module pro-p-setting__group-item">
                        <span className="btn-mod-item-content">
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 2h-3v1a1 1 0 01-1 1h-4a1 1 0 01-1-1V2H6v20h12V2zM6 0a2 2 0 00-2 2v20a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H6zm6 18a1 1 0 100 2 1 1 0 000-2z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <span className="porsonal_content">
                                <span>Двухфакторная аутентификация</span>
                                <span className="personal_data">Подключите дополнительные меры безопасности</span>
                            </span>
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon warning" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" clipRule="evenodd"></path>
                                    <path fill="currentColor" d="M11 16a1 1 0 111.998 0A1 1 0 0111 16z"></path>
                                    <path fill="currentColor" fillRule="evenodd" d="M12 13a1 1 0 01-1-1V8a1 1 0 112 0v4a1 1 0 01-1 1z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </span>
                    </button>
                    <button className="button__module pro-p-setting__group-item password">
                        <span className="btn-mod-item-content">
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16 9V6a4 4 0 10-8 0v3h8zM6 6v3H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V11a2 2 0 00-2-2h-1V6A6 6 0 006 6zm-1 5h14v10H5V11zm8 7v-4h-2v4h2z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <span className="porsonal_content">
                                <span>Пароль</span>
                                <span className="personal_data">Сохраните вашу учётную запись в безопасности</span>
                            </span>
                        </span>
                    </button>
                </div>
                <div className="pro-p-setting__group">
                    <div className="pro-p-setting__group_has_grow">
                        <span>Конфигурация</span>
                    </div>
                    <button className="button__module pro-p-setting__group-item" id="popup-appearance">
                        <span className="btn-mod-item-content">
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M7 2a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5H7zm13 10V7a3 3 0 00-3-3H7a3 3 0 00-3 3v8h1.441l1.495-2.429A1.2 1.2 0 017.958 12h3.402l2.333-5.055a1.2 1.2 0 012.147-.066L18.597 12H20zM4 17h1.888a1.2 1.2 0 001.022-.571L8.405 14h3.467a1.2 1.2 0 001.09-.697l1.876-4.066 2.225 4.132a1.2 1.2 0 001.056.631H20v3a3 3 0 01-3 3H7a3 3 0 01-3-3z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="porsonal_content">
                                <span>Внешний вид</span>
                                <span className="personal_data">Язык, темы, и звуки</span>
                            </span>
                        </span>
                    </button>
                    <button className="button__module pro-p-setting__group-item">
                        <span className="btn-mod-item-content">
                            <span className="btn-mod-item-content__icon">
                                <svg className="setting_icon" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M14.842 8.058l-1.845 5.774a1.2 1.2 0 01-1.143.835H8.507L6.972 18.27a1.2 1.2 0 01-1.104.73H3a1 1 0 110-2h2.34l1.534-3.604a1.2 1.2 0 011.104-.73h3.292l2.37-7.42c.348-1.085 1.87-1.121 2.268-.054l2.786 7.475H21a1 1 0 110 2h-2.861a1.2 1.2 0 01-1.124-.781l-2.173-5.828z" clipRule="evenodd">
                                </path>
                            </svg>
                            </span>
                            <span className="porsonal_content">
                                <span>Игра</span>
                                <span className="personal_data">Сделки</span>
                            </span>
                        </span>
                    </button>
                    <button className="button__module pro-p-setting__group-item">
                        <span className="btn-mod-item-content">
                            <span className="btn-mod-item-content__icon">
                                
                                <svg className="setting_icon" width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M5.217 8.358a6.797 6.797 0 0113.566 0L19.277 16H20a1 1 0 110 2h-4a4 4 0 01-8 0H4a1 1 0 110-2h.722l.495-7.642zM6.727 16h10.546l-.486-7.512a4.797 4.797 0 00-9.575 0L6.726 16zM14 18h-4a2 2 0 104 0z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="porsonal_content">
                                <span>Уведомления</span>
                                <span className="personal_data">Специальные акции, уведомления для игр и push-уведомления</span>
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Setting;
