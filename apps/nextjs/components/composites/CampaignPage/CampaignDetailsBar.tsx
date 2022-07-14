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
} from "@pigpile/core";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const CampaignDetailsBar = ({ description }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container pt={{ base: "12", md: "20" }} mb="10">
      <Stack direction="row" spacing={{ base: 0, lg: 12 }}>
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="flex-start"
          minW="280px"
        >
          <List
            bg="gray.100"
            _dark={{ bgColor: "gray.700" }}
            padding="44px"
            spacing={3}
          >
            <ListItem>
              <ListIcon as={ChevronRightIcon} />
              The Details
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} />
              Donation Timeline
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} />
              FAQ
            </ListItem>
            <ListItem>
              <ListIcon as={ChevronRightIcon} />
              Sponsors
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={ChevronRightIcon} />
              How It Works
            </ListItem>
          </List>
        </Box>
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
