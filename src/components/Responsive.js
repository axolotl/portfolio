import React, { Component } from "react";
import MediaQuery from "react-responsive";

// import style components
import Outer from "./wrappers/Outer";
import Inner from "./wrappers/Inner";
import ResponsiveContent from "./wrappers/ResponsiveContent";
import ContentWrapper from "./wrappers/ContentWrapper";
import ResponsiveWrapper from "./wrappers/ResponsiveWrapper";

// import components
import Sidebar from "./Sidebar";
import MenuToggle from "./MenuToggle";
import Header from "./Header";
import Image from "../components/Image";

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
    const { data, location, children } = this.props;

    return (
      <div>
        <Header responsive toggleExpanded={toggleExpanded} />
        <ResponsiveWrapper>
          {expanded ? (
            <Sidebar responsive data={data} />
          ) : (
            <ResponsiveContent>
              {!location.pathname.match(/^\/projects/) && (
                  <Image data={data} />
                )}
              {children()}
            </ResponsiveContent>
          )}
        </ResponsiveWrapper>
      </div>
    );
  }
}

export default Responsive;
