/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
import React, { Component, PropTypes } from 'react';

class List extends Component {
    render() {
        const { click,isFetching } = this.props;
        return (<div>test异步请求
            <ul>{this.props.items.map(item=><li key={item.id}>{item.name}</li>)}</ul>
            <button onClick={click}>{`test ${isFetching}`}</button>
        </div>)
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired
}


export default List;