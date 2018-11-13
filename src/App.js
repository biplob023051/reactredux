import React, { Component } from 'react';

// Glue between redux and react
import { Provider } from 'react-redux';

import store from './store';

import Posts from './components/Posts';
import PostFrom from './components/PostForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostFrom />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
