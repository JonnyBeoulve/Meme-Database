import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from 'material-ui';

const styles = {
  flex: {
    flexGrow: 1,
  },
  smallerFont: {
    fontSize: '0.8em',
  },
  linkColor: {
    color: '#fff'
  }
};

/*======================================================================
// Render the header, which simply shows the name of the app and
// attribution.
======================================================================*/
function Header(props) {
  const { classes } = props;
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" className={classes.flex}>
          Meme Database
        </Typography>
        <Typography variant="title" color="inherit" className={classes.smallerFont}>
          Made by <a href="http://www.JonathanLeack.com" target="_blank" rel="noopener noreferrer" className={classes.linkColor}>Jonathan Leack</a> using React and Material UI
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header);