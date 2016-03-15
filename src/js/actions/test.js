/**
 * Created by EdenLiang on 2016/3/8.
 */
'use strict';
import fetch from 'isomorphic-fetch'

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const postFailure = 'postFailure';

function receivePost(json) {
    return {type: POST_SUCCESS, items: json}
}

export function postRequest() {
    return {
        type: POST_REQUEST
    }
}

export function fetchPosts() {
    return (dispatch, getState) => {
        return dispatch(()=> {
            dispatch(postRequest());
            return fetch('http://121.42.165.52:1505/user/list')
                .then(response => response.json())
                .then(json => dispatch(receivePost(json)))
        })
    }
}




