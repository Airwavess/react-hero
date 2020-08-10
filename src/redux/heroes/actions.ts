import {
  Hero,
  HeroProfile,
  HeroesActionTypes,
  FETCH_HERO,
  STORE_HERO,
  FETCH_HERO_PROFILE,
  STORE_HERO_PROFILE,
  CHANGE_PROFILE,
  RESET_PROFILE,
  SAVE_PROFILE,
  SET_SELECTED_HERO_ID,
} from './types';

export const fetchHero = (): HeroesActionTypes => ({
  type: FETCH_HERO,
});

export const storeHero = (heroes: Hero[]): HeroesActionTypes => ({
  type: STORE_HERO,
  payload: heroes,
});

export const fetchHeroProfile = (heroId: string): HeroesActionTypes => ({
  type: FETCH_HERO_PROFILE,
  payload: { id: heroId },
});

export const storeHeroProfile = (profile: HeroProfile): HeroesActionTypes => ({
  type: STORE_HERO_PROFILE,
  payload: { profile },
});

export const changeProfile = (
  profile: HeroProfile,
  unusedPoints: number
): HeroesActionTypes => ({
  type: CHANGE_PROFILE,
  payload: { profile, unusedPoints },
});

export const saveProfile = (
  heroId: string,
  profile: HeroProfile
): HeroesActionTypes => ({
  type: SAVE_PROFILE,
  payload: { heroId, profile },
});

export const resetProfile = (): HeroesActionTypes => ({
  type: RESET_PROFILE,
});

export const setSelectedHeroId = (heroId: string): HeroesActionTypes => ({
  type: SET_SELECTED_HERO_ID,
  payload: { heroId },
});
