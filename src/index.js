import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={createStore(appReducer, applyMiddleware(thunk))}>
		<App />
	</Provider>, 
		document.getElementById('root'));
registerServiceWorker();
