import * as React from "react";
import {
  Box,
  BoxProps,
  Fade,
  HStack,
  useStyles,
  VStack,
  StylesProvider,
  SystemStyleObject,
  useMultiStyleConfig,
  HTMLChakraProps,
  ThemingProps,
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";
import CountUp from "react-countup";

export interface CountUpBoxProps extends HTMLChakraProps<"aside">, ThemingProps<"Container"> {
  duration?: number;
  label?: string;
  countUpValue?: number;
  limit: number;
  showLabelOnEnd?: boolean;
}

export interface CountUpBoxLabelProps extends BoxProps {
  in?: boolean;
}

export const Label: React.FC<CountUpBoxLabelProps> = (props) => {
  const styles = useStyles();
  const labelStyles: SystemStyleObject = {
    ...styles.label,
  };
  return (
    <Box
      {...props}
      __css={labelStyles}
    />
  );
};

export const CountUpLabel: React.FC<CountUpBoxLabelProps> = (props) => {
  const styles = useStyles();
  const labelStyles: SystemStyleObject = {
    ...styles.countUpLabel,
  };
  return (
    <Box
      {...props}
      __css={labelStyles}
    />
  );
};

export const CountUpBox: React.FC<CountUpBoxProps> = ({
  children,
  className,
  duration = 1.5,
  countUpValue = 0,
  label,
  showLabelOnEnd = false,
  sx,
  ...props
}) => {
  const [isCountUpComplete, setIsCountUpComplete] = React.useState(!showLabelOnEnd);
  const styles = useMultiStyleConfig("CountUpBox", props);
  const labelProps = showLabelOnEnd ? { as: Fade, in: isCountUpComplete } : {};
  return (
    <VStack
      aria-label={label}
      className={cx("chakra-count-up-box", className)}
      role="figure"
      spacing="5"
      sx={{
        ...styles.container,
        ...props,
        ...sx,
      }}
    >
      {children}
      <StylesProvider value={styles}>
        <HStack
          align="flex-end"
          justifyContent="space-between"
          pos="relative"
          w="full"
        >
          <Label {...labelProps}>{label}</Label>
          <CountUpLabel>
            <CountUp
              duration={duration}
              end={countUpValue}
              onEnd={() => setIsCountUpComplete(true)}
              useEasing
            />
          </CountUpLabel>
        </HStack>
      </StylesProvider>
    </VStack>
  );
};

CountUpBox.displayName = "CountUpBox";
