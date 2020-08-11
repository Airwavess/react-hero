import { Hero } from "../../redux/heroes/types";

export interface HeroCardProps extends Hero {
  handleFetchHeroProfile: (heroId: string) => void;
}
