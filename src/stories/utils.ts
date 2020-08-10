import { action } from "@storybook/addon-actions";

type ActionWithPreventDefault = (name: string) => void;

export const actionWithPreventDefault: ActionWithPreventDefault = (
  name: string
) => (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  action(name)(e);
};
