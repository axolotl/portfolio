import React, { Component } from 'react';
import Slide from './Slide';

const Content = ({ header, slides }) => (
  <div id='content-container'>
    {header.map((content, i) => 
      <p key={i} className='content-header'>{content}</p>
    )}
    {slides.map((slide, i) => (
      <Slide key={i} slide={slide.node} background={{borderRadius: '3px', backgroundColor: i%2 === 0 ? '#cccccc' : ''}}/>
    ))}
  </div>
)

export default Content