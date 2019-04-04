import React from 'react';
import { Typography } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class SettingsView extends React.Component {
  constructor(props) {
    super(props);
    console.log('PROPS', props);
  }

  render() {
    const { path } = this.props;
    return (
      <Typography variant="h4">
        Settings
        <p>
          Path:{path}
        </p>
      </Typography>
    );
  }
}

SettingsView.propTypes = {
  // path: PropTypes.string.isRequired,
  // store: PropTypes.object.isRequired
};

export default SettingsView;
