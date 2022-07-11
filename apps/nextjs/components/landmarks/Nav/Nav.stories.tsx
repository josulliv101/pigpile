import { ComponentStory, ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import { Box } from "@pigpile/core";
import { Nav } from "./Nav";

export default {
  title: "Nav",
  component: Nav,
  argTypes: {},
  decorators: [
    (Story) => (
      <Box bgColor="blackAlpha.600" h="inherit" p="4">
        <Story />
      </Box>
    ),
  ],
} as ComponentMeta<typeof Nav>;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Template: ComponentStory<typeof Nav> = (args) => {
  return <Nav {...args} />;
};

export const Unauthenticated = Template.bind({});

export const Authenticated = Template.bind({});
Authenticated.args = {
  user: {
    displayName: "Mr. Foobar",
    isAnonymous: false,
  },
};

export const AuthenticatedAsAdmin = Template.bind({});
AuthenticatedAsAdmin.args = {
  user: {
    ...Authenticated.args.user,
    isAdmin: true,
  },
};
