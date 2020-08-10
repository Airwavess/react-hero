import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import HeroProfile from '../../components/HeroProfile';
import { HeroProfileProps } from '../../components/types/HeroProfile';
import { profileData } from '../__mock__/props/profile';
import { renderHelper } from '../utils/render';

describe('Profile component', () => {
  const preloadState = {
    heroes: { profile: profileData, unusedPoints: 0 },
  };
  const routePath = '/heroes/2';
  const ABILITIES = ['str', 'int', 'agi', 'luk'];
  let props: HeroProfileProps = {
    profile: profileData,
  };

  test('should display profile correctly', () => {
    renderHelper(<HeroProfile {...props} />, { preloadState, routePath });

    const abilityTitles = screen.getAllByTestId(`ability-title`);
    const abilityContents = screen.getAllByTestId(`ability-content`);

    ABILITIES.forEach((ability, idx) => {
      expect(abilityTitles[idx]).toHaveTextContent(ability);
      expect(abilityContents[idx]).toHaveTextContent(
        profileData[ability].toString()
      );
    });

    expect(screen.getByTestId('remaining-points')).toHaveTextContent(
      'Remaining Points: 0'
    );
  });
});
