import React from 'react';
import { connect } from 'react-redux';

import SettingsView from './view/settings';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (<SettingsView {...this.props} />);
  }
}

function mapStateToProps(state, props) {
  const { settings } = state;
  return { path: settings.path };
}

const updateSettings = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, updateSettings)(Container);
