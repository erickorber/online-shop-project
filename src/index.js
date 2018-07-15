import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { rootReducer } from './reducers.js';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();

const store = createStore(
	connectRouter(history)(rootReducer),
	compose(applyMiddleware(routerMiddleware(history), logger))
);

ReactDOM.render(<Provider store = {store}>
					<ConnectedRouter history={history}>
				     	<App />
				  	</ConnectedRouter>
				</Provider>,
				document.getElementById('root'));
registerServiceWorker();
