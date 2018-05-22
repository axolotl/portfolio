import React, { Component } from 'react';
import About from '../components/About';
import Content from '../components/Content';

class App extends Component {
  render() {
    const { node: content } = this.props.data.allContentJson.edges[0];
    const { edges: slides } = this.props.data.allSlidesJson;

    return (
      <div id='root'>
        <div id='outer-container'>
          <div id='left-side' className='inner-container'>
            <About content={content.about}/>
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
    allContentJson {
      edges {
        node {
          about {
            header
            content
          }
          slides {
            header
          }
        }
      }
    }
    allSlidesJson {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`

export default App