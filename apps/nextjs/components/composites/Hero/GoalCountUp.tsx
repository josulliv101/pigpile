import { CountUpBox, Progress } from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";

interface Props {
  currentAmount: number;
  goalAmount: number;
}

export const GoalCountUp: React.FC<Props> = ({ currentAmount = 0, goalAmount = 100 }) => {
  const { getLabel } = useLabelBundle();
  return (
    <CountUpBox
      minW={{ base: "120px", md: "160px" }}
      maxW="201px"
      bgColor="rgb(203 211 183 / 80%)"
      pos="absolute"
      bottom={{ base: "2px", md: "10px" }}
      right={{ base: "-10px", md: "20px" }}
      countUpValue={currentAmount}
      limit={goalAmount}
      label={`${currentAmount} of ${goalAmount} ${getLabel("items")}`}
      showLabelOnEnd
      sx={{
        "@media screen and (min-width: 200px) and (max-width: 768px)": {
          transform: "scale(.8)",
        },
      }}
    >
      <Progress
        pos="relative"
        top="10px"
        w="full"
        h="4px"
        value={Math.round((currentAmount / goalAmount) * 100)}
      />
    </CountUpBox>
  );
};
