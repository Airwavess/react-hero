import React from 'react';
import styled from 'styled-components';

const FixContent = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FlexCenter = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WitchFixContent: React.FC = ({ children }) => {
  return (
    <FixContent>
      <FlexCenter>{children}</FlexCenter>
    </FixContent>
  );
};

export default WitchFixContent;
