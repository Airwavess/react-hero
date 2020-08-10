import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import HeroList from '../../components/HeroList';
import { heroesData } from '../__mock__/props/heroes';
import { renderHelper } from '../utils/render';

describe('HeroList component', () => {
  const heroes = heroesData;
  const routePath = '/heroes';
  const handleFetchHeroProfile = () => {};

  test('display card content correctly', () => {
    renderHelper(
      <HeroList
        heroes={heroes}
        handleFetchHeroProfile={handleFetchHeroProfile}
      />,
      { routePath }
    );

    const numOfChildren = screen.getByTestId('card-list').children.length;
    expect(numOfChildren).toBe(heroes.length);
  });
});
