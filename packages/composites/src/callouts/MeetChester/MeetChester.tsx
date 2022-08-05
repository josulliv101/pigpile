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

export const MeetChester: React.FC<MeetChesterProps> = ({
  animationType,
  ...rootStyle
}) => {
  const { getLabel } = useLabelBundle();
  return (
    <Card
      p={{ base: 10, sm: 20, md: 10 }}
      colorScheme="gray"
      variant="solid"
      size="sm"
      pt="36px"
      {...rootStyle}
    >
      <CardAvatar
        bgColor="#84a3b2"
        w="24"
        h="24"
        p="4"
        borderRadius="full"
        position="relative"
      >
        <Chester
          position="relative"
          left="4px"
          animationType={animationType}
          transform="scale(.8)"
        />
      </CardAvatar>
      <CardBackground h={{ base: "92px", sm: "132px", md: "92px" }} />
      <CardContent pt="2">
        <Heading size="xs" noOfLines={2} mb="1">
          {getLabel("Say hello to Chester")}
        </Heading>
        <Text fontSize="xs">
          {getLabel(
            "Chester is our beloved mascot. If we ever get to the point of offering swag - he'll be prominently featured on t-shirts, stickers, mugs, and more."
          )}
        </Text>
        <Text opacity=".7" mt="3" fontSize="xs" color="subtle">
          {getLabel("Hint: he's clickable.")}
        </Text>
      </CardContent>
    </Card>
  );
};
