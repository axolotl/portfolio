import React from "react";
import styled from "styled-components";
import Text from "../components/styles/Text";
import BorderLink from "../components/styles/BorderLink";

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

export default ({ data, errors }) => {
  const { title, host_link, github_link, content } = data.projectsJson;

  return (
    <Container>
      <Title>{title}</Title>
      <Links>
        <block>
          {host_link && <BorderLink href={host_link}>See it live</BorderLink>}
          {github_link && <BorderLink href={github_link}>See source</BorderLink>}
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
