/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { combineReducers } from 'redux'
import { POST_REQUEST,POST_SUCCESS } from '../actions/test';

const rootReducer = combineReducers({
    Test
})

export default rootReducer

function Test(state = {isFetching: false, items: []}, action) {
    switch (action.type) {
        case POST_REQUEST:
            return Object.assign({}, state, {isFetching: true});
        case POST_SUCCESS:
            return Object.assign({}, state, {isFetching: false,items:action.items});
        default:
            return state
    }
}