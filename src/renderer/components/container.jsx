import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Sidebar from './sidebar';
import Bottombar from './bottombar';
import WindowComponent from './window';
import Users from './users';
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
  },
});

// const mainView = (
//   <Grid container>
//     {/* <Grid item sm={12}>
//       <AppBar />
//     </Grid> */}
//     <Grid item sm={3}>
//       <Sidebar />
//     </Grid>
//     <Grid item xs={9}>
//       <App />
//     </Grid>
//     <Grid item xs={12}>
//       <Bottombar />
//     </Grid>
//   </Grid>
// );

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar handleDrawerOpen={this.handleDrawerOpen} open={open} />
            <SideBar handleDrawerClose={this.handleDrawerClose} open={open} />
            <WindowComponent open={open} {...this.props} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  const { settings } = state;
  return { path: settings.path };
}

export default connect(mapStateToProps)(Container);

// export default Container;