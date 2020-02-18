import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Header'
import Forum from './Forum'
import NotFound from './NotFound'
import CreatePost from './CreatePost'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      postId: '',
      upvote: 0,
      downvote: 0
    }
  }

  createPost = inputData => {
    this.setState({
      title: inputData.title,
      body: inputData.body,
      postId: inputData.id
    })
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
        {/* <p>{this.state.title}</p>
        <p>{this.state.body}</p>
        <p>{this.state.postId}</p>
        <p>Upvote{this.state.upvote}</p>
        <p>DownVote{this.state.downvote}</p>
        <button onClick={this.handleUpVote}>Like</button>
        <button onClick={this.handleDownVote}>Meh</button> */}
        <Header />
        <Switch>
          <Route exact path='/' component={Forum} />
          <Route path='/create-post' render={() => <CreatePost onCreateNewPost={this.createPost}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
