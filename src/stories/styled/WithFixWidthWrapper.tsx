import React from "react";
import styled from "styled-components";

const FixWidthWrapper = styled.div`
  ${(props: { width: string | undefined }) => `
    width: ${props.width}
  `}
`;

interface WithFixWidthWrapperProps {
  width?: string;
}

const withFixWidthWrapper: React.FC<WithFixWidthWrapperProps> = ({
  width,
  children,
}) => {
  return <FixWidthWrapper width={width}>{children}</FixWidthWrapper>;
};

export default withFixWidthWrapper;
