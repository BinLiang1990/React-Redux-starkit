/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import { combineReducers } from 'redux';
import counter from './counter';

//const rootReducer = combineReducers({counter});
const rootReducer = counter;

export default rootReducer;