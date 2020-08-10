import { Hero } from '../../redux/heroes/types';

export interface HeroListProps {
  heroes: Hero[];
  handleFetchHeroProfile: (heroId: string) => void;
}
