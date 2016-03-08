/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    counter
})

export default rootReducer
function counter(state = 0, action) {
    switch (action.type) {
        default:
            return state
    }
}