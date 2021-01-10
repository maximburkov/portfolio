import React from 'react'
import { useSelector } from 'react-redux'

export const ViewPost = ({ match }) => {
  debugger;
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.posts.find(post => post.id == postId)
  )

  debugger;

  return (
      <div>
        <h1>View post</h1>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
  )
}

