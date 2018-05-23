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
    const { background } = this.props;
    const { height, expanded } = this.state;
    const { toggleShow } = this;

    return (
      <div className='inner-content-container' style={background} onClick={toggleShow}>
        <div className='project-title'>

          {!expanded ? 
            <ExpandIcon />
            :
            <HideIcon />
          }

          <p className='slide-title' style={{fontWeight: expanded ? 'bold' : 'normal'}}>{title}</p>
        </div>

        <AnimateHeight
          duration={ 500 }
          height={ height }>

            
            <p className='expanded-content'>
              <span className='links'>
                {host_link &&
                  <a href={host_link}>See it live</a>
                }
                {github_link &&
                  <a href={github_link}>See source</a>
                }
              </span>
              {content}
            </p>

        </AnimateHeight>  

      </div>
    )
  }
}

export default Slide