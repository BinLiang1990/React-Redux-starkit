/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import List from '../../components/list';
import { fetchPosts,postRequest } from '../../actions/test';

const Test = ({dispatch,items,isFetching}) => {
    return (<List items={items} click={()=> dispatch(fetchPosts()) } isFetching={isFetching} />)
}

const testProps = (state) => {
    return {
        isFetching: state.Test.isFetching,
        items: state.Test.items
    };
}
export default connect(testProps)(Test);