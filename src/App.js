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
      masterPostList: []
    }
  }

  handleAddingPost = newPost => {
    this.setState({
      masterPostList: [...this.state.masterPostList, newPost]
    })
  }

  // maybe this will fix: https://stackoverflow.com/questions/37662708/react-updating-state-when-state-is-an-array-of-objects
  handleUpVote = () => {
    this.setState({
        upvote: this.state.upvote + 1,
        ...this.state.stateObj,
    })
    console.log('Up!!!!!')
  }

  handleDownVote = () => {
    this.setState({
        downvote: this.state.downvote + 1,
        ...this.state.stateObj,
    })
    console.log('Mehhhhh')
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact path='/'
            render={() => <Forum
                            postList={this.state.masterPostList}
                            onUpVote={() => this.handleUpVote()}
                            onDownVote={() => this.handleDownVote()}
                          />}
          />
          <Route
            path='/create-post'
            render={() => <CreatePost onAddNewPost={this.handleAddingPost}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
