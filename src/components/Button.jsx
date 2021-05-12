import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #8aebbf;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: #5bb18a;
  }
`;

const ButtonComponent = ({ children, reset }) => {
  return <Button onClick={reset}>{children}</Button>;
};

export default ButtonComponent;
