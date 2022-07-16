import type * as React from "react";
import {
  Button,
  HStack,
  HTMLChakraProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Tag,
  TagLabel,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

export interface TipInputProps extends HTMLChakraProps<"div"> {
  tip: number;
  options?: number[];
  onChange?: () => void;
}

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatAsUSD = (n) => {
  if (!n) {
    return "$0";
  }
  return formatter.format(n);
};

export const TipInput: React.FC<TipInputProps> = ({
  label,
  options = [0, 0.5, 1.0, 1.5],
  tip = 0,
  onChange,
  isDisabled,
  ...props
}) => {
  return (
    <Text as="div" fontSize="md" {...props}>
      We're a free service and rely on donor love. Any contribution is
      appreciated. Include a tip of &nbsp;
      <Menu placement="bottom-end">
        <MenuButton
          as={Button}
          rightIcon={<FaChevronDown />}
          colorScheme="whiteAlpha"
          color="inherit"
          borderColor="whiteAlpha.500"
          variant="outline"
          size="xs"
          data-testid="updatetip"
          disabled={isDisabled}
          _disabled={{ cursor: "default" }}
        >
          ${tip}
        </MenuButton>
        <MenuList
          color="gray.700"
          _dark={{ color: "gray.200" }}
          fontSize="xs"
          minW="8"
        >
          <MenuOptionGroup
            defaultValue={String(tip)}
            type="radio"
            onChange={(id) => onChange(id)}
          >
            {options.map((option) => (
              <MenuItemOption
                key={option}
                data-testid={`option-${option}`}
                value={String(option)}
              >
                {formatAsUSD(option)}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Text>
  );
};
