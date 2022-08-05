import { FaMapMarkerAlt as FaMapMarker } from "react-icons/fa";
import {
  AccentButton,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@josulliv101/core";
import { Organizer } from "@josulliv101/composites";
import { useLabelBundle } from "@josulliv101/labelbundles";
import { Organizer as OrganizerType } from "@josulliv101/types";

interface Props {
  beneficiary: string;
  description: string;
  location: string;
  organizer: OrganizerType;
  createdAtInMS: number;
}

export const CampaignDetailsBar: React.FC<Props> = ({
  beneficiary,
  createdAtInMS,
  description,
  location,
  organizer,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { getLabel } = useLabelBundle();
  return (
    <Container pt={{ base: "12", md: "20" }} mb={{ base: 6, md: 10 }}>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        spacing={{ base: 6, md: 12 }}
        alignItems="flex-start"
      >
        <Organizer
          maxW={{ base: "full", md: "272px" }}
          createdAtInMS={createdAtInMS}
          {...organizer}
        >
          <Text mt="3" fontSize="xs" noOfLines={2}>
            {getLabel("Join us as we pigpile on:")}
          </Text>
          <Text mt="1" fontSize="xs" noOfLines={2} fontStyle="oblique">
            {beneficiary}
          </Text>
          <Box display="flex" alignItems="center">
            <FaMapMarker fontSize=".75rem" opacity=".5" />
            <Text fontSize="xs" noOfLines={1} pl="1">
              {location}
            </Text>
          </Box>
        </Organizer>
        <Box>
          <Heading
            fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
            fontWeight="semibold"
            mb="2"
          >
            {getLabel("The Details")}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "1.06rem", lg: "xl" }}
            mb="10"
            whiteSpace="pre-wrap"
            noOfLines={isOpen ? undefined : 7}
          >
            {description?.split("::").join("\n\n")}
          </Text>
          <Center>
            <AccentButton size="sm" variant="ghost" onClick={onToggle}>
              {isOpen ? getLabel("less") : getLabel("read more")}
            </AccentButton>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
};
