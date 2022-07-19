import { Callout } from "@josulliv101/core";

export default {
  title: "Layout / Callout",
};

export const Basic = () => {
  return <Callout>callout children</Callout>;
};

export const WithColorScheme = () => {
  return <Callout colorScheme="blue">callout children</Callout>;
};
