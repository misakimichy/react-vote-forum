import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
    return (
        <section className='post-container'>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div className='reaction'>
                <p onClick={props.onUpVote}><span role='img' aria-label='like'>❤️</span>{props.upvote}</p>
                <p onClick={props.onDownVote}><span role='img' aria-label='meh'>🤮</span>{props.downvote}</p>
            </div>
        </section>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    upvote: PropTypes.number.isRequired,
    downvote: PropTypes.number.isRequired,
    onUpVote: PropTypes.func,
    onDownVote: PropTypes.func
}

export default Post