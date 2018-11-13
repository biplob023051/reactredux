import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleOnChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleOnSubmit = evt => {
    evt.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    // Call Action
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={evt => this.handleOnSubmit(evt)}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={evt => {
                this.handleOnChange(evt);
              }}
            />
          </div>
          <div>
            <label>Body</label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={evt => {
                this.handleOnChange(evt);
              }}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
