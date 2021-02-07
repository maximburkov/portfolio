import React from 'react';
import { connect, useSelector } from 'react-redux';
import Comment from './Comment';

const Comments = ({ postId }) => {
    const comments = useSelector(state => state.comments.comments);
    //const posts = useSelector(state => state.comments.comments.filter(c => c.postId === postId))
    
    const commentsToRender = comments.map(comment => 
        <Comment 
            key = { comment.id }
            text = { comment.text }
            author = { comment.authorLogin }
            dateTime ={ comment.dateCreated } />);

    return (
        <div>
            { commentsToRender }
        </div>
    )
}

export default connect( null, null )(Comments);

