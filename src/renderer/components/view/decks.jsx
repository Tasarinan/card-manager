import React from 'react';
import { Typography } from '@material-ui/core';

class DecksView extends React.Component {
  constructor(props) {
    super(props);
    this.id = '1';
  }

  render() {
    return (
      <Typography variant="h4">
        Decks
      </Typography>
    );
  }
}

export default DecksView;
