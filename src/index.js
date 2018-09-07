import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './state/store';

injectGlobal`
  body {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
}
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
registerServiceWorker();
