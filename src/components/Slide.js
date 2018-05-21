import React, { Component } from 'react';
import ExpandIcon from '../icons/Expand';
import HideIcon from '../icons/Hide';

class Slide extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    }
  }

  toggleShow = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const { expanded } = this.state;
    const { toggleShow } = this;

    return (
      <div className='inner-content-container'>
        <div className='project-title'>

          {!expanded ? 
            <ExpandIcon onClick={toggleShow} />
            :
            <HideIcon onClick={toggleShow} />
          }

          <p onClick={toggleShow} style={{display:'block'}}>Content with name</p>
        </div>

        {expanded &&
          <p className='expanded-content'>more content</p>
        }
      </div>
    )
  }
}

export default Slide