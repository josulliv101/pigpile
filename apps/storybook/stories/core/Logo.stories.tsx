import { Logo, Tail, Box, HStack } from "@josulliv101/core";

export default {
  title: "Media and Icons / Logo",
  decorators: [
    (Story: any) => (
      <HStack
        p="4"
        spacing="4"
      >
        <Story />
      </HStack>
    ),
  ],
};

export const Sizes = () =>
  [8, 12, 16].map((size) => (
    <Logo
      key={size}
      boxSize={size}
    />
  ));

export const CustomColor = () => (
  <Logo
    bgColor="purple.500"
    fill="green.300"
  />
);

export const ColorSchemes = (_, { parameters }) =>
  parameters.chakra.colorSchemes.map((color) => <Logo colorScheme={color} />);

export const monochromatic = () => (
  <Box
    bgColor="gray.400"
    borderRadius="full"
    overflow="hidden"
  >
    <Logo
      bgColor="transparent"
      borderWidth="0"
      fill="white"
      pos="relative"
      shadow="none"
      top="2px"
    />
  </Box>
);

export const TailOnly = () => <Tail fill="pink.200" />;
