import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0;
`;

const Title = styled.h3`
  padding: 10px 0;
  margin: 5px 0;
  font-family: 'Open Sans', sans-serif;
`;

const Links = styled.p`
  margin: 5px 0;
`;

const Content = styled.p`
  line-height: 1.5;
  margin: 10px 0;
`;

export default ({ data, errors }) => {
  const { title, host_link, github_link, content } = data.projectsJson;
  console.log(data)
  console.log(errors)
  return (
    <Container>
      <Title>{title}</Title>
      <Links>
        <span>
          {host_link &&
            <a href={host_link}>See it live</a>
          }
          <span>   </span>
          {github_link &&
            <a href={github_link}>See source</a>
          }
        </span>
      </Links>
      <Content>{content}</Content>
    </Container>
  )
}

export const projectsQuery = graphql`
  query projectsQuery($slug: String!) {
    projectsJson(fields: {slug: {eq: $slug } }) {
      title
      host_link
      github_link
      content
    }
  }
`