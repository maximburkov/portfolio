import React, { Component } from 'react'
import { addPost } from '../redux/actions/posts';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class CreatePost extends Component {
    handleAddPost = () => {
        const title = document.getElementById("post-title").value;
        const text = document.getElementById("post-text").value;

        this.props.addPost({title, text});
    }

    render() {
        return (
            <div>
                <label>Title:</label>
                <input id="post-title" type="text"></input>
                <label>Text:</label>
                <input id="post-text" type="text"></input>
                <Link onClick={this.handleAddPost } className="btn btn-primary" to="/Blog">Create new post</Link>
            </div>
        )
    }
}

export default connect(
    null,
    { addPost }
  )(CreatePost);
