import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { loadPageFromHeaderLink } from './reducers.js';


const store = createStore(loadPageFromHeaderLink);

ReactDOM.render(<Provider store = {store}>
				  <App />
				</Provider>,
				document.getElementById('root'));
registerServiceWorker();
