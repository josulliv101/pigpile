import type * as React from "react";
import {
  Button,
  HTMLChakraProps,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@josulliv101/core";
import { getCurrency } from "@josulliv101/formatting";
import { FaChevronDown } from "react-icons/fa";

export interface TipInputProps extends HTMLChakraProps<"div"> {
  tip: number;
  options?: number[];
  onChange?: () => void;
}

const formatter = new Intl.NumberFormat("en-US", {
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
    <Text
      as="div"
      fontSize="md"
      fontWeight="200"
      {...props}
    >
      We're a free service and rely on donor love. Any contribution is
      appreciated. Include a tip of &nbsp;
      <Menu placement="bottom-end">
        <MenuButton
          _disabled={{ cursor: "default" }}
          as={Button}
          borderColor="whiteAlpha.500"
          color="inherit"
          colorScheme="whiteAlpha"
          data-testid="updatetip"
          disabled={isDisabled}
          opacity=".8"
          rightIcon={<FaChevronDown />}
          size="xs"
          variant="outline"
        >
          {getCurrency(tip)}
        </MenuButton>
        <MenuList
          _dark={{ color: "gray.200" }}
          color="gray.700"
          fontSize="xs"
          minW="8"
        >
          <MenuOptionGroup
            defaultValue={String(tip)}
            onChange={(id) => onChange(id)}
            type="radio"
          >
            {options.map((option) => (
              <MenuItemOption
                key={option}
                data-testid={`option-${option}`}
                value={String(option)}
              >
                {getCurrency(option)}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Text>
  );
};
