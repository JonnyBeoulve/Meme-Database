import React from 'react';
import { Paper, Tabs } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

/*======================================================================
// This will load a horizontal bar displaying all category choices
// to the user, located below the header.
======================================================================*/
export default ({ categories, category, onSelect }) => {
  const index = category
    ? categories.findIndex(group => group === category) + 1
    : 0

  /*======================================================================
  // Handle index change on selection of a category.
  ======================================================================*/
  const indexSelect = (e, index) =>
    onSelect(index === 0 
      ? '' 
      : categories[index - 1]
    );

  /*======================================================================
  // Render the category bar, which will manually include All and then
  // map the categories array.
  ======================================================================*/
  return (
    <Paper>
      <Tabs value={index} onChange={indexSelect} indicatorColor="secondary" textColor="secondary" centered>
      <Tab label="All" />
        {categories.map(group =>
          <Tab key={group} label={group} />
        )}
      </Tabs>
    </Paper>
  )
}