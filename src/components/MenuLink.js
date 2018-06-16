import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const StyledLink = styled(Link)`
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: #393939;

  :hover {
    color: #ff4f0a;
  }
`;

const GreyedOutLink = styled(Link)`
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: #ff4f0a;

  :hover {
    color: #ff4f0a;
  }
`;

const MenuLink =({ to, location, children }) => {
  if (location != undefined && location.pathname === to) {
    return <GreyedOutLink to={to}>{children}</GreyedOutLink>
  }
  else {
    return <StyledLink to={to}>{children}</StyledLink>
  }
};

export default MenuLink;
