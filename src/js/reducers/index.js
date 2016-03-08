/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { combineReducers } from 'redux'
import { postRequest,postSuccess } from '../actions/test';

const rootReducer = combineReducers({
    Test
})

export default rootReducer

function Test(state = {isFetching: false, items: []}, action) {
    switch (action.type) {
        case 'postRequest':
            return Object.assign(({}, state, {isFetching: true}));
        case 'postSuccess':
            return Object.assign(({}, state, {isFetching: false,items:action}));
        default:
            return state
    }
}