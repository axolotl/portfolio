import React, { Component } from 'react';
import About from '../components/About';
import Content from '../components/Content';

class App extends Component {
  render() {
    return (
      <div id='root'>
        <div id='outer-container'>
          <div id='left-side' className='inner-container'>
            <About />
          </div>
          <div id='right-side' className='inner-container'>
            <Content />
          </div>
        </div>
      </div>
    )
  }
}

export default App