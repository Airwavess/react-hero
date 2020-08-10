import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';

import HeroCard from '../../components/HeroCard';
import { renderHelper } from '../utils/render';
import { heroesData } from '../__mock__/props/heroes';

describe('Card component', () => {
  const hero = heroesData[0];

  const handleFetchHeroProfile = jest.fn();

  const props = { hero, selected: true, handleFetchHeroProfile };
  const routePath = '/heroes';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('it should display name and image', () => {
    renderHelper(<HeroCard {...props} />, { routePath });

    const name = screen.getByTestId('hero-name');
    const backgroundImage = screen.getByTestId('hero-image');

    expect(name).toHaveTextContent(hero.name);
    expect(backgroundImage).toHaveAttribute('src', hero.image);
  });

  test('onClick function should be called when clicking Card', () => {
    renderHelper(<HeroCard {...props} />, { routePath });

    fireEvent.click(screen.getByTestId('hero-card'));

    expect(handleFetchHeroProfile).toHaveBeenCalledTimes(1);
  });
});
