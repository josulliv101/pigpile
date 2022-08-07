import NextLink from "next/link";
import { Button, HTMLChakraProps } from "@josulliv101/core";

export interface NavLinkProps extends HTMLChakraProps<typeof Button> {
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, ...styleProps }) => (
  <NextLink
    href={href}
    passHref
  >
    <Button {...styleProps}>{children}</Button>
  </NextLink>
);
