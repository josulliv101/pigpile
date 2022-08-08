import NextLink from "next/link";
import { memo, useCallback, ReactNode, RefObject, useRef } from "react";
import {
  chakra,
  AbsoluteCenter as Center,
  Box,
  Container,
  Flex,
  Text,
  Logo,
  HTMLChakraProps,
  useUpdateEffect,
} from "@josulliv101/core";
import { MobileNavButton, MobileNavContent } from "components/landmarks";
import { appSlice, selectAppState } from "store";
import { useAppDispatch, useResizeListener, useAppSelector } from "hooks";
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
    _focusVisible: {
      outlineColor: "white",
    },
  },
});

const getLogoTransformScale = (scale: number) => `translate3d(-50%, -50%, 0) scale(${scale})`;

export const Banner: React.FC<HTMLChakraProps<"div">> = ({ children: nav, ...props }) => {
  const dispatch = useAppDispatch();
  const { isMobileNavOpen } = useAppSelector(selectAppState());
  const mobileNavBtnRef = useRef<HTMLButtonElement>();
  const isScrolledY = useIsScrolledY();
  const logoTransform = getLogoTransformScale(isScrolledY ? 0.9 : 1);
  const bgColor = isScrolledY ? "black" : "transparent";
  const handleOpenMobileNav = useCallback(() => {
    dispatch(appSlice.actions.openMobileNav());
  }, [dispatch]);

  const handleCloseMobileNav = useCallback(() => {
    console.log("resize");
    dispatch(appSlice.actions.closeMobileNav());
  }, [dispatch]);

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [isMobileNavOpen]);

  useResizeListener(handleCloseMobileNav);

  return (
    <BannerContent
      bgColor={bgColor}
      handleCloseMobileNav={handleCloseMobileNav}
      handleOpenMobileNav={handleOpenMobileNav}
      isMobileNavOpen={isMobileNavOpen}
      logoTransform={logoTransform}
      mobileNavBtnRef={mobileNavBtnRef}
      nav={nav}
      {...props}
    />
  );
};

interface BannerContentProps extends HTMLChakraProps<"div"> {
  isMobileNavOpen: boolean;
  logoTransform: string;
  mobileNavBtnRef: RefObject<HTMLButtonElement | undefined>;
  nav?: ReactNode;
  handleCloseMobileNav: () => void;
  handleOpenMobileNav: () => void;
}

export const BannerContent = memo<BannerContentProps>(
  ({
    bgColor,
    isMobileNavOpen,
    logoTransform,
    mobileNavBtnRef,
    nav,
    handleCloseMobileNav,
    handleOpenMobileNav,
    ...props
  }) => {
    return (
      <Background
        as="header"
        bgColor={bgColor}
        {...props}
      >
        <Container>
          <Flex
            align="center"
            justify="space-between"
          >
            <NextLink
              href="/"
              passHref
            >
              <BrandText as="a">Pigpile</BrandText>
            </NextLink>
            <Box
              as={Center}
              transform={logoTransform}
            >
              <NextLink
                href="/"
                passHref
              >
                <chakra.a _focusVisible={{ outlineColor: "white" }}>
                  <Logo
                    boxSize={{ base: 9, md: 10 }}
                    cursor="pointer"
                  />
                </chakra.a>
              </NextLink>
            </Box>
            {nav}
            <MobileNavButton
              ref={mobileNavBtnRef}
              aria-label="Open menu"
              mr="1"
              onClick={handleOpenMobileNav}
            />
          </Flex>
        </Container>
        <MobileNavContent
          isOpen={isMobileNavOpen}
          onClose={handleCloseMobileNav}
        />
      </Background>
    );
  }
);

BannerContent.displayName = "Banner";
