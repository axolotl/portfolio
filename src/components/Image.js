import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled(Img)`
  border: 1px solid black;
  margin: 10px;
  margin-left: 0;
  margin-right: 18px;
`;

const ImagePage = ({ data }) => {
  const { resolutions: image } = data.avatar.childImageSharp;

  return (   
    <StyledImage className='avatar' resolutions={image} />  
  )
}

export default ImagePage;