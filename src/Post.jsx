import React from 'react'
import PropTypes from 'prop-types'
import VoteControler from './VoteControler';

const Post = props => {

    return (
        <section className='post-container'>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div className='reaction'>
                <VoteControler />
            </div>
        </section>
    )
}

Post.propTypes = {
    postId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDownVote: PropTypes.func
}

export default Post