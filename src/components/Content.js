import React, { Component } from 'react';
import Slide from './Slide';

const Content = ({ header, slides }) => (
  <div id='content-container'>
    <h3>{header}</h3>
    {slides.map((slide, i) => (
      <Slide key={i} slide={slide.node} />
    ))}
  </div>
)

export default Content