import React from "react";
import styled from "styled-components";
import colorVariables from "../globalVariables";
import { AiFillCloseCircle } from "react-icons/ai";

const { mediumBlue, darkGreen } = colorVariables;

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
  z-index: 20;
  background: #fff;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (min-width: 650px) and (max-width: 992px) {
    width: 80%;
  }

  @media screen and (max-width: 649px) {
    width: 100%;
  }
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
  font-size: 1.5rem;
  color: ${darkGreen};
`;

const TextContent = styled.div`
  height: 900px;
  width: 100%;
  overflow-y: auto;
  padding-top: 1rem;
`;

const Heading = styled.h4`
  margin-top: 2rem;
`;

const InfoContainer = ({ isOpen, toggleDocs }) => {
  return (
    <Container isOpen={isOpen}>
      <CloseIcon onClick={toggleDocs} />
      <Title>Documentation</Title>
      <TextContent>
        <Heading>Headings</Heading>
        <p># Heading 1</p>
        <p>## Heading 2</p>
        <p>### Heading 3</p>
        <p>#### Heading 4</p>
        <p>##### Heading 5</p>
        <p>###### Heading 6</p>

        <Heading>Italics</Heading>
        <p>*This text* is italic</p>
        <p>_This text_ is italic</p>

        <Heading>Bold</Heading>
        <p>**This text** is bold/strong</p>
        <p>__This text__ is also bold</p>

        <Heading>Strikethrough</Heading>
        <p>~~This text~~ is strikethrough</p>

        <Heading>Horizontal Rule</Heading>
        <p>---</p>
        <p>___</p>

        <Heading>Blockquote</Heading>
        <p>{`> This is a quote`}</p>

        <Heading>Links</Heading>
        <p>[Google](http://www.google.com)</p>

        <Heading>
          See more in the{" "}
          <a
            href="https://www.markdownguide.org/basic-syntax/"
            target="_blank"
            rel="noreferrer"
          >
            official documentation
          </a>
        </Heading>
      </TextContent>
    </Container>
  );
};

export default InfoContainer;
