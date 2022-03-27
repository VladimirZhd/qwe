import React from 'react';

class Profile extends React.Component {
    render() {
        return(
            <div className="con-mod popup-profile profile-closing">
                <div className="pro-p-root__header">
                    <div className="pro-p-c-info__left">
                        <span className="pro-p-c-info__left-name">SONATi 💎</span>
                        <span className="pro-p-c-info__left-id-name">
                            ID&nbsp;
                            <span className="pro-p-root-c-id__value">45254685</span>
                        </span>
                    </div>
                    <div>
                        <div className="pro-c-avatar">
                            <svg className="pro-c-avatar-icon" width="80px" height="80px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                <path fill="currentColor" fillRule="evenodd" d="M12 3a5 5 0 00-3.456 8.613c-1.895.74-3.174 2.046-4.01 3.346a10.917 10.917 0 00-1.506 3.789l-.013.075-.003.023-.001.008v.005a1 1 0 001.979.285v-.007l.008-.042.036-.186a8.914 8.914 0 011.182-2.868C7.197 14.514 8.91 13 12 13c3.091 0 4.802 1.514 5.784 3.04a8.915 8.915 0 011.218 3.055l.006.035.001.007.001.005v.002a1 1 0 001.98-.285v-.006l-.002-.007-.003-.023a7.202 7.202 0 00-.063-.333 10.92 10.92 0 00-1.455-3.53c-.837-1.301-2.116-2.608-4.01-3.347A5 5 0 0012 3zM9 8a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="pro-p-root__body">
                    <div className="pro-p-root__group-cards">
                        <div className="pro-c-level__content">
                            <div className="tra-way__header">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 10.1L12 8l7 2.1V15l-7-2.1L5 15v-4.9z" fill="#0094FF"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 12.9l7 2.1v-4.9L12 8l-7 2.1V15l7-2.1zm-6.3 1.16l6.3-1.89 6.3 1.89v-3.44L12 8.73l-6.3 1.89v3.44z" fill="url(#prefix__prefix__paint0_linear)"/><defs><linearGradient id="prefix__prefix__paint0_linear" x1="2.667" y1="14.3" x2="7.307" y2="7.614" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs></svg>
                                    <span>Starter</span>
                                </span>
                            </div>
                            <div className="tra-way__body">
                                <div className="tra-way-c-progress">
                                    <span>Уровень 1</span>
                                </div>
                                <div className="tra-way-c-progress-right">
                                    <span>0/450 xp</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-p-root__group-cards">
                        <div className="pro-p-root__group-item__card mr1-6">
                            <span className="text__card">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" data-test="pro-p-root-c-tasks-icon"><path fill="currentColor" fillRule="evenodd" d="M2 5a2 2 0 012-2h13.118a1 1 0 110 2H4v14h14v-5.059a1 1 0 112 0V19a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm19.293-.707a1 1 0 111.414 1.414L12.561 15.854a1.5 1.5 0 01-2.122 0l-4.146-4.147a1 1 0 111.414-1.414l3.793 3.793 9.793-9.793z" clipRule="evenodd"></path></svg></span>
                            <span className="text__card small done countdown">
                                <span id="safeTimerDisplay"></span>
                            </span>
                            <span className="text__card">Ежедневные задания</span>
                            <span className="text__card done">0/3</span>
                        </div>
                        <div className="pro-p-root__group-item__card">
                            <span className="text__card">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true" data-test="pro-p-root-c-achievements-icon"><path fill="currentColor" fillRule="evenodd" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v15a1 1 0 01-1.606.795L12 16.685l-5.394 4.11A1 1 0 015 20V5zm12 0H7v12.98l4.394-3.347a1 1 0 011.212 0L17 17.981V5z" clipRule="evenodd"></path></svg></span>
                                <span></span>
                                <span className="text__card">Достижения</span>
                            <span className="text__card done">0/10</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pro-p-root__setting">
                        <button className="button__module btn__pro button__setting -open">
                            <span className="itemStartIcon">
                                <svg width="24px" height="24px" fill="currentColor" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" d="M10.986 21.97c-1.09 0-1.99-.88-2.02-1.96l-.02-.83-1.65-.95c.01.01-.05.01-.08.01l-.71.38c-.95.51-2.17.17-2.71-.76l-1.02-1.75a2.02 2.02 0 01.7-2.73l.72-.44v-1.89l-.73-.45c-.94-.57-1.25-1.8-.7-2.74l1.02-1.75c.54-.93 1.76-1.27 2.71-.76l.74.4c0-.01.06-.01.08-.01l1.61-.92.04-.85c.02-1.09.93-1.97 2.02-1.97h2.04c1.09 0 1.99.88 2.02 1.96l.02.83 1.65.95c-.01-.01.05-.01.08-.01l.71-.38c.95-.51 2.17-.17 2.71.76l1.02 1.75c.55.94.23 2.17-.7 2.73l-.72.44-.01 1.89.73.46c.93.57 1.25 1.79.7 2.73l-1.02 1.75c-.55.93-1.76 1.27-2.72.76l-.74-.4c.01.01-.05.01-.08.02l-1.6.92-.04.85a2.036 2.036 0 01-2.02 1.96h-2.03zm-3.72-5.74c.36 0 .72.09 1.02.26l1.64.94c.58.33 1 1.03 1.02 1.7l.02.83 2.07.01.05-.85c.02-.67.44-1.37 1.02-1.7l1.63-.93c.58-.33 1.4-.34 1.98-.02l.74.4 1.06-1.76-.73-.45c-.58-.35-.98-1.06-.98-1.73v-1.87c0-.67.4-1.38.98-1.73l.72-.44-1.01-1.77-.78.39c-.59.32-1.4.31-1.98-.03l-1.64-.93c-.58-.33-1-1.03-1.02-1.7l-.02-.84-2.07-.01-.05.85c-.02.67-.44 1.37-1.02 1.7l-1.64.94c-.58.33-1.39.34-1.98.02l-.74-.4-1.06 1.76.73.45c.57.35.97 1.06.97 1.73v1.87c0 .67-.4 1.38-.98 1.73l-.72.44 1.06 1.77.74-.4c.29-.16.63-.23.97-.23z"></path>
                                    <path fill="currentColor" d="M12.006 15.99c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                            </span>
                            <span className="item_setting">Настройки</span>
                            <span className="button-module-itemIconFake"></span>
                        </button>
                    </div>
                    <div>
                        <button className="button__module btn__pro a button__logout">
                            <span className="itemStartIcon">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" d="M5 5a2 2 0 012-2h9a2 2 0 012 2v1.667a1 1 0 11-2 0V5H7v14h9v-1.667a1 1 0 112 0V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5zm14.48 3.273a1 1 0 011.413.04l2.834 3a1 1 0 010 1.374l-2.834 3a1 1 0 11-1.454-1.374L20.68 13H14a1 1 0 110-2h6.68l-1.24-1.313a1 1 0 01.04-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                            <span className="item_setting">Выход</span>
                            <span className="button-module-itemIconFake"></span>
                            {/* <button className="toggle-theme">Сменить фон тёмный )</button> */}
                        </button>
                    </div>
                </div>
            </div> 
        )
    }
}
            
export default Profile;