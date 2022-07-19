import * as React from "react";
import { Chester } from "@josulliv101/core";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Media and Icons / Chester",
  // decorators: [(story: Function) => <Container mt={4}>{story()}</Container>],
};
const clickHandler = () => alert("Hello, I am Chester.");

export const Basic = () => {
  return <Chester onClick={clickHandler} />;
};

export const Bounce = () => {
  return <Chester onClick={clickHandler} animationType="jump" animate />;
};

export const Wiggle = () => {
  return <Chester onClick={clickHandler} animationType="wiggle" animate />;
};

export const Wahoo = () => {
  return <Chester onClick={clickHandler} animationType="wahoo" animate />;
};
