import React from "react";

import Loading from "../components/_Shared/Loading";
import WithCenterWrapper from "./styled/WithCenterWrapper";
import { StoryMetadata, CSFStory } from "./types/storybook-types";

export default {
  component: Loading,
  title: "Loading",
  decorators: [(story) => <WithCenterWrapper>{story()}</WithCenterWrapper>],
} as StoryMetadata<JSX.Element>;

export const Default: CSFStory<JSX.Element> = () => {
  return <Loading />;
};
