import React, { memo, useEffect, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import HeroList from "../components/HeroList";
import HeroProfile from "../components/HeroProfile";
import Loading from "../components/_Shared/Loading";
import WithFixContent from "../components/_Shared/WithFixContent";

import { isEmptyHeroData } from "../utils/checkEmpty";
import { RootState } from "../redux";
import {
  fetchHeroProfile,
  resetProfile,
  setSelectedHeroId,
} from "../redux/heroes/actions";

const HeroPage = () => {
  const heroes = useSelector((state: RootState) => state.heroes.heroes);
  const dispatch = useDispatch();
  const { heroId } = useParams();
  const controlInitialRender = useRef();

  const handleFetchHeroProfile = useCallback(
    (selectedHeroId: string) => {
      dispatch(resetProfile());
      dispatch(fetchHeroProfile(selectedHeroId));
    },
    [dispatch]
  );

  useEffect(() => {
    if (heroId === undefined) {
      dispatch(setSelectedHeroId(""));
    }

    if (controlInitialRender.current !== undefined) {
      return;
    }

    if (heroId !== undefined) {
      controlInitialRender.current = heroId;
      handleFetchHeroProfile(heroId);
    }
  }, [handleFetchHeroProfile, heroId, dispatch]);

  if (isEmptyHeroData(heroes)) {
    return (
      <WithFixContent>
        <Loading />
      </WithFixContent>
    );
  }

  return (
    <>
      <HeroList
        heroes={heroes}
        handleFetchHeroProfile={handleFetchHeroProfile}
      />
      {!!heroId && <HeroProfile />}
    </>
  );
};

export default memo(HeroPage);
