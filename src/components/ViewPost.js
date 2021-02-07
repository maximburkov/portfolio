import React from 'react'
import { useSelector } from 'react-redux'
import Comments from './Comments'

export const ViewPost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector(state =>
    state.posts.posts.find(post => post.id == postId)
  )

  return (
      <div>
        <h1>View post</h1>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <div>
          <Comments postId={postId} />
        </div>
      </div>
  )
}

