import React from 'react';
import { AppBar, TextField, Toolbar, Typography, withStyles } from 'material-ui';

/*======================================================================
// Header styling.
======================================================================*/
const styles = {
  flex: {
    flexGrow: 1,
  },
  whiteFont: {
    color: '#fff',
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
        <TextField
          id="search"
          label="Search"
          type="search"
          margin="normal"
          className={classes.whiteFont}
          onChange={props.onSearch}
        />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header);