import React, { Component } from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class CreatePost extends Component {
    state = {
        redirect: false,
        _title: null,
        _body: null

    }

    handleNewForm = event => {
        event.preventDefault()
        this.props.onCreateNewPost({
            title: this._title.value,
            body: this._body.value,
            id: v4(),
            upvote: 0,
            downvote: 0
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        return(
            <main>
                <h1>Create New Post</h1>
                <form onSubmit={this.handleNewForm} className='form-container'>
                    <input
                        type='text'
                        placeholder='Post title'
                        ref={input => {this._title = input}}    
                    />
                    <textarea
                        type='text'
                        placeholder='Post content'
                        ref={textarea => {this._body = textarea}}
                    ></textarea>
                    {this.renderRedirect()}
                    <button type='submit' onClick={this.setRedirect}>Post</button>
                </form>
            </main>
        )
    }
}

CreatePost.propTypes = {
    onCreateNewPost: PropTypes.func   
}

export default CreatePost