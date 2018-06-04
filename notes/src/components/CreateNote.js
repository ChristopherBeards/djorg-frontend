import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateNote extends Component {
  state = {
    title: '',
    content: '',
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.title}
            onChange={e => this.setState({ title: e.target.value })}
            type="text"
            placeholder="Title"
          />
          <input
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
            type="text"
            placeholder="Content"
          />
        </div>
        <button onClick={() => this._createNote()}>Submit</button>
      </div>
    )
  }

  _createNote = async () => {
    const { title, content } = this.state;
    await this.props.postMutation({
      variables: {
        title,
        content
      }
    })
    this.props.history.push('/');
  }
}

const POST_MUTATION = gql`
  mutation PostMutation($title: String!, $content: String!) {
    post(title: $title, content: $content) {
      title
      content
    }
  }
`

export default graphql(POST_MUTATION, { name: 'postMutation' })(CreateNote)