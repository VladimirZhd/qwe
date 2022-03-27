import React from 'react';

class Header extends React.Component {
    render() {
        return(
                <div className="com-header__buttons">
                    <button type="submit" className="button__log mr1">
                        <span>Login</span>
                    </button>
                    <button type="submit" className="button__reg">
                        <span>Registration</span>
                    </button>
                </div>
        )
    }
}

export default Header;