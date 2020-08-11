import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";

import HeroList from "../components/HeroList";
import WithFixWidthWrapper from "./styled/WithFixWidthWrapper";
import WithCenterWrapper from "./styled/WithCenterWrapper";
import { StoryMetadata, CSFStory } from "./types/storybook-types";
import reducer from "../redux/root-reducer";
import { heroReducerInitialState, heroes } from "./data/redux";

const preloadState = {
  heroes: heroReducerInitialState,
};

const store = createStore(reducer, preloadState);

export default {
  component: HeroList,
  title: "Card List",
  decorators: [
    (story) => (
      <Provider store={store}>
        <Router>
          <WithCenterWrapper>
            <WithFixWidthWrapper width="80%">{story()}</WithFixWidthWrapper>
          </WithCenterWrapper>
        </Router>
      </Provider>
    ),
  ],
} as StoryMetadata<JSX.Element>;

const actionsData = {
  handleFetchHeroProfile: action("handle fetch hero profile"),
};

const heroListProps = {
  heroes,
  handleFetchHeroProfile: actionsData.handleFetchHeroProfile,
};

export const Default: CSFStory<JSX.Element> = () => {
  return (
    <HeroList
      heroes={heroListProps.heroes}
      handleFetchHeroProfile={heroListProps.handleFetchHeroProfile}
    />
  );
};

