/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import {setTodoFilter} from '../constants/ActionType';
const todoShowType = (state = 'all', action)=> {
    switch (action) {
        case setTodoFilter:
            return action.showType;
        default:
            return state;
    }
}

export default todoShowType;