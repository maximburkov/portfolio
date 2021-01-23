import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { updatePost } from '../redux/actions/posts'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const EditPost = ({ match, updatePost }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.posts.find(post => post.id == postId)
  )

  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);

  const onTitleChanged = e => setTitle(e.target.value)
  const onTextChanged = e => setText(e.target.value)

  const handleSavePost = () => {
      debugger;
      updatePost( { id: postId, title: title, text: text} );
  }

  return (
      <div>
            <h2>Edit post:</h2>
            <label>Title:</label>
            <input id="post-title" type="text" value={title} onChange= { onTitleChanged }></input>
            <label>Text:</label>
            <input id="post-text" type="text" value={text} onChange = { onTextChanged }></input>
            <Link onClick={handleSavePost} className="btn btn-primary" to="/Blog">Save</Link>
      </div>
  )
}

export default connect(
    null,
    { updatePost }
  )(EditPost);
