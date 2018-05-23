import React, { Component } from 'react';
import About from '../components/About';
import Content from '../components/Content';

class App extends Component {
  render() {
    const { resolutions: image } = this.props.data.avatar.childImageSharp;
    const { childContentJson: content } = this.props.data.content;
    const { edges: slides } = this.props.data.allSlidesJson;

    return (
      <div id='root'>
        <div id='outer-container'>
          <div id='left-side' className='inner-container'>
            <About image={image} content={content.about}/>
          </div>
          <div id='right-side' className='inner-container'>
            <Content header={content.slides.header} slides={slides}/>
          </div>        
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query contentQuery {
    avatar: file(relativePath: { eq: "images/self.jpg" }) {
      childImageSharp {
        resolutions(width: 200, quality: 100) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
    
    content: file(relativePath: { eq: "content.json"}) {
      childContentJson {
        about {
          header
          content
        }
        slides {
          header
        }
      }
    }

    allSlidesJson {
      edges {
        node {
          title
          host_link
          github_link
          content
        }
      }
    }
  }
`

export default App