import React from 'react'
import { useSelector } from 'react-redux'

export const ViewPost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  return (
      <div>
        <h1>View post</h1>
        <h2>{post.title}</h2>
        <p className="post-content">{post.text}</p>
      </div>
  )
}

