import { forwardRef } from "react";
import { Box, useRadio } from "@josulliv101/core";

export const RadioCard = forwardRef((props, ref) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps({}, ref);
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        _checked={{
          bg: "whiteAlpha.400",
          color: "white",
          borderColor: "whiteAlpha.600",
        }}
        // borderWidth='1px'
        _focus={{
          boxShadow: "outline",
        }}
        borderRadius="md"
        cursor="pointer"
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
});

RadioCard.displayName = "RadioCard";
