import React from 'react';

class Logout extends React.Component {
    render() {
        return(
            <div className="pro-m-layout">
                <div className="pro-d-c-dialog">
                    <div className="pro-d-c-dialog__container">
                        <span>Вы уверены, что хотите выйти?</span>
                    </div>
                    <div className="pro-d-c-dialog__footer">
                            <button className="button__module r83k undefined">
                                <span>Отмена</span>
                            </button>
                            <button className="button__module r83k agressor">
                                <a>
                                    <span>Выход</span>
                                </a>
                            </button>
                    </div>
                </div>
                <div className="pro-m-layout__overlay undefined"></div>
            </div>
        )
    }
}

export default Logout;