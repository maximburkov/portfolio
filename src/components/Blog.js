import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddPost from './AddPost';
import Post from './Post'

class Blog extends Component {
    constructor(props) {
        super(props);
      }

    render() {
        const postsToRender = this.props.posts.map((post) => 
            <Post title={post.title} text={post.text}/>);

        return (
            <div>
                <h1>Blog</h1>
                <AddPost/>
                {postsToRender}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const posts = state.posts.posts;
    return { posts };
}

export default connect(mapStateToProps)(Blog);
