import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

/*======================================================================
// Render the header, which simply shows the name of the app.
======================================================================*/
export default props => (
  <AppBar color="secondary" position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        Meme Database
      </Typography>
    </Toolbar>
  </AppBar>
)