/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import {addTodo} from '../constants/ActionType';
const todos = (state = [], action) => {
    switch (action) {
        case addTodo:
            return [...state, {text: action.text, complete: false}];
        default :
            return state;
    }
};

export default todos;