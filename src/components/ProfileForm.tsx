import React, { memo } from "react";
import styled from "styled-components";
import { MdAdd, MdRemove, MdSave, MdGrade } from "react-icons/md";

import { ProfileFormProps } from "./types/ProfileForm";

const ProfileFormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto-fit);
  }
`;

const AbilityWrap = styled.div`
  display: grid;
  flex-direction: column;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

const AbilityRow = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  line-height: 2.4rem;
  height: 8rem;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const AbilityTitle = styled.p`
  width: 4rem;
  margin-right: 4rem;

  @media (max-width: 1200px) {
    margin-right: 2rem;
  }
`;

const AbilityContent = styled.p`
  width: 4rem;
  text-align: center;

  &:disabled {
    color: rgba(0, 0, 0, 0.26);
  }
`;

const AbilityButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin: 0 12px;
  border: 2px solid white;
  color: #0c5499;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: #e7e7e7;
    color: rgba(0, 0, 0, 0.26);
    border: 2px solid #e7e7e7;
  }
`;

const RightBox = styled.div`
  align-self: end;
  justify-self: end;

  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const RemainingPoint = styled.div`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  text-align: right;
`;

const SaveButton = styled.button`
  height: 3rem;
  border: 2px solid white;
  background-color: white;
  color: #0c5499;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 4px;

  &:disabled {
    background-color: #e7e7e7;
    color: rgba(0, 0, 0, 0.26);
    border: 2px solid #e7e7e7;
  }
`;

const ABILITIES = ["str", "int", "agi", "luk"];

const ProfileForm: React.FC<ProfileFormProps> = ({
  profile,
  profileIsEmpty,
  unusedPoints,
  handleChangeProfile,
  handleSaveProfile,
}) => {
  return (
    <ProfileFormContainer onSubmit={handleSaveProfile}>
      <AbilityWrap>
        {ABILITIES.map((ability) => (
          <AbilityRow key={ability}>
            <AbilityTitle data-testid="ability-title">{ability}</AbilityTitle>
            <AbilityButton
              type="button"
              onClick={() => handleChangeProfile("DECREASE", ability)}
              data-testid="ability-minus-btn"
              disabled={profileIsEmpty}
            >
              <MdRemove />
            </AbilityButton>
            <AbilityContent data-testid="ability-content">
              {profileIsEmpty ? <MdGrade /> : profile[ability]}
            </AbilityContent>
            <AbilityButton
              type="button"
              onClick={() => handleChangeProfile("INCREASE", ability)}
              data-testid="ability-plus-btn"
              disabled={profileIsEmpty}
            >
              <MdAdd />
            </AbilityButton>
          </AbilityRow>
        ))}
      </AbilityWrap>
      <RightBox>
        <FlexColumn>
          <RemainingPoint data-testid="remaining-points">
            Remaining Points: {unusedPoints}
          </RemainingPoint>
          <SaveButton
            type="submit"
            data-testid="save-button"
            disabled={profileIsEmpty}
          >
            <MdSave /> Save
          </SaveButton>
        </FlexColumn>
      </RightBox>
    </ProfileFormContainer>
  );
};

export default memo(ProfileForm);
