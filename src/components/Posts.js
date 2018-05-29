import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
 
class Posts  extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    console.log("from posts.js", this.props);
  }
 

  render() {
    const postItems = this.props.posts.map( post => {
      return(
        <div key={post.id}> 
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    
    return (
      <div>
        <h1>Hello from Posts</h1>
        { postItems }
      </div>
    )
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
