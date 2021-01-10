import React, { Component } from 'react'
import { deletePost } from '../redux/actions'
import { connect } from "react-redux";
import { ViewPost } from './ViewPost'
import { Link, Route } from 'react-router-dom'

class Post extends Component {
    handleDeletePost = () => {
        this.props.deletePost(this.props.id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.text}</div>
                <Link className="btn btn-primary" to={`/posts/${this.props.id}`}>View</Link>
                <Route exact path="/Posts/:postId" component={ViewPost} />
                <button onClick={this.handleDeletePost}>Delete</button>
            </div>
        )
    }
}

export default connect(
    null,
    { deletePost }
  )(Post);
