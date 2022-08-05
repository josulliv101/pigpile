import * as React from "react";
import { Chester } from "@josulliv101/core";

export default {
  title: "Media and Icons / Chester",
};
const clickHandler = () => alert("Hello, I am Chester.");

export const Basic = () => {
  return <Chester onClick={clickHandler} />;
};

export const Bounce = () => {
  return (
    <Chester
      animate
      animationType="jump"
      onClick={clickHandler}
    />
  );
};

export const Wiggle = () => {
  return (
    <Chester
      animate
      animationType="wiggle"
      onClick={clickHandler}
    />
  );
};

export const Wahoo = () => {
  return (
    <Chester
      animate
      animationType="wahoo"
      onClick={clickHandler}
    />
  );
};
