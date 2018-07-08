import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import globalStyles from './index.styles';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`${globalStyles}`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
