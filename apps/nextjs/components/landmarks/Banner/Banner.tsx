import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import debounce from "lodash.debounce";
import {
  chakra,
  AbsoluteCenter as Center,
  Container,
  Flex,
  Text,
  Logo,
  HTMLChakraProps,
  useUpdateEffect,
  useBreakpointValue,
} from "@josulliv101/core";
import { MobileNavButton, MobileNavContent } from "components/landmarks";
import { appSlice, selectAppState } from "store";
import useIsScrolledY from "./useIsScrolledY";

const Background = chakra("div", {
  baseStyle: {
    pos: "fixed",
    py: 2,
    top: 0,
    transition: "background 200ms ease-out",
    w: "100vw",
    zIndex: "banner",
  },
});

const BrandText = chakra(Text, {
  baseStyle: {
    color: "white",
    fontFamily: "brand",
    fontSize: [20, 24],
    fontWeight: "normal",
  },
});

const getLogoTransform = ({ scale }) =>
  `translate3d(-50%, -50%, 0) scale(${scale})`;

export const Banner: React.FC<HTMLChakraProps<"div">> = ({
  children: nav,
  ...props
}) => {
  const dispatch = useDispatch();
  const foo = useBreakpointValue({
    base: "base",
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  const { isMobileNavOpen } = useSelector(selectAppState());
  const mobileNavBtnRef = useRef<HTMLButtonElement>();
  const isScrolledY = useIsScrolledY();
  const logoTransform = getLogoTransform({ scale: isScrolledY ? 0.9 : 1 });
  const bgColor = isScrolledY ? "black" : "transparent";

  const handleOpenMobileNav = useCallback(() => {
    dispatch(appSlice.actions.openMobileNav());
  }, [dispatch]);

  const handleCloseMobileNav = useCallback(() => {
    dispatch(appSlice.actions.closeMobileNav());
  }, [dispatch]);

  console.log("isMobileNavOpen", isMobileNavOpen);
  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [isMobileNavOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = debounce(
        () => {
          console.log("RESIZE EVENT");
          handleCloseMobileNav();
        },
        300,
        { leading: true, trailing: false }
      );
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <Background as="header" bgColor={bgColor} {...props}>
      <Container>
        <Flex align="center" justify="space-between">
          <NextLink href="/" passHref>
            <BrandText as="a">Pigpile {foo}</BrandText>
          </NextLink>
          <NextLink href="/" passHref>
            <a>
              <Center
                as={Logo}
                boxSize={{ base: 9, md: 10 }}
                transform={logoTransform}
                cursor="pointer"
              />
            </a>
          </NextLink>
          {nav}
          <MobileNavButton
            ref={mobileNavBtnRef}
            aria-label="Open Menu"
            onClick={handleOpenMobileNav}
            mr="1"
          />
        </Flex>
      </Container>
      <MobileNavContent
        isOpen={isMobileNavOpen}
        onClose={handleCloseMobileNav}
      />
    </Background>
  );
};
