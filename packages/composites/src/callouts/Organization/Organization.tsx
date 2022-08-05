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
        h="full"
        justify="space-between"
      >
        <Box>
          <Heading
            fontSize="xl"
            mb="0"
          >
            {name}
          </Heading>
          <Text
            fontSize="lg"
            mb="4"
          >
            {location}
          </Text>
          <Text>{description}</Text>
        </Box>
        {url && (
          <HStack justify="flex-end">
            <Button
              as="a"
              color="inherit"
              colorScheme="blackAlpha"
              href={url}
              size="sm"
              target="_blank"
              variant="ghost"
            >
              {getLabel("Visit Website")}
            </Button>
          </HStack>
        )}
      </Stack>
    </Callout>
  );
};
