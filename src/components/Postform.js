import React, { Component } from 'react'

class PostForms extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            title: 'title goese here',
            body: 'body text goes here',
        };

        this.onChange = this.onChange.bind(this);

    }

    onChange(event) {
        event.preventDefault(); 
        console.log('from on change event');
        this.setState({ [event.target.name]: event.target.value });
    }

  render() {
    return (
      <div>
        <h2>Hello from Form</h2>
        <form> 
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
