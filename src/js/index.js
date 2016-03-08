/**
 * Created by EdenLiang on 2016/1/20.
 */
//require('core-js/fn/object/assign');
import 'core-js/fn/object/assign'
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
//import { createStore } from 'redux'
//import { Provider } from 'react-redux';
//import index from './js/reducers/index';
//import App from './js/containers/app';


//const store = createStore(index);
//ReactDOM.render(<Provider store={store}>
//    <App />
//</Provider>, document.getElementById('content'));
ReactDOM.render(<Root />, document.getElementById('content'));
