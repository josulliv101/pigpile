import { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  screen,
  userEvent,
  waitFor,
  fireEvent,
} from "@storybook/testing-library";
import { themeOptions } from "@pigpile/theme";
import { useColorMode } from "@pigpile/core";
import { ThemeMenu } from "./ThemeMenu";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function userTab(iterations = 1) {
  for (let i = 0; i < iterations; i++) {
    console.log("iteration", i);
    await userEvent.tab();
    await sleep(500);
  }
}

export default {
  title: "Menus / Theme / Menu",
  component: ThemeMenu,
  argTypes: {
    themeOptions: {
      name: "themeOptions",
      defaultValue: themeOptions,
    },
  },
} as ComponentMeta<typeof ThemeMenu>;

const Template: ComponentStory<typeof ThemeMenu> = ({
  themeOptions,
  onThemeOptionChange: onThemeOptionChangeArg,
  ...args
}) => {
  const [state, setState] = useState(themeOptions);
  const { setColorMode } = useColorMode();
  console.log("story themeOptions", themeOptions);
  const onChange = (optionId: string, index: number) => {
    console.log("onChange", state, optionId, index);
    if (optionId === "colorMode" && state.colorMode.index !== index) {
      // setColorMode(index === 0 ? 'light' : 'dark')
    }
    setState({
      ...state,
      [optionId]: { ...state[optionId], index },
    });
    onThemeOptionChangeArg(optionId, index);
  };
  return (
    <ThemeMenu {...args} themeOptions={state} onThemeOptionChange={onChange} />
  );
};

export const Basic = Template.bind({});
Basic.play = async () => {
  const btn = screen.getByLabelText("Theme");
  await sleep(500);
  await userEvent.click(btn);
  await sleep(500);
};

export const ChangeColorScheme = Template.bind({});
ChangeColorScheme.play = async () => {
  await Basic.play();
  await userTab(2);
  await userEvent.keyboard("{arrowright}{enter}", {
    delay: 500,
  });
};

export const ChangeColorMode = Template.bind({});
ChangeColorMode.play = async () => {
  await Basic.play();
  await userTab(3);
  await userEvent.keyboard("{arrowright}{enter}", {
    delay: 500,
  });
};

export const ChangeTheme = Template.bind({});
ChangeTheme.play = async () => {
  await Basic.play();
  await userTab(4);
  await userEvent.keyboard("{arrowright}{arrowright}{enter}", {
    delay: 500,
  });
};

export const ChangeAnimation = Template.bind({});
ChangeAnimation.play = async () => {
  await Basic.play();
  await userTab(5);
  await userEvent.keyboard("{arrowright}{arrowright}{enter}", {
    delay: 500,
  });
};