import React, { Component } from 'react'

class Note extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.note.title} ({this.props.note.content})
        </div>
      </div>
    )
  }

}

export default Note;