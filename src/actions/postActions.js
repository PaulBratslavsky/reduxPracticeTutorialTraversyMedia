import { FETCH_POSTS, NEW_POST } from './types';

export function fetchPosts() {
    return function(dispatch) {
        console.log('fetching');
        fetch('https://jsonplaceholder.typicode.com/posts') 
            .then(response => response.json())
            .then(data => dispatch({
                type: FETCH_POSTS,
                payload: data, 
        }));
    }
}

export function createPosts(postData) {
    return function(dispatch) {
        console.log('creating post');
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        }) 
        .then( response => response.json() )
        .then(post => dispatch({
            type: NEW_POST,
            payload: post, 
        }));
    }
}