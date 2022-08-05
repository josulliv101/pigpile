import {
  Background,
  Container,
  Text,
  HTMLChakraProps,
} from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";

export const OurMission: React.FC<HTMLChakraProps<"div">> = (props) => {
  const { getLabel } = useLabelBundle();
  return (
    <Background
      bgPosition="20% 50%"
      flex="1"
      minH="360px"
      p={{ base: 10, sm: 20, md: 10 }}
      variant="gradient"
      {...props}
    >
      <Container
        color="white"
        flexDirection="column"
        h="full"
        justifyContent="flex-start"
        pos="relative"
        pt={{ base: 0, md: 4 }}
      >
        <Text
          align="center"
          fontSize="xl"
          fontWeight="500"
          mb="3"
        >
          {getLabel(
            "Help us in our mission to inspire giving and help good causes raise funds/in-kind donations"
          )}
          .
        </Text>
      </Container>
    </Background>
  );
};
