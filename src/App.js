import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { v4 } from 'uuid'
import './App.css';
import Header from './Header'
import Forum from './Forum'
import NotFound from './NotFound'
import CreatePost from './CreatePost'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      masterPostList: {}
    }
  }

  handleAddingPost = newPost => {
    const postId = v4()
    const newMaterPostList = Object.assign({}, this.state.masterPostList, {
      [postId]: newPost,
    })
    this.setState({
      masterPostList: newMaterPostList
    })
  }

  // maybe this will fix: https://stackoverflow.com/questions/37662708/react-updating-state-when-state-is-an-array-of-objects
  // handleUpVote = postId => {
  //   const clickedPostKey = Object.keys(this.state.masterPostList).find(id => id === postId);
  //   let newMasterPost = Object.assign({}, this.state.masterPostList[clickedPostKey], {
  //     upvote: this.state.masterPostList[clickedPostKey].upvote++
  //   })

  //   this.setState({
  //     masterPostList: {
  //       [clickedPostKey]: {
  //         upvote: newMasterPost
  //       },
  //       ...this.state.masterPostList
  //     }
  //   })
  // }

  // Hasn't added updated functionality
  handleDownVote = postId => {
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
                            // onUpVote={this.handleUpVote}
                            onDownVote={this.handleDownVote}
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
