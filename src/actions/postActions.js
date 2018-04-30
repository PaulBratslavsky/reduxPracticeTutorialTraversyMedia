import { FETCH_POSTS, NEW_POSTS } from './types';

export function fetchPost() {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts') 
      .then(response => response.json())
      .then(data => dispatch({
          type: FETCH_POSTS,
          payload: posts, 
      }));
    }
}