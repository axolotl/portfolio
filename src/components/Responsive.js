import React, { Component } from "react";
import MediaQuery from "react-responsive";

// import style components
import Outer from "./wrappers/Outer";
import Inner from "./wrappers/Inner";
import ResponsiveInner from "./wrappers/ResponsiveInner";
import ContentWrapper from "./wrappers/ContentWrapper";

// import components
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";

class Responsive extends Component {
  state = {
    expanded: false
  };

  componentWillReceiveProps() {
    this.setState({ expanded: false });
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { toggleExpanded } = this;
    const { expanded } = this.state;

    return (
      <Outer>
        {/* full screen */}
        <MediaQuery key={"min"} minWidth={500}>
          <Inner>
            <Sidebar data={this.props.data} />

            <ContentWrapper>{this.props.children()}</ContentWrapper>
          </Inner>
        </MediaQuery>

        {/* for mobile */}
        <MediaQuery key={"max"} maxWidth={500}>
          <ResponsiveInner>
            <MenuToggle toggleExpanded={toggleExpanded} />

            {expanded ? (
              <Sidebar data={this.props.data} />
            ) : (
              <ContentWrapper>{this.props.children()}</ContentWrapper>
            )}
          </ResponsiveInner>
        </MediaQuery>
      </Outer>
    );
  }
}

export default Responsive;
