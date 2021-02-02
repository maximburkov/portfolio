import React, { Component } from 'react'
import { deletePostAsync } from '../redux/actions/posts'
import { connect } from "react-redux";
import { Link, Route } from 'react-router-dom'

class Post extends Component {
    handleDeletePost = () => {
        this.props.deletePostAsync(this.props.id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.text}</div>
                <Link className="btn btn-primary" to={`/Posts/${this.props.id}`}>View</Link>
                {this.props.isAdmin && 
                <>
                    <Link className="btn btn-secondary" to={`/EditPost/${this.props.id}`}>Edit</Link>
                    <button className="btn btn-danger" onClick={this.handleDeletePost}>Delete</button>
                </>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAdmin: state.users.user ? state.users.user.isAdmin : false
})

export default connect(
    mapStateToProps,
    { deletePostAsync }
  )(Post);
