import { useDispatch } from "react-redux";
import { FaShareAlt } from "react-icons/fa";
import { AccentButton, Box, Button, Heading, Text } from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";
import { statusSlice } from "store";

interface Props {
  title: string;
  blurb: string;
}

export const IntroBlurb: React.FC<Props> = ({ title, blurb }) => {
  const dispatch = useDispatch();
  const { getLabel } = useLabelBundle();
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      mb={{ base: 10, md: 0 }}
    >
      <Heading fontSize={{ base: "xl", lg: "2xl" }} fontWeight="semibold" mb="2">
        {title}
      </Heading>
      <Text fontSize={{ base: "lg", md: "1.06rem", lg: "xl" }} noOfLines={{ base: 20, md: 5 }}>
        {blurb}
      </Text>
      <AccentButton
        onClick={() =>
          dispatch(
            statusSlice.actions.setStatus({
              title: "Functionality Disabled",
              description: "Sharing is disabled in the dev env.",
            })
          )
        }
        position={{ base: "absolute", md: "static" }}
        bottom="5"
        rightIcon={<FaShareAlt fontSize="14px" />}
        size={{ base: "md", md: "sm", lg: "lg" }}
        borderRadius="full"
        minH="40px"
        maxW={{ base: "90%", sm: "32%" }}
        w={{ base: "full", md: "30%" }}
        mt={{ base: "10", md: "8%" }}
        alignSelf="center"
        boxShadow="md"
      >
        {getLabel("Share")}
      </AccentButton>
    </Box>
  );
};
