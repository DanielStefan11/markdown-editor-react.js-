import React, { useContext } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import editorContext from '../contexts/editorContext';
import colorVariables from '../globalVariables';

const { lightBlue } = colorVariables;

const Container = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 0.5rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
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

const ResultArea = styled.div`
  width: 100%;
  height: 90%;
  margin-right: 0.5rem;
  background: ${lightBlue};
  outline: none;
  resize: none;
  padding: 1rem;
  overflow-y: auto;
  border-radius: 15px;
  word-wrap: break-word;
`;

const Result = () => {
  const { markdownText } = useContext(editorContext);

  return (
    <Container>
      <Title>Result Output</Title>
      <ResultArea>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </ResultArea>
    </Container>
  );
};

export default Result;
