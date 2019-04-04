import React from 'react';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import { Typography } from '@material-ui/core';
import IconFolderOpen from '@material-ui/icons/FolderOpen';
import { Link } from 'react-router-dom';

// TODO: move links definition to separate file
const DecksLink = props => <Link to="/" {...props} />;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <Fab title="Open folder">
          <IconFolderOpen />
        </Fab>
      </footer>
    );
  }
}

export default Container;
