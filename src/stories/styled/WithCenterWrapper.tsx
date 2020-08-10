import React from "react";
import styled from "styled-components";

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const WithCenterWrapper: React.FC = ({ children }) => {
  return <CenterWrapper>{children}</CenterWrapper>;
};

export default WithCenterWrapper;
