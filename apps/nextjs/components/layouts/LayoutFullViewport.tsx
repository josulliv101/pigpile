import { Background, HTMLChakraProps } from "@pigpile/core";
// import { useLandscapeImage } from "src/hooks";
// import { BackgroundLandscape } from "src/components/extended";
import { Banner, Footer, Main, Nav } from "../landmarks";

export interface LayoutFullViewportProps extends HTMLChakraProps<"div"> {
  onLogin: () => void;
  onLogout: () => void;
  onThemeOptionChange: () => void;
}

const bgImage = "url(https:/pigpile-next.firebaseapp.com/images/landscape.png)";

export const LayoutFullViewport: React.FC<LayoutFullViewportProps> = ({
  children,
  ...navProps
}) => {
  const landscapeImage = bgImage; // useLandscapeImage();
  console.log("LayoutFullViewport", Background);
  return (
    <>
      <Banner>
        <Nav {...navProps} />
      </Banner>
      <Background
        as="main"
        bgImage={landscapeImage}
        bgPosition="10% 50%"
        variant="gradient"
        w="100vw"
      >
        <Main as="div">{children}</Main>
      </Background>
      <Footer
        pos="fixed"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        w="100vw"
      />
    </>
  );
};
