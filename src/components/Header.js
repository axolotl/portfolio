import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffd419;
  padding: 10px;

  position: relative;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
     -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
          box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 880px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const P = styled(Link)`
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: black;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0;
  padding: 6px 10px;
  font-size: 1.1em;
  :hover {
    color: #ff4f0a;
  }
`;

const Name = P.extend`
  border: 1px solid #212121;
  margin-left: 0px;
  font-size: 1.2em;
  :hover {
    color: black;
  }
`;

const Header = () => (
  <Outer>
    <Inner>
      <Wrapper>
        <Name to="/">Samuel Machat</Name>
      </Wrapper>

      <Wrapper>
        <P to="/projects">Projects</P>
        <P to="/about">About</P>
        <P to="/contact">Contact</P>
      </Wrapper>
    </Inner>
  </Outer>
);

export default Header;
