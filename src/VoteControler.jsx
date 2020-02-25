import React from 'react';

class VoteControler extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            upvotes: 0,
            downvotes: 0
        };
        this.handleUpvoteClick = this.handleUpvoteClick.bind(this);
        this.handleDownvoteClick = this.handleDownvoteClick.bind(this);
    }

    handleUpvoteClick() {
        this.setState({
            upvotes: this.state.upvotes + 1,
        });
    }
    
    handleDownvoteClick() {
        this.setState({
            downvotes: this.state.downvotes - 1,
        });
    }

    render() {
        return (
            <div>
                <p onClick={this.handleUpvoteClick}><span role='img' aria-label='like'>❤️</span>{this.state.upvotes}</p>
                <p onClick={this.handleDownvoteClick}><span role='img' aria-label='like'>🤮</span>{this.state.downvotes}</p>
            </div>
        );
    }
}

export default VoteControler;