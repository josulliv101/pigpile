import { HTMLChakraProps } from "@josulliv101/core";
import { FooterSmall } from "./FooterSmall";
import { FooterDefault } from "./FooterDefault";

export const Footer: React.FC<HTMLChakraProps<"footer">> = ({
  size,
  ...props
}) => {
  const Component = size === "sm" ? FooterSmall : FooterDefault;
  return <Component {...props} />;
};
