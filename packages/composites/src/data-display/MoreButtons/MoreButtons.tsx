import type * as React from "react";
import {
  Button,
  ButtonGroup,
  chakra,
  Hide,
  Icon,
  Tooltip,
  useDisclosure,
  HTMLChakraProps,
} from "@josulliv101/core";
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

const ButtonMore = ({ label, price, ...props }) => (
  <Button
    mb="4"
    // children={label}
    {...props}
    borderRadius="full"
    leftIcon={
      props.value === MORE_BUTTONS_BACK_ID ? (
        <Icon as={FaArrowCircleLeft} />
      ) : null
    }
    sx={{ ">span": { pointerEvents: "none" } }}
  >
    {label}
    {price && props.value !== MORE_BUTTONS_BACK_ID ? (
      <chakra.span
        transform="scale(.8)"
        color="gray.200"
        fontSize={props.size}
        fontWeight="normal"
        ml="1"
      >
        / ${price}
      </chakra.span>
    ) : null}
  </Button>
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
      {...props}
    >
      {displayedOptions.map((btnProps) => (
        <ButtonMore
          key={btnProps.value}
          size={size}
          {...btnProps}
          onClick={handleButtonClick}
        />
      ))}
      {!isOpen && isLimitExceeded && (
        <Hide below="md">
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
        </Hide>
      )}
    </ButtonGroup>
  );
};
