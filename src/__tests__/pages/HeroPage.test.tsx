import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import HeroPage from '../../pages/HeroPage';
import { storeHeroProfile } from '../../redux/heroes/actions';
import { renderHelper } from '../utils/render';
import { heroesData } from '../__mock__/props/heroes';
import { profileData } from '../__mock__/props/profile';

describe('HeroPage Page', () => {
  const ABILITIES = ['str', 'int', 'agi', 'luk'];

  test('should render content correctly', () => {
    const preloadState = {
      heroes: { heroes: heroesData, profile: profileData, unusedPoints: 0 },
    };
    const { store } = renderHelper(<HeroPage />, {
      preloadState,
      routePath: '/heroes/2',
    });

    // When the first time HeroPage render content, resetProfile action will
    // be called. So, we should dispatch another action to store the expected
    // profile data.
    store.dispatch(storeHeroProfile(profileData));

    const numOfChildren = screen.getByTestId('card-list').children.length;
    expect(numOfChildren).toBe(heroesData.length);

    const abilityTitles = screen.getAllByTestId(`ability-title`);
    const abilityContents = screen.getAllByTestId(`ability-content`);

    ABILITIES.forEach((ability, idx) => {
      expect(abilityTitles[idx]).toHaveTextContent(ability);
      expect(abilityContents[idx]).toHaveTextContent(
        profileData[ability].toString()
      );
    });

    expect(screen.getByTestId('remaining-points')).toHaveTextContent(
      `Remaining Points: 0`
    );
  });
});
