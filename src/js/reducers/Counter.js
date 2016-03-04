/**
 * Created by EdenLiang on 2016/3/3.
 */
'use strict';
import * as actionType from '../constants/ActionType';
//import {increment,decrement,mit} from '../constants/ActionType';

const counter = (state = 0, action) => {
    switch (action.type) {
        case actionType.increment:
            return state + 1;
        case actionType.decrement:
            return state - 1;
        case actionType.mit:
            return state * 2;
        default:
            return state;
    }
}

export default counter;