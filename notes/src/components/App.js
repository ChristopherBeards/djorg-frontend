import React, { Component } from 'react';
import '../styles/App.css';
import NoteList from './NoteList';
import Header from './Header'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path ="/" component={NoteList} />
            <Route exact path ="/create" component={CreateNote} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
