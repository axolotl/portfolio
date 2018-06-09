import React from 'react';
import Title from '../components/styles/Title';
import Content from '../components/styles/Content';
import Text from '../components/styles/Text';

const Index = ({ data }) => {
  const { header, content } = data.content.childContentJson.about

  console.log(content);

  return (
    <Content>
      <Title>{header}</Title>
      {content.map((content, i) => (
        <Text key={i}>{content}</Text>
      ))}
    </Content>
  )
}

export default Index

export const indexQuery = graphql`
  query indexQuery {
    content: file(relativePath: { eq: "content.json"}) {
      childContentJson {
        about {
          header
          content
        }
      }
    }
  }
`