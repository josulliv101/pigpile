import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  HTMLChakraProps,
  IconButton,
  Text,
  Tooltip,
} from "@josulliv101/core";
import { getCurrency } from "@josulliv101/formatting";
import { FaPencilAlt } from "react-icons/fa";
import { CustomInputField } from "./CustomInputField";

export interface ItemsLabelProps extends HTMLChakraProps<"div"> {
  label: string;
  numberOfUnits: number;
  pricePerUnit: number;
  showCustomInputField: boolean;
  onCloseCustomInputField: () => void;
  onShowCustomInputField: () => void;
  onChangeCustomInputField: (n) => void;
}

export const ItemsLabel: React.FC<ItemsLabelProps> = ({
  label,
  numberOfUnits,
  pricePerUnit,
  showCustomInputField,
  onCloseCustomInputField,
  onShowCustomInputField,
  onChangeCustomInputField,
  ...props
}) => {
  const [isCustomInputDirty, setIsCustomInputDirty] = useState(false);
  const [updatedNumberOfUnits, setUpdatedNumberOfUnits] = useState(numberOfUnits || 1);
  const handleCommitInputChange = () => {
    onChangeCustomInputField(updatedNumberOfUnits);
    onCloseCustomInputField();
    setIsCustomInputDirty(false);
  };
  const activeNumberOfUnits = showCustomInputField ? updatedNumberOfUnits : numberOfUnits;
  return (
    <Flex
      justifyContent="space-between"
      alignItems={{
        base: "flex-start",
        md: !showCustomInputField ? "center" : "flex-start",
      }}
      flexDirection={{
        base: showCustomInputField ? "column" : "row", // showCustomInputField ? "column" : "row",
        // md: "row",
      }}
      bgColor="blackAlpha.200"
    >
      <Button
        sx={{ svg: { transition: "opacity 200ms", opacity: 0.7 } }}
        _active={{ background: "transparent" }}
        _hover={{ svg: { opacity: 0.9 }, background: "transparent" }}
        _disabled={{ opacity: 1, cursor: "default" }}
        disabled={showCustomInputField}
        onClick={onShowCustomInputField}
        background={showCustomInputField ? "transparent" : "blackAlpha.50"}
        w="full"
        justifyContent="space-between"
        fontWeight="normal"
        color="gray.100"
        _focusVisible={{ outlineColor: "white" }}
      >
        <Box as="span">
          Donate {activeNumberOfUnits}
          &nbsp;
          {typeof label === "function" ? label(activeNumberOfUnits) : label}
          &nbsp;
          <Text fontSize="sm" as="span" opacity=".8">
            / {getCurrency(activeNumberOfUnits * pricePerUnit)}
          </Text>
        </Box>
        {!showCustomInputField && <FaPencilAlt />}
      </Button>
      {showCustomInputField && (
        <Box w="full" pt="6" display="flex" justifyContent="center">
          <CustomInputField
            numberOfUnits={updatedNumberOfUnits}
            onChange={(n) => {
              setIsCustomInputDirty(true);
              setUpdatedNumberOfUnits(Number(n));
            }}
          />
        </Box>
      )}

      {showCustomInputField && (
        <ButtonGroup
          pt={{ base: 6 }} // , md: 0
          pb="4"
          justifyContent={{ base: "center" }} // md: "flex-start"
          w={{ base: "full" }} // , md: "auto"
          // mx="3"
          size="md"
        >
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            color="white"
            onClick={handleCommitInputChange}
            borderColor="whiteAlpha.500"
            size={numberOfUnits === null ? "md" : "md"}
            disabled={numberOfUnits !== null && !isCustomInputDirty}
            w={numberOfUnits === null ? "full" : undefined}
            maxW="calc(100% - 40px)"
            _focusVisible={{ outlineColor: "white" }}
          >
            Confirm
          </Button>
          {numberOfUnits !== null && (
            <Button
              colorScheme="whiteAlpha"
              color="white"
              variant="ghost"
              onClick={(n) => {
                onCloseCustomInputField();
                setIsCustomInputDirty(false);
              }}
              _focusVisible={{ outlineColor: "white" }}
            >
              Cancel
            </Button>
          )}
        </ButtonGroup>
      )}
      {false && onShowCustomInputField && !showCustomInputField && (
        <Tooltip label="Edit Quantity" placement="top">
          <IconButton
            color="gray.200"
            variant="ghost"
            colorScheme="whiteAlpha"
            size="sm"
            aria-label="edit donation amount"
            icon={<FaPencilAlt />}
            onClick={onShowCustomInputField}
          />
        </Tooltip>
      )}
    </Flex>
  );
};
