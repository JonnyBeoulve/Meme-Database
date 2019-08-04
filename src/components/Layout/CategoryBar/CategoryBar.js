import React from "react";
import { Paper, Tabs } from "material-ui";
import { Tab } from "material-ui/Tabs";

/*======================================================================
// This will load a horizontal bar displaying all category choices
// to the user, located at the bottom of the app.
======================================================================*/
export default ({ categories, category, onSelect }) => {
  /*======================================================================
  // Determine index. If category match, return the value + 1. If no
  // match found, return 0 for default welcome page.
  ======================================================================*/
  const index = category
    ? categories.findIndex(group => group === category) + 1
    : 0;

  /*======================================================================
  // Handle index change on selection of a category. When All is selected,
  // display all categories and memes. Otherwise, show memes related
  // to selected category.
  ======================================================================*/
  const indexSelect = (e, index) => {
    onSelect(index === 0 ? "" : categories[index - 1]);
  };

  /*======================================================================
  // Render the category bar, which will manually include All before
  // mapping the rest of the categories.
  ======================================================================*/
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={indexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        scrollable
        scrollButtons="on"
      >
        <Tab label="All" />
        {categories.map(group => (
          <Tab key={group} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
};
