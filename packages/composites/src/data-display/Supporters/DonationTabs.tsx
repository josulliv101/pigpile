import * as React from "react";
import {
  FaChevronRight,
  FaChevronLeft,
  FaChevronDown,
  FaTh,
  FaThList,
} from "react-icons/fa";
import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  HStack,
  Hide,
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

export const DonationTabs: React.FC<DonationTabsProps> = ({
  queryType,
  viewType,
  onChange,
}) => {
  return (
    <HStack
      bg="gray.100"
      _dark={{ bgColor: "gray.600" }}
      w="full"
      mb="3"
      justify="space-between"
      align="center"
    >
      <Box
        pos="relative"
        w="full"
        display={{ base: "flex", md: "flex" }}
        alignItems="center"
      >
        <Tabs
          size="sm"
          index={queryType}
          isManual
          variant="raised"
          onChange={(index: number) => onChange("queryType", index)}
        >
          <TabList>
            <Tab>
              <Text noOfLines={1}>Latest Donations</Text>
            </Tab>
            <Tab>
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
          ml="2"
          orientation="vertical"
          h="20px"
          borderColor="gray.400"
        />
        <Tooltip label="Sort Order" placement="top">
          <Box ml="3">
            <Switch
              w="20px"
              onChange={(ev) => onChange("isSortDesc", !ev.target.checked)}
              size="md"
              _dark={{ opacity: 0.8 }}
              color="gray.500"
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
            >
              <FaChevronDown />
            </Switch>
          </Box>
        </Tooltip>
      </Box>
      <Box
        id="foobar"
        pos="relative"
        display="flex"
        textAlign="center"
        flexDirection="row"
        sx={{
          "@media screen and (min-width: 200px) and (max-width: 476px)": {
            display: "none",
          },
        }}
      >
        <Tabs
          display={{ base: "block", lg: "block" }}
          mr="0"
          size="sm"
          index={viewType}
          isManual
          variant="raised"
          onChange={(index: number) => onChange("viewType", index)}
        >
          <TabList>
            <Tab>
              <FaTh color="#999" />
            </Tab>
            <Tab>
              <FaThList color="#999" />
            </Tab>
          </TabList>
          <TabIndicator
            role="presentation"
            sx={{ transition: "top, left, bottom, right, width" }}
          />
        </Tabs>
        <ButtonGroup
          display="none"
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
