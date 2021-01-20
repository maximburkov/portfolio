import React from 'react'
import { useSelector } from 'react-redux'
import { updatePost } from '../redux/actions'
import { connect } from "react-redux";

const EditPost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.posts.find(post => post.id == postId)
  )

  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);

  const onTitleChanged = e => setTitle(e.target.value)
  const onTextChanged = e => setText(e.target.value)

  const handleSavePost = () => {
      updatePost( { id: postId, title: title, text: text} );
  }

  return (
      <div>
            <h2>Edit post:</h2>
            <label>Title:</label>
            <input id="post-title" type="text" onChange= { onTitleChanged }></input>
            <label>Text:</label>
            <input id="post-text" type="text" onChange = { onTextChanged }></input>
            <button onClick={ handleSavePost }>Create</button>
      </div>
  )
}

export default connect(
    null,
    { updatePost }
  )(EditPost);