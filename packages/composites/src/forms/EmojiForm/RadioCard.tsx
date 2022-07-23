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
        cursor="pointer"
        // borderWidth='1px'
        borderRadius="md"
        _checked={{
          bg: "whiteAlpha.400",
          color: "white",
          borderColor: "whiteAlpha.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
});
