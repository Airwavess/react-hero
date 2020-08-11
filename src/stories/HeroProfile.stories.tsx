import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { MemoryRouter as Router } from "react-router-dom";
import { object } from "@storybook/addon-knobs";

import HeroProfile from "../components/HeroProfile";
import WithFixWidthWrapper from "./styled/WithFixWidthWrapper";
import WithCenterWrapper from "./styled/WithCenterWrapper";
import { StoryMetadata, CSFStory } from "./types/storybook-types";
import reducer from "../redux/root-reducer";
import { heroReducerInitialState, profile } from "./data/redux";

export default {
  component: HeroProfile,
  title: "HeroProfile",
} as StoryMetadata<JSX.Element>;

const defaultPreloadState = {
  heroes: {
    ...heroReducerInitialState,
    profile,
  },
};

export const Default: CSFStory<JSX.Element> = () => {
  return <HeroProfile />;
};
Default.decorators = [
  (story) => (
    <Provider
      store={createStore(reducer, object("state", defaultPreloadState))}
    >
      <Router initialEntries={["/heroes/1"]}>
        <WithCenterWrapper>
          <WithFixWidthWrapper width="80%">{story()}</WithFixWidthWrapper>
        </WithCenterWrapper>
      </Router>
    </Provider>
  ),
];

const withoutValuePreloadState = {
  heroes: heroReducerInitialState,
};

export const WithoutValue: CSFStory<JSX.Element> = () => {
  return <HeroProfile />;
};
WithoutValue.decorators = [
  (story) => (
    <Provider
      store={createStore(reducer, object("state", withoutValuePreloadState))}
    >
      <Router initialEntries={["/heroes/1"]}>
        <WithCenterWrapper>
          <WithFixWidthWrapper width="80%">{story()}</WithFixWidthWrapper>
        </WithCenterWrapper>
      </Router>
    </Provider>
  ),
];
