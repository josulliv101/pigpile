import { HStack, HTMLChakraProps, IconButton, Text } from "@pigpile/core";
import { FaPencilAlt } from "react-icons/fa";

export interface ItemsLabelProps extends HTMLChakraProps<"div"> {
  label: string;
  numberOfUnits: number;
  onEdit?: () => void;
}

export const ItemsLabel: React.FC<ItemsLabelProps> = ({
  label,
  numberOfUnits,
  onEdit,
  ...props
}) => {
  return (
    <HStack alignItems={{ base: "flex-start", md: "center" }}>
      <Text fontSize={{ base: "md", md: "xl" }}>
        Items: {numberOfUnits} {label}
      </Text>
      {onEdit && (
        <IconButton
          color="gray.200"
          variant="ghost"
          colorScheme="whiteAlpha"
          size="xs"
          aria-label="edit donation amount"
          icon={<FaPencilAlt />}
          onClick={onEdit}
        />
      )}
    </HStack>
  );
};
