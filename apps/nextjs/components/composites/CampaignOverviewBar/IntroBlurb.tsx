import { FaShareAlt } from "react-icons/fa";
import { AccentButton, Box, Heading, Text } from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";
import { statusSlice } from "store";
import { useAppDispatch } from "hooks";

interface Props {
  title: string;
  blurb: string;
}

export const IntroBlurb: React.FC<Props> = ({ title, blurb }) => {
  const dispatch = useAppDispatch();
  const { getLabel } = useLabelBundle();
  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      mb={{ base: 10, md: 0 }}
    >
      <Heading
        fontSize={{ base: "xl", lg: "2xl" }}
        fontWeight="semibold"
        mb="2"
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "1.06rem", lg: "xl" }}
        noOfLines={{ base: 20, md: 5 }}
      >
        {blurb}
      </Text>
      <AccentButton
        alignSelf="center"
        borderRadius="full"
        bottom="5"
        boxShadow="md"
        maxW={{ base: "90%", sm: "32%" }}
        minH="40px"
        mt={{ base: "10", md: "8%" }}
        onClick={() =>
          dispatch(
            statusSlice.actions.setStatus({
              title: "Functionality Disabled",
              description: "Sharing is disabled in the dev env.",
            })
          )
        }
        position={{ base: "absolute", md: "static" }}
        rightIcon={<FaShareAlt fontSize="14px" />}
        size={{ base: "md", md: "sm", lg: "lg" }}
        w={{ base: "full", md: "30%" }}
      >
        {getLabel("Share")}
      </AccentButton>
    </Box>
  );
};
