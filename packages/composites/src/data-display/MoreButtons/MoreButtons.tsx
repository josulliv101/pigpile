import type * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  chakra,
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
  moreTooltipLabel: string;
  onButtonClick: (n: number) => void;
}

export const MORE_BUTTONS_BACK_ID = "back-button";

const ButtonMore = ({ label, price, a, b, c, ...props }) => (
  <Button
    mb="4"
    {...props}
    _focusVisible={{ outlineColor: "white" }}
    borderRadius="full"
    boxShadow="md"
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
        color="inherit"
        fontSize={props.size}
        fontWeight="normal"
        ml="1"
        opacity=".7"
        transform="scale(.8)"
      >
        / {price}
      </chakra.span>
    ) : null}
  </Button>
);

export const MoreButtons: React.FC<MoreButtonsProps> = ({
  limit = 3,
  options = [],
  moreTooltipLabel = "more options",
  onButtonClick,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLimitExceeded = options.length > limit;
  const displayedOptions = isOpen ? options : options.slice(0, limit);
  const size = isOpen ? "sm" : "lg";

  const handleButtonClick = (ev) => {
    if (isOpen && ev.target.value === MORE_BUTTONS_BACK_ID) {
      onClose();
    } else {
      onButtonClick(ev.target.value);
    }
  };
  return (
    <ButtonGroup
      flexWrap="wrap"
      justifyContent="center"
      maxW="618px"
      pos="relative"
      spacing="4"
      {...props}
    >
      {displayedOptions.map((btnProps) => (
        <ButtonMore
          key={btnProps.value}
          size={{ base: "sm", sm: size }}
          {...btnProps}
          onClick={handleButtonClick}
        />
      ))}
      {!isOpen && isLimitExceeded && (
        <Box
          sx={{
            "@media screen and (min-width: 200px) and (max-width: 640px)": {
              display: "none",
            },
          }}
        >
          <Tooltip
            isDisabled={!moreTooltipLabel}
            label={moreTooltipLabel}
            placement="top"
          >
            <Button
              _focusVisible={{ outlineColor: "white" }}
              aria-label="more"
              borderRadius="full"
              boxShadow="md"
              onClick={onOpen}
              pos="absolute"
              right="0"
              size="xs"
              top="0"
              transform="translateX(140%)"
            >
              <Icon as={FaEllipsisH} />
            </Button>
          </Tooltip>
        </Box>
      )}
    </ButtonGroup>
  );
};
