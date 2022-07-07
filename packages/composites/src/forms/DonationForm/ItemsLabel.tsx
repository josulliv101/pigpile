import { useState } from "react";
import {
  Button,
  ButtonGroup,
  HStack,
  HTMLChakraProps,
  IconButton,
  Text,
} from "@pigpile/core";
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
  const [updatedNumberOfUnits, setUpdatedNumberOfUnits] = useState(
    numberOfUnits || 1
  );
  const handleCommitInputChange = () => {
    onChangeCustomInputField(updatedNumberOfUnits);
    onCloseCustomInputField();
  };
  return (
    <HStack
      justifyContent="space-between"
      alignItems={{ base: "flex-start", md: "center" }}
    >
      <Text
        display="flex"
        alignItems="center"
        fontSize={{ base: "md", md: "xl" }}
      >
        Items:{" "}
        {!showCustomInputField ? (
          numberOfUnits
        ) : (
          <CustomInputField
            numberOfUnits={updatedNumberOfUnits}
            onChange={(n) => setUpdatedNumberOfUnits(Number(n))}
          />
        )}{" "}
        {label}
      </Text>
      {showCustomInputField && (
        <ButtonGroup colorScheme="blue" mx="3" size="xs">
          <Button
            variant="outline"
            colorScheme="whiteAlpha"
            color="white"
            onClick={handleCommitInputChange}
          >
            Confirm
          </Button>
          <Button
            colorScheme="whiteAlpha"
            color="white"
            variant="ghost"
            onClick={onCloseCustomInputField}
          >
            Cancel
          </Button>
        </ButtonGroup>
      )}
      {onShowCustomInputField && !showCustomInputField && (
        <IconButton
          color="gray.200"
          variant="ghost"
          colorScheme="whiteAlpha"
          size="xs"
          aria-label="edit donation amount"
          icon={<FaPencilAlt />}
          onClick={onShowCustomInputField}
        />
      )}
    </HStack>
  );
};
