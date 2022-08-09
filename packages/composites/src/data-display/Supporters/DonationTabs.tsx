import * as React from "react";
import { FaChevronRight, FaChevronLeft, FaChevronDown, FaTh, FaThList } from "react-icons/fa";
import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  HStack,
  Switch,
  Tab,
  Tabs,
  TabIndicator,
  TabList,
  Text,
  Tooltip,
} from "@josulliv101/core";

export interface DonationTabsProps {
  queryType?: number;
  viewType?: number;
  onChange: (id: string, i: number) => void;
}

export const DonationTabs: React.FC<DonationTabsProps> = ({ queryType, viewType, onChange }) => {
  return (
    <HStack
      _dark={{ bgColor: "gray.600" }}
      align="center"
      bg="gray.100"
      justify="space-between"
      mb="3"
      w="full"
    >
      <Box
        alignItems="center"
        display={{ base: "flex", md: "flex" }}
        pos="relative"
        w="full"
      >
        <Tabs
          index={queryType}
          isManual
          onChange={(index: number) => onChange("queryType", index)}
          size="sm"
          variant="raised"
        >
          <TabList>
            <Tab aria-label="Latest">
              <Text noOfLines={1}>Latest Donations</Text>
            </Tab>
            <Tab aria-label="Top">
              <Text noOfLines={1}>Top Donations</Text>
            </Tab>
          </TabList>
          <TabIndicator
            role="presentation"
            sx={{
              transitionDelay: "100ms",
              transition: "top, left, bottom, right, width",
            }}
          />
        </Tabs>
        <Divider
          borderColor="gray.400"
          h="20px"
          ml="2"
          orientation="vertical"
        />
        <Tooltip
          label="Sort Order"
          placement="top"
        >
          <Box ml="3">
            <Switch
              _dark={{ opacity: 0.8 }}
              aria-label="toggle sort order"
              color="gray.500"
              onChange={(ev) => onChange("isSortDesc", !ev.target.checked)}
              size="md"
              sx={{
                "[data-checked]>svg": { transform: "rotate(-180deg)" },
                ".chakra-switch__track": { w: "auto" },
                ".chakra-switch__track[data-checked]": { bg: "gray.400" },
                ".chakra-switch__thumb[data-checked]": { transform: "none" },
                ">span": {
                  _last: {
                    m: 0,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    ">svg": {
                      width: 2,
                      h: 2,
                      transition: "transform 150ms",
                      cursor: "pointer",
                    },
                  },
                },
              }}
              w="20px"
            >
              <FaChevronDown />
            </Switch>
          </Box>
        </Tooltip>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        id="foobar"
        pos="relative"
        sx={{
          "@media screen and (min-width: 200px) and (max-width: 476px)": {
            display: "none",
          },
        }}
        textAlign="center"
      >
        <Tabs
          display={{ base: "block", lg: "block" }}
          index={viewType}
          isManual
          mr="0"
          onChange={(index: number) => onChange("viewType", index)}
          size="sm"
          variant="raised"
        >
          <TabList>
            <Tab aria-label="Card View">
              <FaTh color="#999" />
            </Tab>
            <Tab aria-label="List View">
              <FaThList color="#999" />
            </Tab>
          </TabList>
          <TabIndicator
            role="presentation"
            sx={{ transition: "top, left, bottom, right, width" }}
          />
        </Tabs>
        <ButtonGroup
          alignItems="center"
          borderLeftWidth={1}
          display="none"
          ml="0"
          px="2"
          size="xs"
          variant="ghost"
        >
          <IconButton
            aria-label="previous"
            icon={<FaChevronLeft />}
          />
          <IconButton
            aria-label="next"
            icon={<FaChevronRight />}
          />
        </ButtonGroup>
      </Box>
    </HStack>
  );
};
