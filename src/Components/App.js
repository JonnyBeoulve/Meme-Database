import React, { Component, Fragment } from 'react';
import CategoryBar from './Layouts/CategoryBar';

import Header from './Layouts/Header';
import Memes from './Memes/Memes';
import { categories, memes } from '../store.js';

/*======================================================================
// This container houses the state of the program along with top
// level component render and handler functions.
======================================================================*/
class App extends Component {
  /*========================================================================
  // Store the state of all memes and the currently selected meme, with
  // data derived from the store.
  ========================================================================*/
    constructor() {
      super();
      this.state = {
        memes,
        meme: {},
      };
  }

  /*======================================================================
  // This will create an array of memes to be displayed on the left
  // panel.
  ======================================================================*/
  getMemesByCategory = () => {
    return Object.entries(
      this.state.memes.reduce((memes, meme) => {
        const { categories } = meme;

        memes[categories] = memes[categories]
          ? [...memes[categories], meme]
          : [meme];

        return memes;
      }, {})
    )
  }
  
  /*======================================================================
  // Upon typing into the search field, this will determine if the
  // search string matches the name of a meme. If so, it will display
  // the corresponding matched meme.
  ======================================================================*/
  handleSearch = (e) => {
    const matchedMeme = this.state.memes.find(ex => ex.title === e.target.value);
    if (matchedMeme) {
      this.setState({
        meme: matchedMeme
      })
    }
  }

  /*======================================================================
  // Upon clicking a category, alter the state.
  ======================================================================*/
  handleCategorySelected = (category) => {
    this.setState({
      category
    })
  }

  /*======================================================================
  // Upon clicking a meme, alter state by setting meme to the meme with
  // a matching ID.
  ======================================================================*/
  handleMemeSelected = (id) => {
    this.setState(({ memes }) => ({
      meme: memes.find(ex => ex.id === id)
    }))
  }

  /*======================================================================
  // Render the top level components, including a header, two-panel
  // list of categories and meme information, as well as a category
  // bar.
  ======================================================================*/
  render() {
    const memes = this.getMemesByCategory(),
      { category, meme } = this.state

    return (
      <Fragment>
        <Header onChangeSearch={this.handleSearchInput} onSearch={this.handleSearch} />
        <Memes 
          meme={meme} 
          category={category} 
          memes={memes} 
          onSelect={this.handleMemeSelected} 
        />
        <CategoryBar 
          category={category} 
          categories={categories} 
          onSelect={this.handleCategorySelected} 
        />
      </Fragment>
    )
  }
}

export default App;