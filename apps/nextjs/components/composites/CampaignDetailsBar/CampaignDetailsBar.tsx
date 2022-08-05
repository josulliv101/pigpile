import { FaMapMarkerAlt as FaMapMarker } from "react-icons/fa";
import {
  AccentButton,
  Box,
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
    <Container
      mb={{ base: 6, md: 10 }}
      pt={{ base: "12", md: "20" }}
    >
      <Stack
        alignItems="flex-start"
        direction={{ base: "column-reverse", md: "row" }}
        spacing={{ base: 6, md: 12 }}
      >
        <Organizer
          createdAtInMS={createdAtInMS}
          maxW={{ base: "full", md: "272px" }}
          {...organizer}
        >
          <Text
            fontSize="xs"
            mt="3"
            noOfLines={2}
          >
            {getLabel("Join us as we pigpile on:")}
          </Text>
          <Text
            fontSize="xs"
            fontStyle="oblique"
            mt="1"
            noOfLines={2}
          >
            {beneficiary}
          </Text>
          <Box
            alignItems="center"
            display="flex"
          >
            <FaMapMarker
              fontSize=".75rem"
              opacity=".5"
            />
            <Text
              fontSize="xs"
              noOfLines={1}
              pl="1"
            >
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
            noOfLines={isOpen ? undefined : 7}
            whiteSpace="pre-wrap"
          >
            {description?.split("::").join("\n\n")}
          </Text>
          <Center>
            <AccentButton
              onClick={onToggle}
              size="sm"
              variant="ghost"
            >
              {isOpen ? getLabel("less") : getLabel("read more")}
            </AccentButton>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
};
