import { HeroProfile, Hero } from "../redux/heroes/types";

type IsEmptyProfile = (profile: HeroProfile) => boolean;
type IsEmptyHeroData = (heroes: Hero[]) => boolean;

export const isEmptyProfile: IsEmptyProfile = (profile: HeroProfile) => {
  return Object.keys(profile).every((key) => profile[key] === 0);
};

export const isEmptyHeroData: IsEmptyHeroData = (heroes: Hero[]) => {
  return heroes.length === 0;
};
