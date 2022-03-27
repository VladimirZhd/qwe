import React from 'react'
import Layout from './component/layout/Layout';
import Logout from './component/modal_view/logout/Logout';
import Payments from './component/modal_view/payments/Payments';
import Profile from './component/modal_view/profile/Profile';
import Setting from './component/modal_view/setting/Setting';
import Personal from './component/modal_view/personal/Personal';

class App extends React.Component {
  render() {
    return (
      <>
        <div className='wrapper'>
          <Layout/>
          <div className="ad-pro-m-panel-overlay"></div>
          <Logout/>
          <div className="cor-w-panel ad-pro-m-panel">
              <div className="cor-w-panel__container">
                  <div className="cor-w-panel-header">
                      <span className="pro-t-hed-text"></span>
                      <button className="button__define">
                          <span>
                              <svg width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                <path fill="currentColor" fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414L9.414 12l6.293 6.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                          </span>
                      </button>
                      <button className="button__close">
                          <span>
                              <svg width="24px" height="24px" viewBox="0 0 24 24" role="presentation" focusable="false" aria-hidden="true">
                                <path fill="currentColor" fillRule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                          </span>
                      </button>
                  </div>
                  <Payments/>
                  <Profile/>
                  <Setting/>
                  <Personal/>
              </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
