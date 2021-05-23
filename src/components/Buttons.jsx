import React from "react";
import styled, { css } from "styled-components";
import colorVariables from "../globalVariables";

const { mediumGreen, darkGreen } = colorVariables;

const baseButtonsStyle = css`
  position: fixed;
  bottom: 20px;
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

const RsButton = styled.button`
  ${baseButtonsStyle};
  right: 20px;
`;

const DcButton = styled.button`
  ${baseButtonsStyle};
  left: 20px;
`;

export const ResetButton = ({ children, reset }) => {
  return <RsButton onClick={reset}>{children}</RsButton>;
};

export const DocsButton = ({ children, toggleDocs }) => {
  return <DcButton onClick={toggleDocs}>{children}</DcButton>;
};
