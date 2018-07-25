import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from 'material-ui';
import { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';

/*======================================================================
// Styling for the layout.
======================================================================*/
const styles = {
  MemeInfoPaper: {
    overflowY: 'auto',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: '700px',
    fontSize: '0.8em'
  },
  MemeListPaper: {
    overflowY: 'auto',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: '700px',
    fontSize: '0.8em'
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
    title = 'Welcome!',
    image = 'https://www.therideronline.com/wp-content/uploads/2017/01/memes.jpg',
    description = 'Select a meme from the list.',
    link = ''
  },
  onSelect,
 }) =>
  <Grid container>
    <Grid item xs={4}>
      <Paper style={styles.MemeListPaper}>
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
    <Grid item xs={8}>
      <Paper style={styles.MemeInfoPaper}>
        <Typography variant="display1">
          {title}
        </Typography>
          <img src={image} alt="Meme" style={{marginTop: 25, width: '70%'}}>
          </img>
        <Typography 
          variant="subheading" 
          style={{marginTop: 25}}>
          {description}
        </Typography>
        {(link)
          ? <Button variant="raised" color="secondary" style={{marginTop: 25}}>
            <a href={link} target="_blank" alt="Meme" style={{textDecoration: 'none', color: '#fff'}}>Read More</a>
          </Button>
          : null}
      </Paper>
    </Grid>
  </Grid>