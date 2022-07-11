import { Background, HTMLChakraProps } from "@pigpile/core";
// import { useLandscapeImage } from "src/hooks";
// import { BackgroundLandscape } from "src/components/extended";
import { Banner, Footer, Main, Nav } from "../landmarks";

const bgImage = "url(/farm-inkscape.svg)";

export const LayoutFullViewport: React.FC<HTMLChakraProps<"div">> = ({ children }) => {
  const landscapeImage = bgImage; // useLandscapeImage();
  console.log('LayoutFullViewport', Background)
  return <>
    <Banner>
      <Nav />
    </Banner>
    <Background as="main" bgImage={landscapeImage} bgPosition="10% 50%" colorScheme="purple" variant="gradient" w="100vw" >
      <Main as="div">
        { children }
      </Main>
    </Background>
    <Footer pos="fixed" bottom="0" left="0" w="100vw" h="56px" />
  </>
}

