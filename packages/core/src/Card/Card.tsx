import {
  chakra,
  forwardRef,
  omitThemingProps,
  StylesProvider,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  HTMLChakraProps,
  Avatar,
  AvatarProps,
  Box,
  useStyles,
} from "@chakra-ui/react";
import { cx } from "@chakra-ui/utils";

export interface CardProps
  extends HTMLChakraProps<"div">,
    ThemingProps<"Card"> {}

export const Card = forwardRef<CardProps, "div">((props, ref) => {
  const containerProps = omitThemingProps(props);
  const styles = useMultiStyleConfig("Card", props);
  const containerStyles: SystemStyleObject = {
    ...styles.container,
  };

  return (
    <StylesProvider value={styles}>
      <chakra.div
        ref={ref}
        {...containerProps}
        __css={containerStyles}
        className={cx("chakra-card", props.className)}
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
      __css={styles.content}
      className={cx("chakra-card__content", props.className)}
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
      __css={styles.badge}
      className={cx("chakra-card__badge", props.className)}
      {...props}
    />
  );
});

CardBadge.displayName = "CardBadge";

export type CardAvatarProps = AvatarProps;

export const CardAvatar = forwardRef<CardAvatarProps, typeof Avatar>(
  (props, ref) => {
    const styles = useStyles();
    return (
      <Box
        ref={ref}
        className={cx("chakra-card__avatar", props.className)}
        {...props}
        {...styles.avatar}
      />
    );
  }
);

export type CardBackgroundProps = HTMLChakraProps<"div">;

export const CardBackground = forwardRef<CardBackgroundProps, "div">(
  (props, ref) => {
    const styles = useStyles();
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
