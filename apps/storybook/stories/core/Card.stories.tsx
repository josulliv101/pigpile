import * as React from "react";
import {
  Card,
  CardAvatar,
  CardBackground,
  CardBadge,
  CardContent,
  Avatar,
  Badge,
  Heading,
  Text,
  VStack,
} from "@josulliv101/core";

export default {
  title: "Data Display / Card",
  decorators: [(story: Function) => <VStack spacing={4}>{story()}</VStack>],
};

const sizes = ["sm", "md", "lg"];

export const Sizes = () =>
  sizes.map((size) => (
    <Card size={size}>
      <CardAvatar as={Avatar} size={size} />
      <CardContent>card content</CardContent>
    </Card>
  ));

export const WithBackground = () =>
  sizes.map((size) => (
    <Card size={size}>
      <CardBackground />
      <CardAvatar as={Avatar} size={size} />
      <CardContent>card content</CardContent>
    </Card>
  ));

export const WithBadge = () =>
  sizes.map((size) => (
    <Card size={size}>
      <CardBackground />
      <CardBadge colorScheme="pink" variant="solid" as={Badge}>
        10
      </CardBadge>
      <CardAvatar as={Avatar} size={size} />
      <CardContent>card content</CardContent>
    </Card>
  ));

export const SolidVariant = (_, { parameters }) =>
  parameters.chakra.colorSchemes.map((color) => (
    <Card colorScheme={color}>
      <CardAvatar as={Avatar} />
      <CardBackground />
      <CardBadge variant="solid" as={Badge}>
        10
      </CardBadge>
      <CardContent>
        card content:
        <br />
        {color}
      </CardContent>
    </Card>
  ));

const MockAvatar = (props) => (
  <Avatar
    sx={{
      svg: { _dark: { color: "gray.300" }, _light: { color: "gray.200" } },
    }}
    {...props}
  />
);
const EmojiIcon = () => (
  <Text fontSize="44px" opacity=".7">
    🐭
  </Text>
);

export const OutlineVariant = (_, { parameters }) =>
  parameters.chakra.colorSchemes.map((color) => (
    <Card variant="outline" colorScheme={color}>
      <CardAvatar as={MockAvatar} />
      <CardBackground />
      <CardBadge variant="solid" colorScheme={color} as={Badge}>
        10
      </CardBadge>
      <CardContent>
        card content:
        <br />
        {color}
      </CardContent>
    </Card>
  ));

// CardMedia, CardAside
export const WithEmoji = () =>
  sizes.map((size) => (
    <Card colorScheme="blue" variant="outline" size={size}>
      <CardAvatar as={MockAvatar} icon={<EmojiIcon />} />
      <CardBackground />
      <CardBadge variant="solid" as={Badge}>
        10
      </CardBadge>
      <CardContent>card content</CardContent>
    </Card>
  ));
