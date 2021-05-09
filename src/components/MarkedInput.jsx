import React, { useContext } from 'react';
import styled from 'styled-components';
import editorContext from '../contexts/editorContext';
import colorVariables from '../globalVariables';

const { lightBlue, darkGreen } = colorVariables;

const Container = styled.div`
  flex: 1;
  margin-right: 0.5rem;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.div`
  color: ${lightBlue};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
  background: ${lightBlue};
  outline: none;
  resize: none;
  padding: 1rem;
  overflow-y: auto;
  font-size: 1.5rem;
  color: ${darkGreen};
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

const MarkedInput = () => {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>Markdown Input</Title>
      <TextArea onChange={onInputChange} />
    </Container>
  );
};

export default MarkedInput;
