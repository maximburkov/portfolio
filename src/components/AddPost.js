import React, { Component } from 'react';
import { addPost, fetchPosts } from '../redux/actions';
import { connect } from "react-redux";

class AddPost extends Component {
    constructor(props) {
        super(props);
      }

    handleAddPost = () => {
        const title = document.getElementById("post-title").value;
        const text = document.getElementById("post-text").value;

        this.props.addPost({title, text});
    }

    performAsyncOPeration = () => {
        this.props.fetchPosts();
    };
    
    render() {
        return (
            <div>
                <h2>Add new post:</h2>
                <label>Title:</label>
                <input id="post-title" type="text"></input>
                <label>Text:</label>
                <input id="post-text" type="text"></input>
                <button onClick={this.handleAddPost }>Create</button>
                <button onClick={this.performAsyncOPeration }>Async</button>
            </div>
        )
    }
}

export default connect(
    null,
    { addPost, fetchPosts }
  )(AddPost);
