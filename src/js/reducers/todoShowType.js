/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/actionType';
const { SHOW_ALL } = VisibilityFilters;
const todoShowType = (state = SHOW_ALL, action)=> {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default todoShowType;