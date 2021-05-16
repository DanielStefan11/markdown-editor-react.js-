import React from 'react';
import styled from 'styled-components';
import syled from 'styled-components';
import colorVariables from '../globalVariables';
import { AiFillCloseCircle } from 'react-icons/ai';

const { mediumBlue } = colorVariables;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  z-index: 20;
  background: #fff;
`;

const Title = styled.h4`
  color: ${mediumBlue};
  text-align: center;
`;

const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const InfoContainer = () => {
  return (
    <Overlay>
      <Container>
        <CloseIcon />
        <Title>Documentation</Title>
      </Container>
    </Overlay>
  );
};

export default InfoContainer;
