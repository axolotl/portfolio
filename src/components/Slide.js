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

  expand = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const { expanded } = this.state;
    const { expand } = this;

    return (
      <div>
        <p onClick={expand}>+ content</p>
        <ExpandIcon />
        <HideIcon />

        {expanded &&
          <p>more content</p>
        }

      </div>
    )
  }
}

export default Slide