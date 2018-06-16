import styled from "styled-components";

const BorderLink = styled.a`
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

export default BorderLink;
