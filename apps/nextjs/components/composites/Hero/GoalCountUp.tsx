import { CountUpBox, Progress } from "@josulliv101/core";
import { useLabelBundle } from "hooks";

interface Props {
  currentAmount: number;
  goalAmount: number;
}

export const GoalCountUp: React.FC<Props> = ({
  currentAmount = 0,
  goalAmount = 100,
}) => {
  const { getLabel } = useLabelBundle();
  return (
    <CountUpBox
      _dark={{ bgColor: "rgb(88 88 88 / 80%)" }}
      bgColor="rgb(203 211 183 / 85%)"
      bottom={{ base: "2px", md: "10px" }}
      countUpValue={currentAmount}
      label={`${currentAmount} ${getLabel("of")} ${goalAmount} ${getLabel(
        "items.alt"
      )}`}
      limit={goalAmount}
      maxW="201px"
      minW={{ base: "120px", md: "160px" }}
      pos="absolute"
      right={{ base: "-10px", md: "20px" }}
      showLabelOnEnd
      sx={{
        "@media screen and (min-width: 200px) and (max-width: 768px)": {
          transform: "scale(.8)",
        },
      }}
    >
      <Progress
        h="4px"
        pos="relative"
        top="10px"
        value={Math.round((currentAmount / goalAmount) * 100)}
        w="full"
      />
    </CountUpBox>
  );
};
