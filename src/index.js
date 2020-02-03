import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import serviceReducer from './stores/reducers/serviceReducer';
import authReducer from './stores/reducers/authReducer';
import singleServiceReducer from './stores/reducers/singleServiceReducer';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const allReducers = combineReducers({
    services: serviceReducer,
    auth: authReducer,
    service: singleServiceReducer
});

let store = createStore(allReducers, applyMiddleware(thunk)); // createStore takes a reducer as an argument

const app = <Provider store={store}><App /></Provider>

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
