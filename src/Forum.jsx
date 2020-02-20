import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const Forum = props => {
    // Create a function to sort posts depends on the numbers of vote
    return(
        <main>
            <h1>Forum Board</h1>
            <section className='forum-container'>
                {props.postList.length === 0
                    ? <p>There are no post yet. Add a new post!</p>
                    : props.postList.map(post =>
                    <Post
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        upvote={post.upvote}
                        downvote={post.downvote}
                        onUpVote={() => props.onUpVote()}
                        onDownVote={() => props.onDownVote()}
                    />
                )}
            </section>
        </main>
    )
}

Forum.propTypes = {
    postList: PropTypes.array,
    onUpVote: PropTypes.func,
    onDownVote: PropTypes.func
}

export default Forum