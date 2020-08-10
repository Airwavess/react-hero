import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { action } from "@storybook/addon-actions";

import HeroCard from "../components/HeroCard";
import WithFixWidthWrapper from "./styled/WithFixWidthWrapper";
import WithCenterWrapper from "./styled/WithCenterWrapper";
import { StoryMetadata, CSFStory } from "./types/storybook-types";
import reducer from "../redux/root-reducer";
import { RootState } from "../redux";
import { heroReducerInitialState } from "./data/redux";

const hero = {
  id: "1",
  name: "Thor",
  image:
    "http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg",
};

export default {
  component: HeroCard,
  title: "HeroCard",
} as StoryMetadata<JSX.Element>;

const defaultCardPreloadState: RootState = {
  heroes: heroReducerInitialState,
};

const actionsData = {
  handleFetchHeroProfile: action("handle fetch hero profile"),
};

const heroCardProps = {
  hero,
  handleFetchHeroProfile: actionsData.handleFetchHeroProfile,
};

export const Default: CSFStory<JSX.Element> = () => {
  return (
    <HeroCard
      hero={heroCardProps.hero}
      handleFetchHeroProfile={heroCardProps.handleFetchHeroProfile}
    />
  );
};
Default.story = {
  decorators: [
    (story) => (
      <Provider store={createStore(reducer, defaultCardPreloadState)}>
        <Router>
          <WithCenterWrapper>
            <WithFixWidthWrapper width="200px">{story()}</WithFixWidthWrapper>
          </WithCenterWrapper>
        </Router>
      </Provider>
    ),
  ],
};

const selectedCardPreloadState: RootState = {
  heroes: {
    ...heroReducerInitialState,
    selectedHeroId: "1",
  },
};

export const SelectedCard: CSFStory<JSX.Element> = () => {
  return (
    <HeroCard
      hero={heroCardProps.hero}
      handleFetchHeroProfile={heroCardProps.handleFetchHeroProfile}
    />
  );
};
SelectedCard.story = {
  name: "Selected Card",
  decorators: [
    (story) => (
      <Provider store={createStore(reducer, selectedCardPreloadState)}>
        <Router>
          <WithCenterWrapper>
            <WithFixWidthWrapper width="200px">{story()}</WithFixWidthWrapper>
          </WithCenterWrapper>
        </Router>
      </Provider>
    ),
  ],
};
