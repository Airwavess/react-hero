import { AxiosResponse } from "axios";
import { HeroProfile } from "../../redux/heroes/types";

export type GetHeroAPI = () => Promise<AxiosResponse>;
export type GetHeroProfileAPI = (heroId: string) => Promise<AxiosResponse>;
export type PatchHeroProfileAPI = (
  heroId: string,
  data: HeroProfile
) => Promise<AxiosResponse>;
