/**
 * Created by EdenLiang on 2016/1/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Counter from './js/components/Counter'
import rootReducer from './js/reducers/rootReducer'
import * as ActionType from './js/constants/ActionType'

const store = createStore(rootReducer);

function render() {
    ReactDOM.render(
        <Counter value={store.getState()} onIncrement={() => store.dispatch({ type: ActionType.increment })}
                 onDecrement={() => store.dispatch({ type: ActionType.decrement })}
                 mit={()=>store.dispatch({type: ActionType.mit})}/>,
        document.getElementById('content')
    )
}

render();
store.subscribe(render);

//class MyComponent extends React.Component {
//    render() {
//        return <div>hello world1243</div>;
//    }
//}
//ReactDOM.render(<MyComponent />, document.getElementById('content'));
//
//
//export default MyComponent;