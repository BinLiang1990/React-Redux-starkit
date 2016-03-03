/**
 * Created by EdenLiang on 2016/1/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Counter from './js/components/Counter'
import counter from './js/reducers/CounterReducer'
import * as ActionType from './js/constants/ActionType'

const store = createStore(counter);

function render() {
    ReactDOM.render(
        <Counter value={store.getState()} onIncrement={() => store.dispatch({ type: ActionType.increment })}
                 onDecrement={() => store.dispatch({ type: ActionType.decrement })}/>,
        document.getElementById('content')
    )
}

render()
store.subscribe(render)

//class MyComponent extends React.Component {
//    render() {
//        return <div>hello world1243</div>;
//    }
//}
//ReactDOM.render(<MyComponent />, document.getElementById('content'));
//
//
//export default MyComponent;