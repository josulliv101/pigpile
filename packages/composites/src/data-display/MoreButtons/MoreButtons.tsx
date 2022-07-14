import { useState } from "react";
import type * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEllipsisH, FaArrowCircleLeft } from "react-icons/fa";

interface Option {
  label: string | React.Node;
  value?: string | number;
  icon?: React.Node;
  isBack?: boolean;
}

export interface MoreButtonsProps extends HTMLChakraProps<"div"> {
  limit?: number;
  options: Option[];
  onButtonClick: (n: number) => void;
}

const USE_DEFAULT = "lg";

export const MORE_BUTTONS_BACK_ID = "back-button";

const ButtonMore = ({ label, ...props }) => (
  <Button
    mb="4"
    children={label}
    {...props}
    leftIcon={
      props.value === MORE_BUTTONS_BACK_ID ? (
        <Icon as={FaArrowCircleLeft} />
      ) : null
    }
    sx={{ ">span": { pointerEvents: "none" } }}
  />
);

export const MoreButtons: React.FC<MoreButtonsProps> = ({
  limit = 3,
  options = [],
  moreTooltipLabel = "",
  onButtonClick,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLimitExceeded = options.length > limit;
  const displayedOptions = isOpen ? options : options.slice(0, limit);
  const size = isOpen ? "sm" : USE_DEFAULT;

  const handleButtonClick = (ev) => {
    if (isOpen && ev.target.value === MORE_BUTTONS_BACK_ID) {
      onClose();
    } else {
      onButtonClick(ev.target.value);
    }
  };
  return (
    <ButtonGroup
      pos="relative"
      spacing="4"
      justifyContent="center"
      flexWrap="wrap"
      maxW="560px"
      size={size}
      {...props}
    >
      {displayedOptions.map((btnProps) => (
        <ButtonMore
          key={btnProps.value}
          {...btnProps}
          onClick={handleButtonClick}
        />
      ))}
      {!isOpen && isLimitExceeded && (
        <Tooltip
          placement="top"
          label={moreTooltipLabel}
          isDisabled={!moreTooltipLabel}
        >
          <Button
            aria-label="more"
            pos="absolute"
            top="0"
            right="0"
            transform="translateX(140%)"
            size="xs"
            onClick={onOpen}
            borderRadius="full"
          >
            <Icon as={FaEllipsisH} />
          </Button>
        </Tooltip>
      )}
    </ButtonGroup>
  );
};
