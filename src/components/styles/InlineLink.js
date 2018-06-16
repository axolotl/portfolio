import styled from "styled-components";
import Link from "gatsby-link";

const styles = `
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: #ff4f0a;

  :hover {
    color: #ff4f0a;
    text-decoration: underline;
  }
`;

export const InternalLink = styled(Link)`
  ${styles}
`;

export const ExternalLink = styled.a`
  ${styles}
`;
