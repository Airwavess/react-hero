import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import ProfileForm from '../../components/ProfileForm';
import { ProfileFormProps } from '../../components/types/ProfileForm';
import { profileData } from '../__mock__/props/profile';

describe('ProfileForm component', () => {
  const handleChangeProfile = jest.fn();
  const handleSaveProfile = jest.fn((e) => e.preventDefault());

  let props: ProfileFormProps;

  beforeEach(() => {
    props = {
      profile: profileData,
      profileIsEmpty: false,
      unusedPoints: 0,
      handleChangeProfile,
      handleSaveProfile,
    };

    jest.clearAllMocks();
  });

  test('function should be called after click plus button', () => {
    render(<ProfileForm {...props} />);

    const abilityPlusBtns = screen.getAllByTestId(`ability-plus-btn`);

    fireEvent.click(abilityPlusBtns[0]);

    expect(handleChangeProfile).toBeCalledTimes(1);
  });

  test('function should be called after click minus button', () => {
    render(<ProfileForm {...props} />);

    const abilityMinusBtns = screen.getAllByTestId('ability-minus-btn');

    fireEvent.click(abilityMinusBtns[0]);

    expect(handleChangeProfile).toBeCalledTimes(1);
  });

  test('function should be called after click save button', () => {
    render(<ProfileForm {...props} />);

    const saveButton = screen.getByTestId('save-button');

    fireEvent.click(saveButton);

    expect(handleSaveProfile).toBeCalledTimes(1);
  });
});
