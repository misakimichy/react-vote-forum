import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'j

class CreatePost extends Component {
    state = {
        toHome: false,
        text: ''
    }
    // Create Ref to a class component ref: https://reactjs.org/docs/refs-and-the-dom.html
    _title = React.createRef()
    _body = React.createRef()
    
    handleNewForm = event => {
        event.preventDefault()
        this.props.onAddNewPost({
            title: this._title.value,
            body: this._body.value,
            upvote: 1,
            downvote: 0
        })

        this.setState({
            toHome: true
        })
    }
    
    render() { 
        if(this.state.toHome){
            return <Redirect to='/' />
        } 
        
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
                    <button type='submit'
                    >Post</button>
                </form>
            </main>
        )
    }
}

CreatePost.propTypes = {
    onAddNewPost: PropTypes.func
}

export default CreatePost