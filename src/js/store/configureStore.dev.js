/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { persistState } from 'redux-devtools';
import DevTools from '../containers/devTools';

//const createStoreWithMiddleware = applyMiddleware(
//    thunkMiddleware
//)(createStore);
//
//export default function configureStore(initialState) {
//    return createStoreWithMiddleware(rootReducer, initialState);
//}
const enhancer = compose(
    applyMiddleware(thunkMiddleware),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}
