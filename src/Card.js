import React from "react";

import styled from "styled-components";

const CardWrapper = styled.div`
  background: ${props => props.bg};
  width: 350px;
  height: 200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-radius: ${props => props.borderRadius}px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-alig: center;
  color: ${props => props.titleColor};
  cursor: pointer;
`;

const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")}

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Card = ({
  title,
  increment,
  decrement,
  titleColor,
  borderRadius,
  ...props
}) => (
  <CardWrapper borderRadius={borderRadius} {...props}>
    <Title titleColor={titleColor}>{title}</Title>
    <div>
      <Button primary onClick={() => increment()}>
        +
      </Button>
      <Button onClick={() => decrement()}>-</Button>
    </div>
  </CardWrapper>
);

Card.defaultProps = {
  bg: "#777",
  titleColor: "#212112",
  borderRadius: 10
};

export default Card;
