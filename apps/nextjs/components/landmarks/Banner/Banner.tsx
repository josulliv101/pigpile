import NextLink from "next/link";
import {
  chakra,
  AbsoluteCenter as Center,
  Container,
  Flex,
  Text,
  Logo,
} from "@pigpile/core";
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
  },
});

const getLogoTransform = ({ scale }) =>
  `translate3d(-50%, -50%, 0) scale(${scale})`;

export const Banner: React.FC<HTMLChakraProps<"div">> = ({
  children: nav,
  ...props
}) => {
  const isScrolledY = useIsScrolledY();
  const logoTransform = getLogoTransform({ scale: isScrolledY ? 0.9 : 1 });
  const bgColor = isScrolledY ? "black" : "transparent";
  return (
    <Background as="header" bgColor={bgColor} {...props}>
      <Container>
        <Flex align="center" justify="space-between">
          <NextLink href="/" passHref>
            <BrandText as="a">Pigpile</BrandText>
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
        </Flex>
      </Container>
    </Background>
  );
};
