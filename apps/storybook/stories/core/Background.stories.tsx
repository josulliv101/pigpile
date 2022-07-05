import { Background, Stack } from "@pigpile/core";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import * as React from "react";

const meta = {
  component: Background,
  title: "Media and Icons / Background",
} as ComponentMeta<typeof Background>;

const Template: ComponentStory<typeof Background> = (args) => (
  <Background {...args} />
);

const bgImage =
  "url(https://pigpile-next.firebaseapp.com/images/landscape.png)";

const baseArgs = {
  children: <div>child text</div>,
  p: 4,
  minH: 300,
};

const Background_ = Template.bind({});
Background_.args = {
  ...baseArgs,
  bgColor: "blue.50",
  _dark: {
    bgColor: "blue.600",
  },
};

const GradientVariant = Template.bind({});
GradientVariant.args = {
  ...baseArgs,
  colorScheme: "gray",
  variant: "gradient",
};

const GradientVariantAndColorScheme = Template.bind({});
GradientVariantAndColorScheme.args = {
  ...GradientVariant.args,
  colorScheme: "blue",
};

const GradientVariantWithImage = Template.bind({});
GradientVariantWithImage.args = {
  ...GradientVariant.args,
  bgImage,
};

const GradientVariantWithImageAndColorScheme = Template.bind({});
GradientVariantWithImageAndColorScheme.args = {
  ...GradientVariantAndColorScheme.args,
  ...GradientVariantWithImage.args,
  colorScheme: "blue",
};

const WithImage = Template.bind({});
WithImage.args = {
  ...baseArgs,
  bgImage,
};

const colorSchemesArgs = {
  ...baseArgs,
  minH: "100px",
};
const ColorSchemes = (
  args,
  {
    parameters: {
      chakra: { colorSchemes },
    },
  }
) => {
  console.log("parameters", colorSchemes);
  return (
    <Stack>
      {colorSchemes.map((color) => (
        <Background_ key={color} {...colorSchemesArgs} colorScheme={color} />
      ))}
    </Stack>
  );
};

const GradientVariantColorSchemesWithImage = (
  args,
  {
    parameters: {
      chakra: { colorSchemes },
    },
  }
) => {
  console.log("parameters", colorSchemes);
  return (
    <Stack>
      {colorSchemes.map((color) => (
        <Background_
          key={color}
          {...GradientVariantWithImageAndColorScheme.args}
          colorScheme={color}
          w="300px"
          minH="120px"
        />
      ))}
    </Stack>
  );
};

export {
  meta as default,
  Background_ as BgColor,
  ColorSchemes,
  WithImage,
  GradientVariant,
  GradientVariantAndColorScheme,
  GradientVariantWithImage,
  GradientVariantColorSchemesWithImage,
};
