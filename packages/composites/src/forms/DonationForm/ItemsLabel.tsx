import { useState } from "react";
import {
  Button,
  ButtonGroup,
  HStack,
  HTMLChakraProps,
  IconButton,
  Text,
  Tooltip,
} from "@josulliv101/core";
import { FaPencilAlt } from "react-icons/fa";
import { CustomInputField } from "./CustomInputField";

export interface ItemsLabelProps extends HTMLChakraProps<"div"> {
  label: string;
  numberOfUnits: number;
  showCustomInputField: boolean;
  onCloseCustomInputField: () => void;
  onShowCustomInputField: () => void;
  onChangeCustomInputField: (n) => void;
}

export const ItemsLabel: React.FC<ItemsLabelProps> = ({
  label,
  numberOfUnits,
  showCustomInputField,
  onCloseCustomInputField,
  onShowCustomInputField,
  onChangeCustomInputField,
  ...props
}) => {
  const [isCustomInputDirty, setIsCustomInputDirty] = useState(false);
  const [updatedNumberOfUnits, setUpdatedNumberOfUnits] = useState(
    numberOfUnits || 1
  );
  const handleCommitInputChange = () => {
    onChangeCustomInputField(updatedNumberOfUnits);
    onCloseCustomInputField();
    setIsCustomInputDirty(false);
  };

  return (
    <HStack
      justifyContent="space-between"
      alignItems={{ base: "flex-start" }}
      flexDirection={{
        base: showCustomInputField ? "column" : "row", // showCustomInputField ? "column" : "row",
        // md: "row",
      }}
    >
      <Text
        display="flex"
        alignItems="center"
        fontSize={{ base: "md", md: "xl" }}
        noOfLines={1}
      >
        Items:{" "}
        {!showCustomInputField ? (
          numberOfUnits
        ) : (
          <CustomInputField
            numberOfUnits={updatedNumberOfUnits}
            onChange={(n) => {
              setIsCustomInputDirty(true);
              setUpdatedNumberOfUnits(Number(n));
            }}
          />
        )}{" "}
        {label}
      </Text>
      {showCustomInputField && (
        <ButtonGroup
          pt={{ base: 4 }} // , md: 0
          justifyContent={{ base: "flex-end" }} // md: "flex-start"
          w={{ base: "full" }} // , md: "auto"
          mx="3"
          size="xs"
        >
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            color="white"
            onClick={handleCommitInputChange}
            borderColor={{ base: "transparent", md: "whiteAlpha.500" }}
            size={numberOfUnits === null ? "sm" : "xs"}
            disabled={numberOfUnits !== null && !isCustomInputDirty}
          >
            Confirm{" "}
            {numberOfUnits === null && `Adding ${updatedNumberOfUnits} Item(s)`}
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
            >
              Cancel
            </Button>
          )}
        </ButtonGroup>
      )}
      {onShowCustomInputField && !showCustomInputField && (
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
    </HStack>
  );
};
