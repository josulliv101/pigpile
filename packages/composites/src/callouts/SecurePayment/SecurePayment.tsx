import { FaLock } from "react-icons/fa";
import { Avatar, Box, Heading, HStack, Stack, Text, HTMLChakraProps } from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";

export const SecurePayment: React.FC<HTMLChakraProps<"div">> = (props) => {
  const { getLabel } = useLabelBundle();
  return (
    <Stack color="gray.600" bgColor="#ececec" px="10" py="6">
      <HStack alignItems="center" justifyContent="flex-start" color="gray.900" spacing="4">
        <Box opacity=".4">
          <Avatar
            color="#cac5bc"
            bgColor="gray.600"
            icon={<FaLock color="inherit" fontSize="12px" />}
            size="sm"
          />
        </Box>
        <Heading opacity=".7" color="gray.600" size="xs" mb="1">
          {getLabel("Stripe Secure Payment Processing")}
        </Heading>
      </HStack>
      <Text fontSize="xs">
        {getLabel(
          "Stripe is certified to PCI Service Provider Level 1 – the most stringent level in the industry"
        )}
        .{" "}
        <Box
          as="a"
          textDecoration="underline"
          target="_blank"
          href="https://stripe.com/docs/security/stripe"
        >
          {getLabel("Learn more")}
        </Box>
        .
      </Text>
    </Stack>
  );
};
