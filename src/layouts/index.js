import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";
import MediaQuery from "react-responsive";

// import wrappers
import Outer from "../components/wrappers/Outer";
import Inner from "../components/wrappers/Inner";
import ContentWrapper from "../components/wrappers/ContentWrapper";

// import components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Responsive from "../components/Responsive";
import Image from "../components/Image";

injectGlobal`
  body {
    margin: 0;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const App = ({ children, location, data }) => (
  <div>
    <Helmet
      title="Portfolio"
      link={[
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Josefin+Slab"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css?family=Open+Sans"
        }
      ]}
    />

    {/*
    okay how to chart this problem
    I need two pieces of information: screen resolution and whether page is at projects
    wait ... 
    for desktop resolution i need to know if i'm on the projects page

    for the mobile I don't: all of that information will be contained in the dropdown

    so ask screen resolution
      if desktop -> proceed with current flow
      if if mobile - > use new flow
    */}

    {/* full screen */}
    <MediaQuery key={"min"} minWidth={500}>
      <div>
        <Header />
        <Outer>
          <Inner>
            <ContentWrapper>
              {location.pathname.match(/^\/projects/) != null ? (
                <Sidebar data={data} />
              ) : (
                <Image data={data} />
              )}
              {children()}
            </ContentWrapper>
          </Inner>
        </Outer>
      </div>
    </MediaQuery>

    {/* for mobile */}
    <MediaQuery key={"max"} maxWidth={500}>
      <Responsive data={data}>
        {children}
      </Responsive>
    </MediaQuery>
  </div>
);

App.propTypes = {
  children: PropTypes.func
};

export default App;

export const contentQuery = graphql`
  query contentQuery {
    avatar: file(relativePath: { eq: "images/self.jpg" }) {
      childImageSharp {
        resolutions(width: 200, quality: 100) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          fields {
            slug
          }
          link_name
          type
        }
      }
    }
  }
`;
