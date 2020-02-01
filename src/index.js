import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import serviceReducer from './stores/reducers/serviceReducer';
import authReducer from './stores/reducers/authReducer';
import { Provider } from 'react-redux';

const allReducers = combineReducers({
    services: serviceReducer,
    auth: authReducer
});

let store = createStore(allReducers); // createStore takes a reducer as an argument

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
