import React from "react";
import styled from "styled-components";
import Text from "../components/styles/Text";

const Container = styled.div`
  padding: 0;
  max-width: 550px;
`;

const Title = styled.h3`
  padding: 5px 0;
  margin: 5px 0;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
`;

const Links = styled.p`
  margin: 5px 0;
  height: 30px;
`;

const A = styled.a`
  margin-right: 10px;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: black;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #ffd419;

  :hover {
    color: #ff4f0a;
    border: 1px solid #ff4f0a;
  }
`;

export default ({ data, errors }) => {
  const { title, host_link, github_link, content } = data.projectsJson;

  return (
    <Container>
      <Title>{title}</Title>
      <Links>
        <block>
          {host_link && <A href={host_link}>See it live</A>}
          {github_link && <A href={github_link}>See source</A>}
        </block>
      </Links>

      {content.map((line, i) => <Text key={i}>{line}</Text>)}
    </Container>
  );
};

export const projectsQuery = graphql`
  query projectsQuery($slug: String!) {
    projectsJson(fields: { slug: { eq: $slug } }) {
      title
      host_link
      github_link
      content
    }
  }
`;
