import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { HeroCardProps } from "./types/HeroCard";
import { RootState } from "../redux";

const CardContent = styled(NavLink)`
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid white;
  border-radius: 2px;
  display: grid;
`;

const HeroImage = styled.img`
  width: 100%;
`;

const HeroName = styled.div`
  width: 100%;
  font-size: 3rem;
  font-family: "Archivo Black", sans-serif;
  white-space: nowrap;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  line-height: 2.4em;
  transition: all 0.5s;

  ${(props: { selected: boolean }) =>
    props.selected &&
    `
    color: gold;
  `}

  @media (max-width: 1200px) {
    font-size: 2rem;
  }
`;

const HeroCard: React.FC<HeroCardProps> = ({
  hero: { id, name, image },
  handleFetchHeroProfile,
}) => {
  const selectedHeroId = useSelector(
    (state: RootState) => state.heroes.selectedHeroId,
    (heroId, preHeroId) => heroId !== id && preHeroId !== id
  );

  return (
    <CardContent
      to={`/heroes/${id}`}
      data-testid="hero-card"
      onClick={() => handleFetchHeroProfile(id)}
    >
      <HeroImage data-testid="hero-image" src={image} alt={name} />
      <HeroName data-testid="hero-name" selected={selectedHeroId === id}>
        {name}
      </HeroName>
    </CardContent>
  );
};

export default HeroCard;
