import React from "react";
import styled from "styled-components";
import colorVariables from "../globalVariables";

const { mediumGreen, darkGreen } = colorVariables;

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #8aebbf;
  padding: 0.5rem 1rem;
  border: 1px solid ${mediumGreen};
  border-radius: 20px;
  font-size: 1.1rem;
  color: ${darkGreen};
  cursor: pointer;

  &:hover {
    background: #5bb18a;
  }
`;

const ButtonComponent = ({ children, reset }) => {
  return <Button onClick={reset}>{children}</Button>;
};

export default ButtonComponent;
