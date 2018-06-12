import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 4em;
  width: 4em;
`;

const Button = styled.div`
  margin: 20px;
  position: relative;
  padding-left: 1.25em;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    width: 3em;
    height: 0.15em;
    background: black;
    box-shadow: 0 1em 0 0 black, 0 2em 0 0 black;
  }
`;

const MenuToggle = ({ toggleExpanded }) => (
  <Container onClick={toggleExpanded}>
    <Button />
  </Container>
);

export default MenuToggle;
