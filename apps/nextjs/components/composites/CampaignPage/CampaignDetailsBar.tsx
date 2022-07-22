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
import {
  Avatar,
  Badge,
  Card,
  CardAvatar,
  CardBackground,
  CardBadge,
  CardContent,
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
        direction={{ base: "column", sm: "row" }}
        spacing={{ base: 6, sm: 12 }}
        alignItems="flex-start"
      >
        <Card
          colorScheme="gray"
          variant="solid"
          size="sm"
          minW="260px"
          pt="36px"
        >
          <CardAvatar
            as={Avatar}
            sx={{ ">img": { transform: "scale(1)" } }}
            size="xl"
            src={mockCreatedByProps.imageUrl}
          />
          <CardBackground h="92px" />
          <CardContent pt="2">
            <Heading size="xs" noOfLines={2}>
              Created by Joe Sullivan
            </Heading>
            <Text fontSize="xs" noOfLines={2}>
              on 01/12/2022
            </Text>
            <Badge mt="1" mb="3" fontSize="0.6rem" fontWeight="normal">
              Pigpile Employee
            </Badge>
            <Text fontSize="xs" noOfLines={2}>
              Join us as we pigpile on{" "}
              <em>The Somerville Homeless Coalition</em>.
            </Text>
          </CardContent>
        </Card>
        {/*        <CampaignCreationCallout
          w="full"
          flex={{ base: "0 0 100%", sm: "0 0 25%", sm: "0 0 20%" }}
          {...mockCreatedByProps}
        />*/}
        <Box>
          <Heading size="md" fontWeight="semibold">
            The Details
          </Heading>
          <Text
            fontSize="2xl"
            mb="10"
            whiteSpace="pre-wrap"
            noOfLines={isOpen ? undefined : 7}
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
