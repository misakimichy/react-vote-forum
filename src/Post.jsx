import React from 'react'
import PropTypes from 'prop-types'

const Post = props => {
    return (
        <section className='post-container'>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div className='button'>
                <p>❤️ {props.upvote}</p>
                <p>🤮 {props.downvote}</p>
            </div>
            <div className='button'>
                <button>Like</button>
                <button>Meh</button>
            </div>
        </section>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    upvote: PropTypes.number.isRequired,
    downvote: PropTypes.number.isRequired
}

export default Post