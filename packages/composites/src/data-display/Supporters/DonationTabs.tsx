import * as React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {
  Box,
  ButtonGroup,
  IconButton,
  HStack,
  Tab,
  Tabs,
  TabIndicator,
  TabList,
  Text,
} from "@chakra-ui/react";

export interface DonationTabsProps {
  activeSortByIndex: number;
  onSortByChange: (i: number) => void;
  activeViewIndex: number;
  onViewChange: (i: number) => void;
}

export const DonationTabs: React.FC<DonationTabsProps> = ({
  activeSortByIndex,
  onSortByChange,
  activeViewIndex,
  onViewChange,
}) => {
  return (
    <HStack
      bg="gray.100"
      _dark={{ bgColor: "gray.600" }}
      w="full"
      mb="4"
      justify="space-between"
      align="center"
    >
      <Box pos="relative" display={{ base: "flex", md: "flex" }}>
        <Tabs
          size="sm"
          index={activeSortByIndex}
          isManual
          variant="raised"
          onChange={onSortByChange}
        >
          <TabList>
            <Tab>
              <Text>Latest Donations</Text>
            </Tab>
            <Tab>
              <Text>Top Donations</Text>
            </Tab>
            <Tab display={{ base: "none", md: "flex" }}>
              <Text>Summary</Text>
            </Tab>
          </TabList>
          <TabIndicator
            sx={{
              transitionDelay: "100ms",
              transition: "top, left, bottom, right, width",
            }}
          />
        </Tabs>
      </Box>
      <Box pos="relative" display="flex" align="center" flexDirection="row">
        <Tabs
          display={{ base: "block", lg: "block" }}
          mr="2"
          size="sm"
          index={activeViewIndex}
          isManual
          variant="raised"
          onChange={onViewChange}
        >
          <TabList>
            <Tab>
              <HStack spacing=".4rem" align="center">
                <Text>Cards</Text>
              </HStack>
            </Tab>
            <Tab>
              <HStack spacing=".4rem" align="center">
                <Text>List</Text>
              </HStack>
            </Tab>
          </TabList>
          <TabIndicator
            sx={{ transition: "top, left, bottom, right, width" }}
          />
        </Tabs>
        <ButtonGroup
          ml="0"
          px="2"
          borderLeftWidth={1}
          alignItems="center"
          size="xs"
          variant="ghost"
        >
          <IconButton aria-label="previous" icon={<FaChevronLeft />} />
          <IconButton aria-label="next" icon={<FaChevronRight />} />
        </ButtonGroup>
      </Box>
    </HStack>
  );
};
