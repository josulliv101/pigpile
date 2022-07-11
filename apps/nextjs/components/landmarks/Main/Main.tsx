import { Container } from "@pigpile/core";

export const Main: React.FC<HTMLChakraProps<"main">> = (props) => {
  console.log("Main", props);
  return <Container pt="60px" as="main" {...props} />;
};
