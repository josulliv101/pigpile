import * as React from "react";
import {
  StylesProvider,
  SystemStyleObject,
  useMultiStyleConfig,
  HTMLChakraProps,
  ThemingProps,
} from "@chakra-ui/system";
import {
  Box,
  BoxProps,
  Fade,
  HStack,
  useStyles,
  VStack,
} from "@chakra-ui/react";
import CountUp from "react-countup";
import { cx } from "@chakra-ui/utils";

export interface CountUpBoxProps
  extends HTMLChakraProps<"aside">,
    ThemingProps<"Container"> {
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
  return <Box {...props} __css={labelStyles} />;
};

export const CountUpLabel: React.FC<CountUpBoxLabelProps> = (props) => {
  const styles = useStyles();
  const labelStyles: SystemStyleObject = {
    ...styles.countUpLabel,
  };
  return <Box {...props} __css={labelStyles} />;
};

export const CountUpBox: React.FC<CountUpBoxProps> = ({
  children,
  className,
  duration = 1.5,
  countUpValue = 0,
  label,
  showLabelOnEnd = false,
  ...props
}) => {
  const [isCountUpComplete, setIsCountUpComplete] = React.useState(
    !showLabelOnEnd
  );
  const styles = useMultiStyleConfig("CountUpBox", props);
  const labelProps = showLabelOnEnd ? { as: Fade, in: isCountUpComplete } : {};
  return (
    <VStack
      role="figure"
      aria-label={label}
      className={cx("chakra-count-up-box", className)}
      spacing="5"
      sx={{
        ...styles.container,
        ...props,
      }}
      // {...props}
    >
      {children}
      <StylesProvider value={styles}>
        <HStack
          pos="relative"
          w="full"
          justifyContent="space-between"
          align="flex-end"
        >
          <Label {...labelProps}>{label}</Label>
          <CountUpLabel>
            <CountUp
              useEasing
              end={countUpValue}
              duration={duration}
              onEnd={() => setIsCountUpComplete(true)}
            />
          </CountUpLabel>
        </HStack>
      </StylesProvider>
    </VStack>
  );
};

CountUpBox.displayName = "CountUpBox";
