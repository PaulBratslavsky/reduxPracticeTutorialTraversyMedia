import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postActions';


class PostForms extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            //id: 1000,
            title: 'title goese here',
            body: 'body text goes here',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(event) {
        console.log('from on change event');
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault(); 

        const post = {
            //id: this.state.id,
            title: this.state.title,
            body: this.state.body,
        };
        // CAll ACTION
        this.props.createPosts(post);
    }

  render() {
    return (
      <div>
        <h2>Hello from Form</h2>
        <form onSubmit={this.onSubmit}> 
            <div>
                <label>Title</label><br />
                <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>    
            </div>
            <br />
            <div>
                <label>Body</label><br />
                <textarea name="body" onChange={this.onChange} value={this.state.body}/>    
            </div>
            <br />
            <button type="submit">Submit</button> 

        </form>
      </div>
    )
  }

}

PostForms.propTypes =  {
    createPosts: PropTypes.func.isRequired     
};

export default connect(null, { createPosts })(PostForms);
