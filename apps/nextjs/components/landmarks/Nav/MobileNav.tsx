import { forwardRef, Ref, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { RemoveScroll } from "react-remove-scroll";
import {
  AbsoluteCenter,
  Background,
  Box,
  ButtonGroup,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  IconButtonProps,
  useBreakpointValue,
  useUpdateEffect,
  useTheme,
  Logo,
  Chester,
} from "@josulliv101/core";
import { themeOptions } from "@josulliv101/theme";
import { ThemeTabs } from "@josulliv101/composites";
import { selectChesterAnimation } from "store";
import { useAppSelector, useNavProps } from "hooks";
import { NavLink } from "components/landmarks";

interface MobileNavContentProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose } = props;
  const closeBtnRef = useRef<HTMLButtonElement>();
  const { themeState, onThemeOptionChange } = useNavProps();
  const {
    userTheme: { bgImage, bgPosition },
  } = useTheme();
  const chesterAnimation = useAppSelector(selectChesterAnimation());
  const landscapeImage = `url(${bgImage})`;
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

  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll forwardProps>
          <motion.div
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <Background
              bgImage={landscapeImage}
              bgPosition={bgPosition}
              h="100vh"
              left="0"
              overflow="auto"
              pb="8"
              pos="absolute"
              top="0"
              variant="gradient"
              w="100%"
              zIndex={20}
            >
              <Box color="white">
                <Flex
                  justify="flex-end"
                  pb="4"
                  pt="3"
                  px="6"
                >
                  <Logo
                    boxSize="9"
                    left="50%"
                    position="absolute"
                    top="0"
                    transform="translate(-50%, 27%)"
                  />
                  <CloseButton
                    ref={closeBtnRef}
                    _focusVisible={{ outlineColor: "white" }}
                    color="white"
                    onClick={onClose}
                  />
                </Flex>
                <ButtonGroup
                  _dark={{ color: "gray.700" }}
                  justifyContent="center"
                  mb="4"
                  mt="8"
                  size={{ base: "sm", sm: "md" }}
                  spacing="4"
                  variant="solid"
                  w="full"
                >
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/pigpiles">View Pigpiles</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/login">Login</NavLink>
                </ButtonGroup>
                <Flex
                  alignItems="center"
                  flexDirection="column"
                >
                  <Heading
                    bgColor="blackAlpha.200"
                    fontSize="lg"
                    mt="10"
                    pb="0"
                    pt="6"
                    textAlign="center"
                    w={{ base: "90%", sm: "64%" }}
                  >
                    Theming Options
                  </Heading>
                  <Grid
                    bgColor="blackAlpha.200"
                    gap="4"
                    px="4"
                    py="6"
                    templateColumns="repeat(2, 1fr)"
                    w={{ base: "90%", sm: "64%" }}
                  >
                    {Object.keys(themeOptions).map((key) => (
                      <GridItem key={key}>
                        <ThemeTabs
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
                  animateOnMount
                  animationType={chesterAnimation}
                  as={AbsoluteCenter}
                  bottom="20"
                  sx={{
                    "@media screen and (max-height: 660px)": {
                      display: "none",
                    },
                  }}
                  top="auto"
                />
              </Box>
            </Background>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}

export const MobileNavButton = forwardRef(
  (props: IconButtonProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <IconButton
        ref={ref}
        _focusVisible={{ outlineColor: "white" }}
        color="white"
        colorScheme="blackAlpha"
        display={{ base: "flex", md: "none" }}
        fontSize="20px"
        icon={<FaBars />}
        variant="ghost"
        {...props}
      />
    );
  }
);

MobileNavButton.displayName = "MobileNavButton";
