import { Callout } from "@pigpile/core";

export default {
  title: "Layout / Callout",
};

export const Basic = () => {
  return <Callout>callout children</Callout>;
};

export const WithColorScheme = () => {
  return <Callout colorScheme="blue">callout children</Callout>;
};
