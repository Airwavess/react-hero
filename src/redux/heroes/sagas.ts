import { all } from 'redux-saga/effects';
import { put, takeEvery, call } from 'redux-saga/effects';

import { getHero, getHeroProfile, patchHeroProfile } from '../../apis/heroes';
import { storeHero, storeHeroProfile, setSelectedHeroId } from './actions';
import {
  FETCH_HERO,
  FETCH_HERO_PROFILE,
  SAVE_PROFILE,
  FetchHeroProfileAction,
  SaveProfileAction,
} from './types';

export function* fetchHero() {
  const res = yield call(getHero);
  const heroes = res.data;

  yield put(storeHero(heroes));
}

export function* fetchHeroProfile({ payload }: FetchHeroProfileAction) {
  const { id } = payload;
  yield put(setSelectedHeroId(id));

  const res = yield call(getHeroProfile, id);
  const profile = res.data;

  yield put(storeHeroProfile(profile));
}

export function* saveProfile({ payload }: SaveProfileAction) {
  const { heroId, profile } = payload;
  const { str, int, agi, luk } = profile;
  const data = { str, int, agi, luk };

  yield call(patchHeroProfile, heroId, data);
}

export default function* heroesSaga() {
  yield all([
    takeEvery(FETCH_HERO, fetchHero),
    takeEvery(FETCH_HERO_PROFILE, fetchHeroProfile),
    takeEvery(SAVE_PROFILE, saveProfile),
  ]);
}
