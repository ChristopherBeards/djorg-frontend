import React, { Component } from 'react'
import Note from './Note'

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class NoteList extends Component {
  render() {
    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading {console.log(this.props)}</div>
    }

    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error {console.log(this.props)}</div>
    }
 
    const notesToRender = this.props.feedQuery.notes
  
    return (
      <div>{notesToRender.map(note => <Note key={note.id} note={note} />)}</div>
    )
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    notes {
        id
        title
        content
        createdAt
    }
  }
`

export default graphql(FEED_QUERY, { name: 'feedQuery' }) (NoteList);