import React from 'react';
import ReactDOM from 'react-dom';
import './style/wrapper.scss';
import './style/vars.scss';
import './style/style.scss';
import '../src/component/layout/sidebar.scss';
import '../src/component/header/header.scss';
import '../src/component/header/header-plf.scss';
import '../src/component/content/content.scss';
import '../src/component/layout/layout.scss';
import '../src/component/modal_view/overlay.scss';
import '../src/component/modal_view/popup.scss';
import '../src/component/modal_view/logout/pop_logout.scss';
import '../src/component/modal_view/setting/block-setting.scss';
import '../src/component/modal_view/personal/personal.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
