import { Hero } from '../../redux/heroes/types';

export interface HeroCardProps {
  hero: Hero;
  handleFetchHeroProfile: (heroId: string) => void;
}
