import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text,
  useDisclosure,
} from "@josulliv101/core";
import { CampaignCreationCallout } from "@josulliv101/composites";

const mockCreatedByProps = {
  createdBy: "Joe Sullivan",
  createdAt: "01/12/2022",
  isEmployee: true,
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/pigpile-next-mvp.appspot.com/o/site%2Fjoe.png?alt=media&token=b986e32a-0060-4036-ab1e-ab2208aee186",
  // description: "Sed ut perspiciatis unde omnis iste natus error sit.",
};

export const CampaignDetailsBar = ({ description }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container pt={{ base: "12", md: "20" }} mb="10">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 6, sm: 12 }}
        alignItems="flex-start"
      >
        <CampaignCreationCallout
          w="full"
          flex={{ base: "0 0 100%", sm: "0 0 10rem", md: "0 0 15rem" }}
          {...mockCreatedByProps}
        />
        <Box>
          <Heading size="lg" fontWeight="semibold">
            The Details
          </Heading>
          <Text
            fontSize="2xl"
            mb="10"
            whiteSpace="pre-wrap"
            noOfLines={isOpen ? undefined : 6}
          >
            {description}
          </Text>
          <Center>
            <Button size="sm" variant="ghost" onClick={onToggle}>
              {isOpen ? "less" : "read more"}
            </Button>
          </Center>
        </Box>
      </Stack>
    </Container>
  );
};
