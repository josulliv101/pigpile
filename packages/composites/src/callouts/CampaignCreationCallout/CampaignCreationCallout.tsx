import * as React from "react";
import { Avatar, Badge, Box, HStack, Text } from "@chakra-ui/react";
import { Callout, CalloutProps } from "@pigpile/core";

export interface CampaignCreationCalloutProps extends CalloutProps {
  createdBy: string;
  createdAt: string;
  isEmployee: boolean;
  imageUrl?: string;
  description?: string;
}

const EmployeeBadge = () => (
  <Badge
    textTransform="none"
    fontSize="12px"
    fontWeight="medium"
    variant="subtle"
  >
    Pigpile Employee
  </Badge>
);

export const CampaignCreationCallout: React.FC<CampaignCreationCalloutProps> =
  ({ createdAt, createdBy, isEmployee, description, imageUrl, ...props }) => {
    return (
      <Callout
        bgColor="gray.200"
        color="gray.500"
        _dark={{ bgColor: "gray.600", color: "gray.300" }}
        px="8"
        py="6"
        {...props}
      >
        <HStack spacing="4" align="flex-start">
          <Avatar size="md" name={createdBy} src={imageUrl} />
          <Box>
            <Text fontSize="sm">
              Fundraiser created by {createdBy} on {createdAt}
            </Text>
            {isEmployee && <EmployeeBadge />}
            <Text fontSize="14px" mt="4">
              {description}
            </Text>
          </Box>
        </HStack>
      </Callout>
    );
  };
