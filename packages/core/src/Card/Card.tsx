import * as React from "react";
import {
  chakra,
  forwardRef,
  omitThemingProps,
  StylesProvider,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  HTMLChakraProps,
} from "@chakra-ui/system";
import { Avatar, AvatarProps, Box, useStyles } from "@chakra-ui/react";
import { cx, __DEV__ } from "@chakra-ui/utils";

export interface CardProps
  extends HTMLChakraProps<"div">,
    ThemingProps<"Card"> {}

export const Card = forwardRef<CardProps, "div">((props, ref) => {
  const containerProps = omitThemingProps(props);
  const styles = useMultiStyleConfig("Card", props);
  console.log("Card useMultiStyleConfig", styles);
  const containerStyles: SystemStyleObject = {
    ...styles.container,
  };

  return (
    <StylesProvider value={styles}>
      <chakra.div
        ref={ref}
        {...containerProps}
        className={cx("chakra-card", props.className)}
        __css={containerStyles}
      />
    </StylesProvider>
  );
});

export type CardContentProps = HTMLChakraProps<"div">;

export const CardContent = forwardRef<CardContentProps, "div">((props, ref) => {
  const styles = useStyles();
  return (
    <chakra.div
      ref={ref}
      {...props}
      className={cx("chakra-card__content", props.className)}
      __css={styles.content}
    />
  );
});

export interface CardBadgeProps extends HTMLChakraProps<"div"> {
  colorScheme?: string;
}

export const CardBadge = forwardRef<CardBadgeProps, "div">((props, ref) => {
  const styles = useStyles();
  return (
    <Box
      ref={ref}
      className={cx("chakra-card__badge", props.className)}
      __css={styles.badge}
      {...props}
    />
  );
});

CardBadge.displayName = "CardBadge";

export type CardAvatarProps = AvatarProps;

export const CardAvatar = forwardRef<CardAvatarProps, typeof Avatar>(
  (props, ref) => {
    const styles = useStyles();
    const stylesFromStyleConfig = useMultiStyleConfig("CardAvatar", props);
    console.log(
      "Card:Avatar stylesFromStyleConfig",
      stylesFromStyleConfig,
      props
    );
    return (
      <Box
        ref={ref}
        className={cx("chakra-card__avatar", props.className)}
        {...props}
        // {...stylesFromStyleConfig.container}
        {...styles.avatar}
      />
    );
  }
);

export type CardBackgroundProps = HTMLChakraProps<"div">;

export const CardBackground = forwardRef<CardBackgroundProps, "div">(
  (props, ref) => {
    const styles = useStyles();
    // const stylesFromStyleConfig = useMultiStyleConfig("CardAvatar", props)
    console.log("CardBackground", styles, props);
    return (
      <Box
        ref={ref}
        className={cx("chakra-card__background", props.className)}
        {...styles.background}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
