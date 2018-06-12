import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { injectGlobal } from "styled-components";

// import wrappers
import Outer from "../components/wrappers/Outer";
import Inner from "../components/wrappers/Inner";
import ContentWrapper from "../components/wrappers/ContentWrapper";

// import components
import Header from "../components/Header";
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

    {location.pathname.match(/^\/projects/) != null ? (
      <div>
        <Header />
        <Responsive data={data} location={location}>
          {children}
        </Responsive>
      </div>
    ) : (
      <div>
        <Header />
        <Outer>
          <Inner>
            <ContentWrapper>
              <Image data={data} />
              {children()}
            </ContentWrapper>
          </Inner>
        </Outer>
      </div>
    )}
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
