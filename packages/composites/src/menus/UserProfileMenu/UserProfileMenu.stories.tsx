import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { UserProfileMenu } from "./UserProfileMenu";
import { mockProps } from "./mock";

export default {
  title: "Menus / User Profile Menu",
  component: UserProfileMenu,
  argTypes: {},
} as ComponentMeta<typeof UserProfileMenu>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof UserProfileMenu> = (args) => {
  return (
    <UserProfileMenu
      {...args}
      {...mockProps}
    />
  );
};

export const Basic = Template.bind({});
Basic.play = async () => {
  await sleep(1000);
  const btn = screen.getByRole("button");
  await userEvent.click(btn);
  await sleep(500);
};

export const Logout = Template.bind({});
Logout.play = async () => {
  await Basic.play();
  await userEvent.keyboard("{arrowdown}{arrowdown}{arrowdown}{enter}", {
    delay: 400,
  });
};
