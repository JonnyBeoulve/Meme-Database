import React, { Component, Fragment } from 'react';
import CategoryBar from './Layouts/CategoryBar';

import Header from './Layouts/Header';
import Memes from './Memes';
import { categories, memes } from '../store.js';

/*======================================================================
// This container houses the state of the program along with top
// level component render and handler functions.
======================================================================*/
export default class extends Component {
  state = {
    memes,
    meme: {}
  }

  /*======================================================================
  // This will create an array of memes to be displayed on the left
  // pane.
  ======================================================================*/
  getMemesByCategory() {
    return Object.entries(
      this.state.memes.reduce((memes, meme) => {
        const { categories } = meme

        memes[categories] = memes[categories]
          ? [...memes[categories], meme]
          : [meme]

        return memes
      }, {})
    )
  }

  /*======================================================================
  // Upon clicking a category, alter the state.
  ======================================================================*/
  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  /*======================================================================
  // Upon clicking a meme, alter state.
  ======================================================================*/
  handleMemeSelected = id => {
    this.setState(({ memes }) => ({
      meme: memes.find(ex => ex.id === id)
    }))
  }

  /*======================================================================
  // Render the top level components.
  ======================================================================*/
  render() {
    const memes = this.getMemesByCategory(),
      { category, meme } = this.state

    return (
      <Fragment>
        <Header />
        <Memes meme={meme} category={category} memes={memes} onSelect={this.handleMemeSelected} />
        <CategoryBar category={category} categories={categories} onSelect={this.handleCategorySelected} />
      </Fragment>
    )
  }
}
