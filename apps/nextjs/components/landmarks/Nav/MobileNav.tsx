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
            transition={{ duration: 0.18 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Background
              bgPosition={bgPosition}
              variant="gradient"
              w="100%"
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
                    _focusVisible={{ outlineColor: "white" }}
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
                  _dark={{ color: "gray.700" }}
                >
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/pigpiles">View Pigpiles</NavLink>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/login">Login</NavLink>
                </ButtonGroup>
                <Flex flexDirection="column" alignItems="center">
                  <Heading
                    textAlign="center"
                    bgColor="blackAlpha.200"
                    w={{ base: "90%", sm: "64%" }}
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
                    templateColumns="repeat(2, 1fr)"
                    gap="4"
                    w={{ base: "90%", sm: "64%" }}
                    bgColor="blackAlpha.200"
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
                  as={AbsoluteCenter}
                  sx={{
                    "@media screen and (max-height: 660px)": {
                      display: "none",
                    },
                  }}
                  top="auto"
                  bottom="20"
                  animateOnMount
                  animationType={chesterAnimation}
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
        display={{ base: "flex", md: "none" }}
        fontSize="20px"
        color="white"
        variant="ghost"
        colorScheme="blackAlpha"
        icon={<FaBars />}
        _focusVisible={{ outlineColor: "white" }}
        {...props}
      />
    );
  }
);
