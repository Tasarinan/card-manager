
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconFolder from '@material-ui/icons/Folder';
import IconSettings from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

const drawerWidth = 260;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

const DecksLink = props => <Link to="/" {...props} />;
const SettingsLink = props => <Link to="/settings" {...props} />;

class SideBarComponent extends React.Component {
  constructor(options) {
    super(options);
    const { handleDrawerClose } = this.props;
    this.handleDrawerClose = handleDrawerClose.bind(this);
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.props;

    return (

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
          <ListItem button key="Decks" component={DecksLink}>
            <ListItemIcon><IconFolder /></ListItemIcon>
            <ListItemText primary="Decks" />
          </ListItem>
          <ListItem button key="Settings" component={SettingsLink}>
            <ListItemIcon><IconSettings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />

      </Drawer>
    );
  }
}

SideBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(SideBarComponent);
