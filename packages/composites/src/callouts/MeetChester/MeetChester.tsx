import {
  Card,
  CardAvatar,
  CardBackground,
  CardContent,
  Chester,
  Heading,
  Text,
  HTMLChakraProps,
} from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";

export interface MeetChesterProps extends HTMLChakraProps<"div"> {
  animationType: string;
}

export const MeetChester: React.FC<MeetChesterProps> = ({ animationType, ...rootStyle }) => {
  const { getLabel } = useLabelBundle();
  return (
    <Card
      colorScheme="gray"
      p={{ base: 10, sm: 20, md: 10 }}
      pt="36px"
      size="sm"
      variant="solid"
      {...rootStyle}
    >
      <CardAvatar
        bgColor="#84a3b2"
        borderRadius="full"
        h="24"
        p="4"
        position="relative"
        w="24"
      >
        <Chester
          animationType={animationType}
          left="4px"
          position="relative"
          transform="scale(.8)"
        />
      </CardAvatar>
      <CardBackground h={{ base: "92px", sm: "132px", md: "92px" }} />
      <CardContent pt="2">
        <Heading
          mb="1"
          noOfLines={2}
          size="xs"
        >
          {getLabel("Say hello to Chester")}
        </Heading>
        <Text fontSize="xs">
          {getLabel(
            "Chester is our beloved mascot. If we ever get to the point of offering swag - he'll be prominently featured on t-shirts, stickers, mugs, and more."
          )}
        </Text>
        <Text
          color="subtle"
          fontSize="xs"
          mt="3"
          opacity=".7"
        >
          {getLabel("Hint: he's clickable.")}
        </Text>
      </CardContent>
    </Card>
  );
};
