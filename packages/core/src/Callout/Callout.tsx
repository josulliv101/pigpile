import * as React from "react";
import {
  Box,
  HTMLChakraProps,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useStyleConfig,
} from "@chakra-ui/react";

export interface CalloutProps
  extends HTMLChakraProps<"div">,
    ThemingProps<"Callout"> {}

export const Callout: React.FC<CalloutProps> = (props) => {
  const styles = useStyleConfig("Callout", props);
  const baseStyle: SystemStyleObject = {
    flex: 1,
    p: 10,
  };
  const { children, __css, ...rest } = omitThemingProps(props);
  return (
    <Box
      as="aside"
      className="chakra-callout"
      __css={{ ...baseStyle, ...styles, ...__css }}
      {...rest}
    >
      {children}
    </Box>
  );
};
