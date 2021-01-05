import React, { Component } from 'react'
import { connect } from 'react-redux';
import AddPost from './AddPost';
import Post from './Post'

class Blog extends Component {
    constructor(props) {
        super(props);
        
        // var posts = [
        //     {
        //         "title" : "Shocking news",
        //         "text" : "It was yesterday..."
        //     },
        //     {
        //         "title" : "Good news",
        //         "text" : "Baby tiger was born in the zoo."
        //     }
        // ];

        // this.state = {
        //     posts: posts
        // };
      }

    // componentDidMount() {

    // }
    

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
    const posts = state.posts;
    return { posts };
}

export default connect(mapStateToProps)(Blog);
