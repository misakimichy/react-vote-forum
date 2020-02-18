import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/create-post'>Create Post</Link>
            </nav>
        </header>
    )
}

export default Header