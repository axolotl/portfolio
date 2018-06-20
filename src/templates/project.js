import React from "react";
import styled from "styled-components";
import Text from "../components/styles/Text";
import BorderLink from "../components/styles/BorderLink";
import Img from "gatsby-image";

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
  const { title, image, host_link, github_link, content } = data.projectsJson;
  const { edges } = data.allImageSharp;
  const regex = new RegExp(image);
  const images = edges.filter(edge => edge.node.id.match(regex));

  return (
    <Container>
      <Title>{title}</Title>

      <Links>
        <block>
          {host_link && <BorderLink href={host_link}>See it live</BorderLink>}
          {github_link && (
            <BorderLink href={github_link}>See source</BorderLink>
          )}
        </block>
      </Links>

      {content.map((line, i) => <Text key={i}>{line}</Text>)}

      {images.map((image, i) => {
        // pull the max width out of the string returned via the sizes query
        const maxWidth = parseInt(
          image.node.sizes.sizes.match(/([0-9]){2,}/)[0]
        );
        return (
          <Img
            key={i}
            style={{ maxWidth: maxWidth }}
            sizes={image.node.sizes}
          />
        );
      })}
    </Container>
  );
};

export const projectsQuery = graphql`
  query projectsQuery($slug: String!) {
    allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth: 550, quality: 100) {
            sizes
            ...GatsbyImageSharpSizes_noBase64
          }
        }
      }
    }
    projectsJson(fields: { slug: { eq: $slug } }) {
      id
      title
      image
      host_link
      github_link
      content
    }
  }
`;
