import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Forum from './Forum'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Switch>
        <Route exact path='/' component={Forum} />
      </Switch>
    </div>
  );
}

export default App;
