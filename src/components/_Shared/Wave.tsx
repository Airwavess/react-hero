import React from "react";
import styled, { keyframes } from "styled-components";

const drift = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const WaveBox = styled.div`
  position: fixed;
  top: 0;
  transform: rotate(80deg);
  left: 0;

  & > div {
    width: 1500px;
    height: 1300px;
    margin-left: -150px;
    margin-top: -250px;
    transform-origin: 50% 48%;
    border-radius: 43%;
    opacity: 0.4;

    position: fixed;
    top: 3%;
    left: 10%;
  }
`;

const WaveOne = styled.div`
  background: #0af;
  animation: ${drift} 7000ms infinite linear;
`;

const WaveTwo = styled.div`
  animation: ${drift} 3000ms infinite linear;
  opacity: 0.1;
  background: black;
`;

const WaveThree = styled.div`
  animation: ${drift} 7500ms infinite linear;
  background-color: #77daff;
`;

const Wave = () => {
  return (
    <WaveBox>
      <WaveOne />
      <WaveTwo />
      <WaveThree />
    </WaveBox>
  );
};

export default Wave;
