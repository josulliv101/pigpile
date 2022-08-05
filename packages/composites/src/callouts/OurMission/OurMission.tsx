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
      flex="1"
      bgPosition="20% 50%"
      variant="gradient"
      minH="360px"
      p={{ base: 10, sm: 20, md: 10 }}
      {...props}
    >
      <Container
        pos="relative"
        h="full"
        flexDirection="column"
        color="white"
        justifyContent="flex-start"
        h="full"
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
