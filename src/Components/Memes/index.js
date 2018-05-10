import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';

/*======================================================================
// Styling for the layout.
======================================================================*/
const styles = {
  Paper: {
    overflowY: 'auto',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
  }
}

/*======================================================================
// This will render the left and right UI elements where users can
// select memes and then reference information about them. The
// information includes a name, image, description, and link to read 
// more.
======================================================================*/
export default ({
  category,
  memes,
  meme: {
    id,
    title = 'Welcome!',
    image = 'https://www.therideronline.com/wp-content/uploads/2017/01/memes.jpg',
    description = 'Select a meme from the list on the left.',
    link = 'http://www.knowyourmeme.com'
  },
  onSelect,
 }) =>
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {memes.map(([group, memes]) =>
          !category || category === group
            ? <Fragment key={group}>
                <Typography variant="headline" style={{ textTransform: 'capitalize' }}>
                  {group}
                </Typography>
                <List component="ul">
                  {memes.map(({ id, title }) =>
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">
          {title}
        </Typography>
          <img src={image} style={{marginTop: 25, maxWidth: '400px'}}></img>
        <Typography variant="subheading" style={{marginTop: 25}}>
          {description}
        </Typography>
        <Button variant="raised" color="secondary" style={{marginTop: 25}}>
          <a href={link} target="_blank" alt="Meme" style={{textDecoration: 'none', color: '#fff'}}>Read More</a>
        </Button>
      </Paper>
    </Grid>
  </Grid>