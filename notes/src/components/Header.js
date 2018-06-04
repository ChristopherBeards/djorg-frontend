import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <div>Django-Apollo Notes</div>
          <Link to="/">
            Notes
          </Link>
          <div>|</div>
          <Link to="/create">
            Create
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)