import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Box = styled.div`
  margin-top: 0.25em;
  margin-right: 0.5em;
  height: 3em;
  width: 3em;
`;

const Button = styled.div`
  position: relative;

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
  <Container>
    <Box onClick={toggleExpanded}>
      <Button />
    </Box>
  </Container>
);

export default MenuToggle;
