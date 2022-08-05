import { Container, HTMLChakraProps } from "@josulliv101/core";

export const Main: React.FC<HTMLChakraProps<"main">> = (props) => {
  return (
    <Container
      as="main"
      pt="60px"
      {...props}
    />
  );
};
