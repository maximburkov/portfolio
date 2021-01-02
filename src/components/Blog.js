import React, { Component } from 'react'
import Post from './Post'

export default class Blog extends Component {
    constructor(props) {
        super(props);
        
        var posts = [
            {
                "title" : "Shocking news",
                "text" : "It was yesterday..."
            },
            {
                "title" : "Good news",
                "text" : "Baby tiger was born in the zoo."
            }
        ];

        this.state = {
            posts: posts
        };
      }

    componentDidMount() {

    }
    

    render() {
        const postsToRender = this.state.posts.map((post) => 
            <Post title={post.title} text={post.text}/>);

        return (
            <div>
                <h1>Blog</h1>
                {postsToRender}
            </div>
        )
    }
}
