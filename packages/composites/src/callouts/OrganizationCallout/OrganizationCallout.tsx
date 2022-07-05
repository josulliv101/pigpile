import {
  Callout,
  CalloutProps,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
} from "@pigpile/core";

export interface OrganizationCalloutProps extends CalloutProps {
  name: string;
  location: string;
  description: string;
  url?: string;
}

export const OrganizationCallout: React.FC<OrganizationCalloutProps> = ({
  name,
  location,
  description,
  url,
  ...props
}) => {
  return (
    <Callout {...props}>
      <Stack justify="space-between" h="full">
        <Box>
          <Heading mb="0" fontSize="xl">
            {name}
          </Heading>
          <Text mb="4" fontSize="lg">
            {location}
          </Text>
          <Text>{description}</Text>
        </Box>
        {!!url && (
          <HStack justify="flex-end">
            <Button variant="ghost" size="sm" color="inherit">
              Visit Website
            </Button>
          </HStack>
        )}
      </Stack>
    </Callout>
  );
};
