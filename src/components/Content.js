import React, { Component } from 'react';
import Slide from './Slide';

class Content extends Component {
  render() {
    return (
      <div>
        <h3 style={{textAlign:'center'}}>These are my projects. Click to expand.</h3>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
    )
  }

}

export default Content