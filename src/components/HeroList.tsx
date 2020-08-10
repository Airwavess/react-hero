import React, { memo } from "react";
import styled from "styled-components";

import HeroCard from "./HeroCard";
import { HeroListProps } from "./types/HeroList";

const NavList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-gap: 4rem;

  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

const HeroList: React.FC<HeroListProps> = ({
  heroes,
  handleFetchHeroProfile,
}) => {
  return (
    <NavList data-testid="card-list">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          hero={hero}
          handleFetchHeroProfile={handleFetchHeroProfile}
        />
      ))}
    </NavList>
  );
};

export default memo(HeroList);
