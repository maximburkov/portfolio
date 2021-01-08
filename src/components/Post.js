import React, { Component } from 'react'
import { deletePost } from '../redux/actions'
import { connect } from "react-redux";

class Post extends Component {
    handleDeletePost = () => {
        this.props.deletePost(this.props.id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.text}</div>
                <button onClick={this.handleDeletePost}>Delete</button>
            </div>
        )
    }
}

export default connect(
    null,
    { deletePost }
  )(Post);
