import {
  HeroesState,
  HeroesActionTypes,
  STORE_HERO,
  STORE_HERO_PROFILE,
  CHANGE_PROFILE,
  RESET_PROFILE,
  SET_SELECTED_HERO_ID,
} from "./types";

const initialState: HeroesState = {
  heroes: [],
  profile: {
    str: 0,
    int: 0,
    agi: 0,
    luk: 0,
  },
  unusedPoints: 0,
  selectedHeroId: "",
};

const heroesReducer = (
  state = initialState,
  action: HeroesActionTypes
): HeroesState => {
  switch (action.type) {
    case STORE_HERO:
      return {
        ...state,
        heroes: action.payload,
      };
    case STORE_HERO_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
      };
    case CHANGE_PROFILE:
      return {
        ...state,
        profile: action.payload.profile,
        unusedPoints: action.payload.unusedPoints,
      };
    case RESET_PROFILE:
      return {
        ...state,
        profile: {
          str: 0,
          int: 0,
          agi: 0,
          luk: 0,
        },
        unusedPoints: 0,
      };
    case SET_SELECTED_HERO_ID:
      return {
        ...state,
        selectedHeroId: action.payload.heroId,
      };
    default:
      return state;
  }
};

export default heroesReducer;
