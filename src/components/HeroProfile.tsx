import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProfileForm from "./ProfileForm";
import Modal from "./_Shared/Modal";

import { HeroProfileProps } from "./types/HeroProfile";
import { RootState } from "../redux";
import { isEmptyProfile } from "../utils/checkEmpty";
import { changeProfile, saveProfile } from "../redux/heroes/actions";

const ProfileWrapper = styled.div`
  color: white;
  z-index: 10;
  border: 3px solid white;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: rgba(9, 80, 132, 0.4);
  font-family: "Archivo Black", sans-serif;
  font-size: 3rem;
  padding: 1rem;
  margin-top: 3rem;

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const HeroProfile: React.FC<HeroProfileProps> = () => {
  const dispatch = useDispatch();
  const { heroId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const unusedPoints = useSelector(
    (state: RootState) => state.heroes.unusedPoints
  );
  const profile = useSelector((state: RootState) => state.heroes.profile);

  const profileIsEmpty = useMemo(() => isEmptyProfile(profile), [profile]);

  /**
   * change an ability value of the profile
   * @param action INCREASE or DECREASE
   * @param ability name of ability
   */
  const handleChangeProfile = (action: string, ability: string) => {
    const newProfile = { ...profile };
    if (action === "INCREASE" && unusedPoints > 0) {
      newProfile[ability] += 1;
      dispatch(changeProfile(newProfile, unusedPoints - 1));
    } else if (action === "DECREASE" && profile[ability] > 0) {
      newProfile[ability] -= 1;
      dispatch(changeProfile(newProfile, unusedPoints + 1));
    }
  };

  /**
   * save the profile into database
   * @param event
   */
  const handleSaveProfile = (event: React.FormEvent) => {
    event.preventDefault();
    if (unusedPoints === 0) {
      dispatch(saveProfile(heroId, profile));
    } else {
      setModalOpen(true);
    }
  };

  const handleSetModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ProfileWrapper>
        <ProfileForm
          profile={profile}
          unusedPoints={unusedPoints}
          profileIsEmpty={profileIsEmpty}
          handleChangeProfile={handleChangeProfile}
          handleSaveProfile={handleSaveProfile}
        />
      </ProfileWrapper>
      <Modal open={modalOpen} onClose={handleSetModalClose}>
        error
      </Modal>
    </>
  );
};

export default HeroProfile;
