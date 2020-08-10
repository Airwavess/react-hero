import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animated, useSprings } from "react-spring";

const Icons = styled.div`
  width: 8rem;
  height: 8rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`;

const Icon = styled(animated.div)`
  background: url(${(props: { image: string }) => props.image}) no-repeat;
  background-size: 100%;
`;

const Loading = () => {
  const getIcons = () => {
    const icons = [
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/square.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/cross.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/circle.png",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/triangle.png",
    ];
    // icons.sort(() => Math.random() - 0.5);
    return icons;
  };
  const [images, ] = useState(getIcons());

  const [springs, set] = useSprings(4, () => ({}));

  useEffect(() => {
    (function start() {
      set((index) => ({
        from: {
          rotate: 270,
          scale: 0,
        },
        to: {
          rotate: 360,
          scale: 1,
        },
        delay: 300 * index + 100,
      }));
      setInterval(start, 3000);
    })()
    
  }, [set]);

  return (
    <Icons>
      {springs.map((props, index) => (
        <Icon style={props} key={index} image={images[index]} />
      ))}
    </Icons>
  );
};

export default Loading;
