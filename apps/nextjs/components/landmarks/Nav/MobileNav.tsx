import NextLink from "next/link";
import { forwardRef, ReactNode, Ref, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  AbsoluteCenter,
  Background,
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Center,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  IconButtonProps,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
  useTheme,
  Logo,
  Chester,
} from "@josulliv101/core";
import { themeOptions } from "@josulliv101/theme";
import { ThemeTabs } from "@josulliv101/composites";
import { AnimatePresence, motion, useElementScroll } from "framer-motion";
import { useRouter } from "next/router";

import { AiOutlineMenu } from "react-icons/ai";
import { RemoveScroll } from "react-remove-scroll";
// import { mainNavLinks } from './sidebar/sidebar'
// import SponsorButton from './sponsor-button'
// import useRouteChanged from 'hooks/use-route-changed'
// import { getRoutes } from 'layouts/mdx'
import { selectChesterAnimation } from "store";
import { useNavProps } from "hooks";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose } = props;
  const closeBtnRef = useRef<HTMLButtonElement>();
  const { pathname, asPath } = useRouter();
  const bgColor = useColorModeValue("blue.400", "gray.800");
  const { themeState, onThemeOptionChange } = useNavProps();
  const {
    userTheme: { bgImage },
  } = useTheme();
  const chesterAnimation = useSelector(selectChesterAnimation());
  const landscapeImage = `url(${bgImage})`;
  // useRouteChanged(onClose)

  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false });

  useEffect(() => {
    if (showOnBreakpoint == false && onClose) {
      onClose();
    }
  }, [showOnBreakpoint, onClose]);

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus();
      });
    }
  }, [isOpen]);

  const [shadow, setShadow] = useState<string>();

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            transition={{ duration: 0.08 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Background
              bgPosition="10% 50%"
              variant="gradient"
              direction="column"
              w="100%"
              // bg={bgColor}
              h="100vh"
              overflow="auto"
              pos="absolute"
              top="0"
              left="0"
              zIndex={20}
              pb="8"
              bgImage={landscapeImage}
            >
              <Box color="white">
                <Flex justify="flex-end" px="6" pt="3" pb="4">
                  <Logo
                    boxSize="9"
                    position="absolute"
                    left="50%"
                    top="0"
                    transform="translate(-50%, 27%)"
                  />
                  <CloseButton
                    color="white"
                    ref={closeBtnRef}
                    onClick={onClose}
                  />
                </Flex>
                <ButtonGroup
                  size={{ base: "sm", sm: "md" }}
                  spacing="4"
                  mt="8"
                  mb="4"
                  justifyContent="center"
                  variant="solid"
                  w="full"
                >
                  <NextLink href="/" passHref>
                    <Button color="inherit">Home</Button>
                  </NextLink>
                  <NextLink href="/pigpiles" passHref>
                    <Button color="inherit">View Pigpiles</Button>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <Button color="inherit">About</Button>
                  </NextLink>
                  <NextLink href="/login" passHref>
                    <Button color="inherit">Login</Button>
                  </NextLink>
                </ButtonGroup>
                <Flex flexDirection="column" alignItems="center">
                  <Heading
                    align="center"
                    bgColor="blackAlpha.200"
                    w={{ base: "90%", sm: "58%", md: "60%" }}
                    mt="10"
                    pt="6"
                    pb="0"
                    fontSize="lg"
                  >
                    Theming Options
                  </Heading>
                  <Grid
                    px="4"
                    py="6"
                    shadow={shadow}
                    templateColumns="repeat(2, 1fr)"
                    gap="4"
                    w={{ base: "90%", sm: "58%", md: "60%" }}
                    bgColor="blackAlpha.200"
                  >
                    {Object.keys(themeOptions).map((key) => (
                      <GridItem>
                        <ThemeTabs
                          key={key}
                          id={key}
                          {...themeOptions[key]}
                          index={themeState?.[key] ?? 0}
                          onChange={onThemeOptionChange}
                        />
                      </GridItem>
                    ))}
                  </Grid>
                </Flex>
                <Chester
                  as={AbsoluteCenter}
                  sx={{
                    "@media screen and (max-height: 660px)": {
                      display: "none",
                    },
                  }}
                  top="auto"
                  bottom="20"
                  animate="true"
                  animationType={chesterAnimation}
                />
              </Box>
              {/*
              <ScrollView
                onScroll={(scrolled) => {
                  setShadow(scrolled ? 'md' : undefined)
                }}
              >
                <SidebarContent
                  pathname={pathname}
                  routes={getRoutes(asPath)}
                />
              </ScrollView>*/}
            </Background>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollView = (props: BoxProps & { onScroll?: any }) => {
  const { onScroll, ...rest } = props;
  const [y, setY] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elRef = useRef<any>();
  const { scrollY } = useElementScroll(elRef);
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useUpdateEffect(() => {
    onScroll?.(y > 5 ? true : false);
  }, [y]);

  return (
    <Box
      ref={elRef}
      flex="1"
      id="routes"
      overflow="auto"
      px="6"
      pb="6"
      {...rest}
    />
  );
};

export const MobileNavButton = forwardRef(
  (props: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        color="white"
        variant="ghost"
        colorScheme="blackAlpha"
        icon={<AiOutlineMenu />}
        {...props}
      />
    );
  }
);
