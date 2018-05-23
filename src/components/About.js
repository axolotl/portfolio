import React, { Component } from 'react';
import Img from "gatsby-image";

const About = ({ image, content }) => (
  <div id='about-container'>
    <Img className='avatar' resolutions={image} />
    <h1>{content.header}</h1>
    {content.content.map((p, i)=> (
      <p key={i}>{p}</p>
    ))}
  </div>
)

export default About