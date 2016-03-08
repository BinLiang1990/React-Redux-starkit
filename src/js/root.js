/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
import React, { PropTypes } from 'react';
import { Router, Route,browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Home from './containers/home';
import BaseInfo from './containers/baseInfo';
import Menu from './containers/menu';
import LeftBar from './containers/leftbar';

const store = configureStore();

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