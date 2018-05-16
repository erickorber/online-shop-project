import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { loadPageFromHeaderLink } from './reducers.js';

const store = createStore(loadPageFromHeaderLink, applyMiddleware(logger));

ReactDOM.render(<Provider store = {store}>
				  <App />
				</Provider>,
				document.getElementById('root'));
registerServiceWorker();
