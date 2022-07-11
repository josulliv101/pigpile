import { forwardRef } from "react";
import NextLink from 'next/link';
// import { NavButton } from "src/components/extended";

const style = {
  color: "white",
  _dark: {
    color: "gray.200"
  }
}

export const LinkButton = forwardRef(({ href, ...props }, ref) => {
  // if (href) {
    return (
      <NextLink href={href} passHref>
        foobar
      </NextLink>
    );
  // }
  // return <NavButton ref={ref} sx={style} {...props} />;
});
