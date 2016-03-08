/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
import React, { PropTypes } from 'react';
import { Router, Route,browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import ConfigureStore from './../store/configureStore';
import Home from './home';
import BaseInfo from './baseInfo';
import Menu from './menu';
import LeftBar from './leftbar';

const store = ConfigureStore();

const App = (props) => {
    return (
        <div>
            <LeftBar />
            {props.children}
        </div>
    );
}


const Root = () => {
    return (
        <div>
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route component={App}>
                        <Route path="/" component={Home}>1</Route>
                        <Route path="baseinfo" component={BaseInfo}>1</Route>
                        <Route path="menu" component={Menu}>2</Route>
                    </Route>
                </Router>
            </Provider>
        </div>
    );
};


export  default Root