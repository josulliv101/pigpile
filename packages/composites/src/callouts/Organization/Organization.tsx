import {
  Callout,
  CalloutProps,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
} from "@josulliv101/core";
import { useLabelBundle } from "@josulliv101/labelbundles";

export interface OrganizationProps extends CalloutProps {
  name: string;
  location: string;
  description: string;
  url?: string;
}

export const Organization: React.FC<OrganizationProps> = ({
  name,
  location,
  description,
  url,
  ...rootStyle
}) => {
  const { getLabel } = useLabelBundle();
  return (
    <Callout {...rootStyle}>
      <Stack
        justify="space-between"
        h="full"
      >
        <Box>
          <Heading
            mb="0"
            fontSize="xl"
          >
            {name}
          </Heading>
          <Text
            mb="4"
            fontSize="lg"
          >
            {location}
          </Text>
          <Text>{description}</Text>
        </Box>
        {url && (
          <HStack justify="flex-end">
            <Button
              as="a"
              target="_blank"
              href={url}
              colorScheme="blackAlpha"
              variant="ghost"
              size="sm"
              color="inherit"
            >
              {getLabel("Visit Website")}
            </Button>
          </HStack>
        )}
      </Stack>
    </Callout>
  );
};
