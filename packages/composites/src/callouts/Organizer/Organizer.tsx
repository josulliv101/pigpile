import {
  Avatar,
  Badge,
  Card,
  CardAvatar,
  CardBackground,
  CardContent,
  Heading,
  Text,
  CalloutProps,
} from "@josulliv101/core";
import { relativeDays } from "@josulliv101/formatting";
import { useLabelBundle } from "@josulliv101/labelbundles";

export interface OrganizerProps extends CalloutProps {
  displayName: string;
  createdAtInMS: number;
  isEmployee?: boolean;
  imageUrl?: string;
  description?: string;
}

export const Organizer: React.FC<OrganizerProps> = ({
  createdAtInMS,
  displayName,
  isEmployee,
  children,
  imageUrl,
  ...rootStyle
}) => {
  const { getLabel } = useLabelBundle();
  return (
    <Card
      p={{ base: 10, sm: 20, md: 10 }}
      colorScheme="gray"
      variant="solid"
      size="sm"
      minW="240px"
      pt="36px"
      w="full"
      {...rootStyle}
    >
      <CardAvatar as={Avatar} size={{ base: "xl", md: "xl" }} src={imageUrl} maxW="96px" />
      <CardBackground h={{ base: "92px", sm: "132px", md: "92px" }} />
      <CardContent pt="2">
        <Heading size="xs" noOfLines={2} mb="3">
          {displayName} {getLabel("is organizing this fundraiser")}.
        </Heading>
        {isEmployee && (
          <Badge mt="1" mb="1" fontSize="0.6rem" fontWeight="normal" textTransform="none">
            Pigpile {getLabel("Employee")}
          </Badge>
        )}
        <Text fontSize="11px" noOfLines={2} opacity=".8">
          {getLabel("Created")} {relativeDays(createdAtInMS)}
        </Text>
        {children}
      </CardContent>
    </Card>
  );
};
