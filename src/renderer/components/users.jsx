import React from 'react';
import { Typography } from '@material-ui/core';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Typography variant="h4">
        users
      </Typography>
    );
  }
}

export default Users;
