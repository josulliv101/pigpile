import { Button, Stack  } from "@chakra-ui/react";
import { Swatch, SwatchButton } from "@pigpile/core";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FaHeart } from "react-icons/fa";

const colors = [
  { color1: "blue.500" },
  { color1: "blue.500", color2: "pink.300" },
  { color1: "blue.500", color2: "pink.300", color3: "#48bb78" }
]

const meta = {
  component: Swatch,
  title: "Swatch",
  parameters: {
    argsByIndex: [{}, {}, {}]
  },
} as ComponentMeta<typeof Swatch>

const Template: ComponentStory<typeof Swatch> = (args, { parameters: { argsByIndex } = {} }) => {
  return (
    <Stack direction="row" align="center" spacing="3">
      <Swatch {...colors[0]} {...args} {...argsByIndex[0]} />
      <Swatch {...colors[1]} {...args} {...argsByIndex[1]} />
      <Swatch {...colors[2]} {...args} {...argsByIndex[2]} />
    </Stack>
  )
};

export const Basic = Template.bind({});

export const Active_ = Template.bind({});
Active_.args = {
  isActive: true,
};

export const Sizes = Template.bind({});
Sizes.parameters = {
  argsByIndex: [{ size: "sm" }, { size: "md" }, { size: "lg" }]
}

export const VariantRound_ = Template.bind({});
VariantRound_.args = {
  variant: "round",
};
VariantRound_.parameters = {
  argsByIndex: [{}, { isActive: true }, {}]
}

export const VariantRoundCurved_ = Template.bind({});
VariantRoundCurved_.args = {
  variant: "round-curved",
};
VariantRoundCurved_.parameters = VariantRound_.parameters

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  activeIcon: FaHeart,
  isActive: true
}

const clickHandler = () => console.log('click')

export const SwatchButton_ = () => (
  <Stack direction="row" align="center" spacing="3">
    <SwatchButton aria-label="custom label" {...colors[2]} onClick={clickHandler} />
    <SwatchButton {...colors[2]} variant="round-curved" onClick={clickHandler} />
  </Stack>
)

export { meta as default };
