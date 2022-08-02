import type * as React from "react";
import {
  Box,
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

export const MORE_BUTTONS_BACK_ID = "back-button";

const ButtonMore = ({ label, price, ...props }) => (
  <Button
    mb="4"
    {...props}
    borderRadius="full"
    leftIcon={props.value === MORE_BUTTONS_BACK_ID ? <Icon as={FaArrowCircleLeft} /> : null}
    sx={{ ">span": { pointerEvents: "none" } }}
    boxShadow="md"
    _focusVisible={{ outlineColor: "white" }}
  >
    {label}
    {price && props.value !== MORE_BUTTONS_BACK_ID ? (
      <chakra.span
        transform="scale(.8)"
        color="inherit"
        fontSize={props.size}
        fontWeight="normal"
        opacity=".7"
        ml="1"
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
      pos="relative"
      spacing="4"
      justifyContent="center"
      flexWrap="wrap"
      maxW="618px"
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
          <Tooltip placement="top" label={moreTooltipLabel} isDisabled={!moreTooltipLabel}>
            <Button
              aria-label="more"
              pos="absolute"
              top="0"
              right="0"
              transform="translateX(140%)"
              size="xs"
              onClick={onOpen}
              borderRadius="full"
              boxShadow="md"
              _focusVisible={{ outlineColor: "white" }}
            >
              <Icon as={FaEllipsisH} />
            </Button>
          </Tooltip>
        </Box>
      )}
    </ButtonGroup>
  );
};
