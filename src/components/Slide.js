import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import ExpandIcon from '../icons/Expand';
import HideIcon from '../icons/Hide';

class Slide extends Component {
  state = {
    height: 0,
    expanded: false,
  }

  toggleShow = () => {
    const { height, expanded } = this.state;
 
    this.setState({
      height: height === 0 ? 'auto' : 0,
      expanded: !expanded,
    })
  }

  render() {
    const { title, host_link, github_link, content } = this.props.slide;
    const { height, expanded } = this.state;
    const { toggleShow } = this;

    return (
      <div className='inner-content-container'>
        <div className='project-title'>

          {!expanded ? 
            <ExpandIcon onClick={toggleShow} />
            :
            <HideIcon onClick={toggleShow} />
          }

          <p className='slide-title' onClick={toggleShow}>{title}</p>
        </div>

        <AnimateHeight
          duration={ 500 }
          height={ height }>

            
            <p className='expanded-content'>
              <span className='links'>
                <a href={host_link}>See it live</a>
              <a href={github_link}>See source</a>
              </span>
              {content}
            </p>

        </AnimateHeight>  

      </div>
    )
  }
}

export default Slide