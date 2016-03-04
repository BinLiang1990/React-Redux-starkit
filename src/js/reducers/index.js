/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { combineReducers } from 'redux'
//import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/actionType'
//const { SHOW_ALL } = VisibilityFilters;
import todos from './todos';
import visibilityFilter from './todoShowType';

//function visibilityFilter(state = SHOW_ALL, action) {
//    switch (action.type) {
//        case SET_VISIBILITY_FILTER:
//            return action.filter
//        default:
//            return state
//    }
//}
//
//function todos(state = [], action) {
//    switch (action.type) {
//        case ADD_TODO:
//            return [
//                ...state,
//                {
//                    text: action.text,
//                    completed: false
//                }
//            ]
//        case COMPLETE_TODO:
//            return [
//                ...state.slice(0, action.index),
//                Object.assign({}, state[action.index], {
//                    completed: true
//                }),
//                ...state.slice(action.index + 1)
//            ]
//        default:
//            return state
//    }
//}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp