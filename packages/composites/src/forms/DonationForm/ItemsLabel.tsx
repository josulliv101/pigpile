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
      alignItems={{
        base: "flex-start",
        md: !showCustomInputField ? "center" : "flex-start",
      }}
      flexDirection={{
        base: showCustomInputField ? "column" : "row", // showCustomInputField ? "column" : "row",
        // md: "row",
      }}
      bgColor={!showCustomInputField ? "blackAlpha.200" : ""}
    >
      <Text
        display="flex"
        alignItems="center"
        fontSize={{ base: "md", md: "md" }}
        noOfLines={1}
        pl="2"
      >
        Donate{" "}
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
        {typeof label === "function"
          ? label(!showCustomInputField ? numberOfUnits : updatedNumberOfUnits)
          : label}
        &nbsp;
        <Text fontSize="sm" as="span" opacity=".8">
          /{" "}
          {getCurrency(
            (!showCustomInputField ? numberOfUnits : updatedNumberOfUnits) *
              pricePerUnit
          )}
        </Text>
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
            w={numberOfUnits === null ? "full" : undefined}
          >
            Confirm{" "}
            {numberOfUnits === null &&
              `adding ${updatedNumberOfUnits} ${
                typeof label === "function"
                  ? label(updatedNumberOfUnits)
                  : label
              }`}
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
