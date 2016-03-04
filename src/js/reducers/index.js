/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { combineReducers } from 'redux'
//import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/actionType'
//const { SHOW_ALL } = VisibilityFilters;
import todos from './todos';
import visibilityFilter from './todoShowType';

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp