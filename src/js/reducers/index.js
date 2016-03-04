/**
 * Created by EdenLiang on 2016/3/4.
 */
'use strict';
import {combineReducers} from 'redux';
import todos  from './todos';
import todoShowType from './todoShowType';

const index = combineReducers({todos, todoShowType});

export default index;