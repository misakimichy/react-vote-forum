import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { v4 } from 'uuid'
import './App.css';
import Forum from './Forum'
import NotFound from './NotFound'
import CreatePost from './CreatePost'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      postId: v4(),
      upvote: 0,
      downvote: 0
    }
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
      <div className="App">
      <button onClick={this.handleUpVote}>Like</button>
      <button onClick={this.handleDownVote}>Meh</button>
        <p>{this.state.title}</p>
        <p>{this.state.body}</p>
        <p>Upvote{this.state.upvote}</p>
        <p>DownVote{this.state.downvote}</p>
        <p>{this.state.postId}</p>
        <Switch>
          <Route exact path='/' component={Forum} />
          <Route path='/create-post' component={CreatePost} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
