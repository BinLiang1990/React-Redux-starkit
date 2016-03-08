/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LeftBar = () => {
    return (<div>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/baseinfo">baseinfo</Link></li>
            <li><Link to="/menu">menu</Link></li>
        </ul>
    </div>)
}


export default LeftBar;

