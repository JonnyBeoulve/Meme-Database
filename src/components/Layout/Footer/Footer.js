import React from "react";
import { Paper, withStyles } from "material-ui";

/*======================================================================
// Footer styling.
======================================================================*/
const styles = theme => ({
  footerText: {
    padding: "20px 0 20px 0",
    fontFamily: "Roboto",
    fontSize: "0.8em",
    textAlign: "center"
  },
  footerLink: {
    color: "#f50057"
  }
});

/*======================================================================
// Render the header, which simply shows the name of the app and
// attribution.
======================================================================*/
function Footer(props) {
  const { classes } = props;
  return (
    <Paper className={classes.footerText}>
      Made by{" "}
      <a
        className={classes.footerLink}
        href="https://www.jonathanleack.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jonathan Leack
      </a>{" "}
      using Material UI and React.
    </Paper>
  );
}

export default withStyles(styles)(Footer);
