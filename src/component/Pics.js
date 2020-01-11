import React from "react";

import styled from "styled-components";

const ImageWrapper = styled.div`
  margin: 0.5rem;
  transition: all 200ms ease;
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
    transform: scale(1.005);
  }
`;
export const Pics = ({ src, index }) => {
  const alt = `Unsplash Redesign #${index}`;
  //const imageProps = { src , alt }
  return (
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
};
