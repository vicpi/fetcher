import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import { getStore } from './store';

ReactDOM.render(
    <Provider store={getStore()}>
      <App />
    </Provider>, 
    document.getElementById('root')
)