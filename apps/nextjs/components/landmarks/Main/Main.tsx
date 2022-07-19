import { Container, HTMLChakraProps } from "@josulliv101/core";

export const Main: React.FC<HTMLChakraProps<"main">> = (props) => {
  return <Container pt="60px" as="main" {...props} />;
};
