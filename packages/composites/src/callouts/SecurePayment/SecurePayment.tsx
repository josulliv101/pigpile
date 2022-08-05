import { FaLock } from "react-icons/fa";
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  HTMLChakraProps,
} from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";

export const SecurePayment: React.FC<HTMLChakraProps<"div">> = (props) => {
  const { getLabel } = useLabelBundle();
  return (
    <Stack
      _dark={{ color: "gray.100", bgColor: "gray.600" }}
      bgColor="#ececec"
      color="gray.600"
      px="10"
      py="6"
      {...props}
    >
      <HStack
        alignItems="center"
        color="gray.900"
        justifyContent="flex-start"
        spacing="4"
      >
        <Box opacity=".4">
          <Avatar
            bgColor="gray.600"
            color="#cac5bc"
            icon={
              <FaLock
                color="inherit"
                fontSize="12px"
              />
            }
            size="sm"
          />
        </Box>
        <Heading
          _dark={{ color: "gray.200" }}
          color="gray.500"
          mb="1"
          size="xs"
        >
          {getLabel("Stripe Secure Payment Processing")}
        </Heading>
      </HStack>
      <Text
        _dark={{ color: "gray.200" }}
        color="gray.500"
        fontSize="xs"
      >
        {getLabel(
          "Stripe is certified to PCI Service Provider Level 1 – the most stringent level in the industry"
        )}
        .{" "}
        <Box
          as="a"
          href="https://stripe.com/docs/security/stripe"
          target="_blank"
          textDecoration="underline"
        >
          {getLabel("Learn more")}
        </Box>
        .
      </Text>
    </Stack>
  );
};
