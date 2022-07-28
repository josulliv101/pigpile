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

export const CampaignDetailsBar = ({ description }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container pt={{ base: "12", md: "20" }} mb={{ base: 6, md: 10 }}>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        spacing={{ base: 6, md: 12 }}
        alignItems="flex-start"
      >
        <Card
          p={{ base: 10, sm: 20, md: 10 }}
          colorScheme="gray"
          variant="solid"
          size="sm"
          minW="260px"
          pt="36px"
          w="full"
        >
          <CardAvatar
            as={Avatar}
            size={{ base: "xl", md: "xl" }}
            src="https://avatars.githubusercontent.com/u/1703430?s=96&v=4"
          />
          <CardBackground h={{ base: "92px", sm: "132px", md: "92px" }} />
          <CardContent pt="2">
            <Heading size="xs" noOfLines={2}>
              Created by Joe Sullivan
            </Heading>
            <Text fontSize="xs" noOfLines={2}>
              on 01/12/2022
            </Text>
            <Badge
              mt="1"
              mb="3"
              fontSize="0.6rem"
              fontWeight="normal"
              textTransform="none"
            >
              Pigpile Employee
            </Badge>
            <Text fontSize="xs" noOfLines={2}>
              Join us as we pigpile on{" "}
              <em>The Somerville Homeless Coalition</em>.
            </Text>
          </CardContent>
        </Card>
        <Box>
          <Heading
            fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
            fontWeight="semibold"
            mb="2"
          >
            The Details
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "1.06rem", lg: "xl" }}
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
