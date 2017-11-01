import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'rebass';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider
    theme={{
      font:
        '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
    }}
    style={{ lineHeight: 1.35 }}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
