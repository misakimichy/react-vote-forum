import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const CreatePost = props => {
    // state = {
    //     redirect: false,
    // }
    
    let _title = null
    let _body = null
    let _submitted = false

    const handleNewForm = event => {
        event.preventDefault()
        props.onCreateNewPost({
            title: _title.value,
            body: _body.value,
            id: v4(),
            upvote: 0,
            downvote: 0
        })
        console.log(_submitted.value)
        _submitted = true
    }

    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     })
    // }

    const redirectHome = () => {
        if(_submitted.value) return <Redirect to='/' /> 
    }

    return(
        <main>
            <h1>Create New Post</h1>
            <form onSubmit={handleNewForm} className='form-container'>
                <input
                    type='text'
                    placeholder='Post title'
                    ref={input => {_title = input}}
                />
                <textarea
                    type='text'
                    placeholder='Post content'
                    ref={textarea => {_body = textarea}}
                ></textarea>
                {/* {this.renderRedirect()} */}
                <button type='submit'
                    onClick={redirectHome}
                >Post</button>
            </form>
        </main>
    )
}

CreatePost.propTypes = {
    onCreateNewPost: PropTypes.func   
}

export default CreatePost