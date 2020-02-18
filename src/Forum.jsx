import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

const Forum = props => {
    // Create a function to sort posts depends on the numbers of vote
    return(
        <div>
            <h1>Forum Board</h1>
            {/* <ul>
                {props..map(id =>
                    <li key={id}>
                        <Post id={id} />
                    </li>
                )}
            </ul> */}
        </div>
    )
}

Forum.propTyles = {
    postList: PropTypes.func
}

export default Forum