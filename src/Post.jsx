import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Post extends Component {
    state = {
        upvote: 0,
        downvote: 0
    }

    handleUpVote = () => {
        this.setState({
            upvote: this.state.upvote + 1,
            ...this.state.stateObj,
        })
      }
    
    handleDownVote = () => {
        this.setState({
            downvote: this.state.downvote + 1,
            ...this.state.stateObj,
        })
      }
    render() {
        return (
            <section className='post-container'>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <div className='reaction'>
                    <p onClick={this.handleUpVote}>❤️<span>{this.state.upvote}</span></p>
                    <p onClick={this.handleDownVote}>🤮<span>{this.state.downvote}</span></p>
                </div>
            </section>
        )
    }
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Post