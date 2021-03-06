import { useState } from "react";
import GlobalStyle from "./globalStyle";
import styled from "styled-components";
import MarkedInput from "./components/MarkedInput";
import Result from "./components/Result";
import InfoContainer from "./components/InfoContainer";
import { DocsButton } from "./components/Buttons";
import EditorContext from "./contexts/editorContext";
import colorVariables from "./globalVariables";

const { lightBlue, darkGreen } = colorVariables;

const AppContainer = styled.div`
  position: relative;
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
  const [markdownText, setMarkdownText] = useState(() => "");
  const [toggleDoc, setToggleDoc] = useState(() => false);

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  const handleToggleDoc = () => {
    setToggleDoc(!toggleDoc);
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <GlobalStyle />
      <AppContainer>
        <InfoContainer isOpen={toggleDoc} toggleDocs={handleToggleDoc} />
        <InnerContainer>
          <Title>Markdown Editor</Title>
          <EditorContainer>
            <MarkedInput />
            <Result />
          </EditorContainer>
          <DocsButton toggleDocs={handleToggleDoc}>Docs</DocsButton>
        </InnerContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}

export default App;
