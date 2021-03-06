import React, { Component } from 'react'
import { connect } from 'react-redux';
import Post from './Post'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import CreatePost from './CreatePost'
import { fetchPosts } from '../redux/actions/posts';

class Blog extends Component {
    constructor(props) {
        super(props);
      }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        const postsToRender = this.props.posts.map((post) => 
            <Post key={post.id} id={post.id} title={post.title} text={post.text}/>);

        const isAdmin = this.props.isAdmin;      

        return (
            <div>
                {isAdmin &&
                <div>
                    <Link className="btn btn-primary" to="/CreatePost">Create new post</Link>
                    <Route path="/CreatePost" component={CreatePost} />
                </div>
                }
                {postsToRender}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const posts = state.posts.posts;
    const isAdmin = state.users.user ? state.users.user.isAdmin : false;
    return { posts, isAdmin };
}

export default connect(mapStateToProps, {fetchPosts} )(Blog);
