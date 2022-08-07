import { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
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
  onChangeCustomInputField: (n: number) => void;
}

export const ItemsLabel: React.FC<ItemsLabelProps> = ({
  label,
  numberOfUnits,
  pricePerUnit,
  showCustomInputField,
  onCloseCustomInputField,
  onShowCustomInputField,
  onChangeCustomInputField,
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
      alignItems={{
        base: "flex-start",
        md: !showCustomInputField ? "center" : "flex-start",
      }}
      bgColor="blackAlpha.200"
      flexDirection={{
        base: showCustomInputField ? "column" : "row", // showCustomInputField ? "column" : "row",
        // md: "row",
      }}
      justifyContent="space-between"
    >
      <Button
        _active={{ background: "transparent" }}
        _disabled={{ opacity: 1, cursor: "default" }}
        _focusVisible={{ outlineColor: "white" }}
        _hover={{ svg: { opacity: 0.9 }, background: "transparent" }}
        background={showCustomInputField ? "transparent" : "blackAlpha.50"}
        color="gray.100"
        disabled={showCustomInputField}
        fontWeight="normal"
        justifyContent="space-between"
        onClick={onShowCustomInputField}
        sx={{ svg: { transition: "opacity 200ms", opacity: 0.7 } }}
        w="full"
      >
        <Box as="span">
          Donate {activeNumberOfUnits}
          &nbsp;
          {typeof label === "function" ? label(activeNumberOfUnits) : label}
          &nbsp;
          <Text
            as="span"
            fontSize="sm"
            opacity=".8"
          >
            / {getCurrency(activeNumberOfUnits * pricePerUnit)}
          </Text>
        </Box>
        {!showCustomInputField && <FaPencilAlt />}
      </Button>
      {showCustomInputField && (
        <Box
          display="flex"
          justifyContent="center"
          pt="6"
          w="full"
        >
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
          justifyContent={{ base: "center" }} // , md: 0
          pb="4"
          pt={{ base: 6 }} // md: "flex-start"
          size="md" // , md: "auto"
          // mx="3"
          w={{ base: "full" }}
        >
          <Button
            _focusVisible={{ outlineColor: "white" }}
            borderColor="whiteAlpha.500"
            color="white"
            colorScheme="whiteAlpha"
            disabled={numberOfUnits !== null && !isCustomInputDirty}
            maxW="calc(100% - 40px)"
            onClick={handleCommitInputChange}
            size={numberOfUnits === null ? "md" : "md"}
            variant="outline"
            w={numberOfUnits === null ? "full" : undefined}
          >
            Confirm
          </Button>
          {numberOfUnits !== null && (
            <Button
              _focusVisible={{ outlineColor: "white" }}
              color="white"
              colorScheme="whiteAlpha"
              onClick={() => {
                onCloseCustomInputField();
                setIsCustomInputDirty(false);
              }}
              variant="ghost"
            >
              Cancel
            </Button>
          )}
        </ButtonGroup>
      )}
      {false && onShowCustomInputField && !showCustomInputField && (
        <Tooltip
          label="Edit Quantity"
          placement="top"
        >
          <IconButton
            aria-label="edit donation amount"
            color="gray.200"
            colorScheme="whiteAlpha"
            icon={<FaPencilAlt />}
            onClick={onShowCustomInputField}
            size="sm"
            variant="ghost"
          />
        </Tooltip>
      )}
    </Flex>
  );
};
