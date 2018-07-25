import React from 'react';
import { 
  AppBar, 
  TextField, 
  Toolbar, 
  Typography, 
  withStyles 
} from 'material-ui';

/*======================================================================
// Header styling.
======================================================================*/
const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  whiteInputFont: {
    color: 'white',
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #fff',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:focus': {
      borderColor: '#fff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});

/*======================================================================
// Render the header, which simply shows the name of the app and
// attribution.
======================================================================*/
function Header(props) {
  const { classes } = props;
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <Typography 
          variant="headline" 
          color="inherit" 
          className={classes.flex}
        >
          Meme Database
        </Typography>
        <TextField
          defaultValue="Search"
          id="bootstrap-input"
          className={classes.searchField}
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.bootstrapRoot,
              input: classes.bootstrapInput,
            },
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.bootstrapFormLabel,
          }}
          onChange={props.onSearch}
        />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header);