import React from 'react';
import { connect, useSelector } from 'react-redux';
import Comment from './Comment';
import { fetchComments } from '../redux/actions/comments';

const Comments = ({ postId, 
    comments, 
    fetchComments }) => {
    const commentsForPost = comments.filter(c => c.postId === postId);

    React.useEffect(() => {
        fetchComments();
    })
    
    const commentsToRender = commentsForPost.map(comment => 
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

const mapStateToProps = state => ({
    comments: state.comments.comments
})

export default connect(mapStateToProps, { fetchComments })(Comments);

