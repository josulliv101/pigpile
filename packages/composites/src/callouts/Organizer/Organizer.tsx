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
      colorScheme="gray"
      minW="240px"
      p={{ base: 10, sm: 20, md: 10 }}
      pt="36px"
      size="sm"
      variant="solid"
      w="full"
      {...rootStyle}
    >
      <CardAvatar
        as={Avatar}
        maxW="96px"
        size={{ base: "xl", md: "xl" }}
        src={imageUrl}
      />
      <CardBackground h={{ base: "92px", sm: "132px", md: "92px" }} />
      <CardContent pt="2">
        <Heading
          mb="3"
          noOfLines={2}
          size="xs"
        >
          {displayName} {getLabel("is organizing this fundraiser")}.
        </Heading>
        {isEmployee && (
          <Badge
            fontSize="0.6rem"
            fontWeight="normal"
            mb="1"
            mt="1"
            textTransform="none"
          >
            Pigpile {getLabel("Employee")}
          </Badge>
        )}
        <Text
          fontSize="11px"
          noOfLines={2}
          opacity=".8"
        >
          {getLabel("Created")} {relativeDays(createdAtInMS)}
        </Text>
        {children}
      </CardContent>
    </Card>
  );
};
