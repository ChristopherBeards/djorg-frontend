import React, { Component } from 'react'
import '../styles/Note.css';

class Note extends Component {
  render() {
    return (
      <div className="allNotes">
        <div className="noteCard">
          <div className="noteTitle">
            {this.props.note.title}
          </div>
          <div className="noteBody">
            {this.props.note.content}
          </div>
        </div>
      </div>
    )
  }

}

export default Note;