/**
 * Created by EdenLiang on 2016/3/3.
 */
'use strict';
//import React, { Component, PropTypes } from 'react'
import  React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        //this.mit = this.mit.bind(this);
    }

    //mit() {
    //    this.props.mit();
    //}

    render() {
        const { value, onIncrement, onDecrement, mit } = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={mit}>* 2</button>
            </p>
        )
    }

}

export default Counter

