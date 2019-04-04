import { ipcRenderer } from 'electron';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
// import Grid from '@material-ui/core/Grid';
import { Snackbar, Slide } from '@material-ui/core';

// import Sidebar from './sidebar';
// import Bottombar from './bottombar';

import WindowComponent from './window';
// import Users from './users';
import AppBar from './app-bar';
import SideBar from './sidebar';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const classes = theme => ({
  root: {
    display: 'flex',
  }
});

function errorMessageTransition(props) {
  return <Slide {...props} direction="up" />;
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showError: false,
      errorMessage: '',
      Transition: errorMessageTransition
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleErrorMessage = this.handleErrorMessage.bind(this);

    ipcRenderer.on('error', (event, error) => {
      this.setState({ showError: true, errorMessage: error });
    });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleErrorMessage() {

  }

  render() {
    const {
      open,
      showError,
      errorMessage,
      Transition
    } = this.state;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <CssBaseline />
            <AppBar handleDrawerOpen={this.handleDrawerOpen} open={open} />
            <SideBar handleDrawerClose={this.handleDrawerClose} open={open} />
            <WindowComponent open={open} {...this.props} />
            <Snackbar
              open={showError}
              TransitionComponent={Transition}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              autoHideDuration={2000}
              message={<span id="message-id">Error: {errorMessage}</span>}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              className={classes.errorMessage}
            />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  // const { settings } = state;
  // return { settings };
  return {};
}

export default connect(mapStateToProps)(Container);
