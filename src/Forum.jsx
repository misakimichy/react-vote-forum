import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const Forum = props => {
    // Create a function to sort posts depends on the numbers of vote
    return(
        <main>
            <h1>Forum Board</h1>
            {/* <h1>{props.title}</h1> */}
        </main>
    )
}

Forum.propTyles = {
    postList: PropTypes.func
}

export default Forum