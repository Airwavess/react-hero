export const FETCH_HERO = 'FETCH_HERO';
export const STORE_HERO = 'STORE_HERO';
export const FETCH_HERO_PROFILE = 'FETCH_HERO_PROFILE';
export const STORE_HERO_PROFILE = 'STORE_HERO_PROFILE';
export const CHANGE_PROFILE = 'CHANGE_PROFILE';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const RESET_PROFILE = 'RESET_PROFILE';
export const SET_SELECTED_HERO_ID = 'SET_SELECTED_HERO_ID';

export interface Hero {
  id: string;
  name?: string;
  image?: string;
}

export interface HeroProfile {
  str: number;
  int: number;
  agi: number;
  luk: number;
  [index: string]: number;
}

export interface HeroesState {
  heroes: Hero[];
  profile: HeroProfile;
  unusedPoints: number;
  selectedHeroId: string;
}

interface FetchHeroAction {
  type: typeof FETCH_HERO;
}

interface StoreHeroAction {
  type: typeof STORE_HERO;
  payload: Hero[];
}

export interface FetchHeroProfileAction {
  type: typeof FETCH_HERO_PROFILE;
  payload: Hero;
}

interface StoreHeroProfileAction {
  type: typeof STORE_HERO_PROFILE;
  payload: {
    profile: HeroProfile;
  };
}

interface ChangeProfileAction {
  type: typeof CHANGE_PROFILE;
  payload: { profile: HeroProfile; unusedPoints: number };
}

export interface SaveProfileAction {
  type: typeof SAVE_PROFILE;
  payload: { heroId: string; profile: HeroProfile };
}

export interface ResetProfileAction {
  type: typeof RESET_PROFILE;
}

export interface SetSelectedHeroIdAction {
  type: typeof SET_SELECTED_HERO_ID;
  payload: { heroId: string };
}

export type HeroesActionTypes =
  | FetchHeroAction
  | StoreHeroAction
  | FetchHeroProfileAction
  | StoreHeroProfileAction
  | ChangeProfileAction
  | SaveProfileAction
  | ResetProfileAction
  | SetSelectedHeroIdAction;
