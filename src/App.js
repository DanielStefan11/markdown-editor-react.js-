import { useState } from 'react';
import GlobalStyle from './globalStyle';
import styled from 'styled-components';
import MarkedInput from './components/MarkedInput';
import Result from './components/Result';
import EditorContext from './contexts/editorContext';
import colorVariables from './globalVariables';
import ButtonComponent from './components/Button';

const { lightBlue, darkGreen } = colorVariables;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${darkGreen};

  @media screen and (min-width: 769px) and (max-width: 960px) {
    padding: 1rem;
  }
`;

const InnerContainer = styled.div`
  position: relative;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: ${lightBlue};
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  const [markdownText, setMarkdownText] = useState(() => '');

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  const resetValue = () => {
    setMarkdownText('');
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <GlobalStyle />
      <AppContainer>
        <InnerContainer>
          <ButtonComponent reset={resetValue}>Reset</ButtonComponent>
          <Title>Markdown Editor</Title>
          <EditorContainer>
            <MarkedInput />
            <Result />
          </EditorContainer>
        </InnerContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
