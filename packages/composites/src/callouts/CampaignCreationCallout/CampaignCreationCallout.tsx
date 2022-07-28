import {
  Avatar,
  Badge,
  Box,
  Stack,
  Text,
  Callout,
  CalloutProps,
} from "@josulliv101/core";

export interface CampaignCreationCalloutProps extends CalloutProps {
  createdBy: string;
  createdAtInMS: number;
  isEmployee: boolean;
  imageUrl?: string;
  description?: string;
}

const EmployeeBadge = (props) => (
  <Badge
    textTransform="none"
    fontSize="11px"
    fontWeight="medium"
    borderRadius="full"
    py="2px"
    px="10px"
    {...props}
  >
    Pigpile Employee
  </Badge>
);

export const CampaignCreationCallout: React.FC<CampaignCreationCalloutProps> =
  ({
    createdAtInMS,
    createdBy,
    isEmployee,
    description,
    imageUrl,
    ...props
  }) => {
    return (
      <Callout
        bgColor="gray.100"
        color="gray.500"
        _dark={{ bgColor: "gray.600", color: "gray.300" }}
        p="6"
        {...props}
      >
        <Stack spacing="4" align="center" spacing="3">
          <Avatar
            size={{ base: "lg", md: "md" }}
            name={createdBy}
            src={imageUrl}
          />

          <Text textAlign="center" fontSize="sm" noOfLines={2}>
            Created by {createdBy}
          </Text>
          <Text opacity=".8" fontSize="xs">
            {createdAtInMS}
          </Text>
          {isEmployee && <EmployeeBadge />}

          {description && (
            <Text fontSize="14px" mt="4">
              {description}
            </Text>
          )}
        </Stack>
      </Callout>
    );
  };
