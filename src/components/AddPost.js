import React, { Component } from 'react';
import { addPost } from '../redux/actions';
import { connect } from "react-redux";

class AddPost extends Component {
    constructor(props) {
        super(props);
      }

    handleAddPost = () => {
        this.props.addPost("some payload");
    }
    
    render() {
        return (
            <div>
                <h2>Add new post:</h2>
                <label>Title:</label>
                <input type="text"></input>
                <label>Text:</label>
                <input type="text"></input>
                <button onClick={this.handleAddPost }>Create</button>
            </div>
        )
    }
}

export default connect(
    null,
    { addPost }
  )(AddPost);

//export default AddPost;
