import { call, put } from 'redux-saga/effects';

import {
  fetchHero,
  fetchHeroProfile,
  saveProfile,
} from '../../../redux/heroes/sagas';
import {
  getHero,
  getHeroProfile,
  patchHeroProfile,
} from '../../../apis/heroes';
import { heroesData } from '../../__mock__/props/heroes';
import { profileData } from '../../__mock__/props/profile';
import {
  storeHero,
  storeHeroProfile,
  setSelectedHeroId,
} from '../../../redux/heroes/actions';
import { FETCH_HERO_PROFILE, SAVE_PROFILE } from '../../../redux/heroes/types';

describe('Hero sagas', () => {
  test('fetchHero saga function', () => {
    const generator = fetchHero();

    const callGetHeroAPI = generator.next().value;
    expect(callGetHeroAPI).toStrictEqual(call(getHero));

    const storeIntoRedux = generator.next({ data: heroesData }).value;
    expect(storeIntoRedux).toStrictEqual(put(storeHero(heroesData)));
  });

  test('fetchHeroProfile saga function', () => {
    const generator = fetchHeroProfile({
      type: FETCH_HERO_PROFILE,
      payload: { id: '2' },
    });

    const dispatchSetSelectedHeroId = generator.next().value;
    expect(dispatchSetSelectedHeroId).toStrictEqual(
      put(setSelectedHeroId('2'))
    );

    const callGetHeroProfileAPI = generator.next().value;
    expect(callGetHeroProfileAPI).toStrictEqual(call(getHeroProfile, '2'));

    const storeIntoRedux = generator.next({ data: profileData }).value;
    expect(storeIntoRedux).toStrictEqual(put(storeHeroProfile(profileData)));
  });

  test('saveProfile saga function', () => {
    const generator = saveProfile({
      type: SAVE_PROFILE,
      payload: { heroId: '2', profile: profileData },
    });

    const callPatchHeroProfile = generator.next().value;
    expect(callPatchHeroProfile).toStrictEqual(
      call(patchHeroProfile, '2', profileData)
    );
  });
});
