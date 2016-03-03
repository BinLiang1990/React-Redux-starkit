/**
 * Created by EdenLiang on 2016/3/3.
 */
'use strict';
import {increment,decrement} from '../constants/ActionType'
export default function Counter(state = 0, action) {
    switch (action.type) {
        case increment:
            return state + 1;
        case decrement:
            return state - 1;
        default:
            return state;
    }
}
