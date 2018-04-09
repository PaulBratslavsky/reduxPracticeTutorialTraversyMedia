import React, { Component } from 'react'

class PostForms extends Component {
    constructor(props) {
        super(props); 

        this.state = {
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
            title: this.state.title,
            body: this.state.body,
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }) 
        .then( response => response.json() )
        .then( data => console.log(data) )

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

export default PostForms;
