import rootAPI from "./root-api";
import { HeroProfile } from "../redux/heroes/types";
import {
  GetHeroAPI,
  GetHeroProfileAPI,
  PatchHeroProfileAPI,
} from "./types/heroes";

export const getHero: GetHeroAPI = () => rootAPI.get("/heroes");

export const getHeroProfile: GetHeroProfileAPI = (heroId: string) =>
  rootAPI.get(`/heroes/${heroId}/profile`);

export const patchHeroProfile: PatchHeroProfileAPI = (
  heroId: string,
  data: HeroProfile
) => rootAPI.patch(`/heroes/${heroId}/profile`, data);
