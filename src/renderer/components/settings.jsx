import React from 'react';
import { connect } from 'react-redux';
import { Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const { settings } = this.props;

    let content = (
      <Paper>Settings not found</Paper>
    );
    if (settings.ready === true) {
      content = (
        <Paper>Settings are ready</Paper>
      );
    }

    return (
      <Typography variant="h4">
        {content}
      </Typography>
      
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.shape({
    path: PropTypes.string,
    ready: PropTypes.bool.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  console.log('mapStateToProps:', state);
  const { settings } = state;
  return { settings };
}

const updateSettings = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, updateSettings)(Settings);
