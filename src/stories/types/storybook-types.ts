import { DecoratorFunction } from "@storybook/addons";

export interface StoryMetadata<StoryFnReturnType> {
  component?: React.ReactNode;
  title?: string;
  decorators?: DecoratorFunction<StoryFnReturnType>[];
}

export interface CSFStory<StoryFnReturnType> {
  (): StoryFnReturnType;
  name?: string;
  decorators?: DecoratorFunction<StoryFnReturnType>[];
  parameters?: { [name: string]: unknown };
}
