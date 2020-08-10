import { HeroProfile } from "../../redux/heroes/types";

export interface ProfileFormProps {
  profile: HeroProfile;
  profileIsEmpty: boolean;
  unusedPoints: number;
  handleChangeProfile: (action: string, ability: string) => void;
  handleSaveProfile: (e: React.FormEvent) => void;
}
