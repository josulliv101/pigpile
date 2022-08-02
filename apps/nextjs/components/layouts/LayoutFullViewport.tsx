import { Background, useTheme } from "@josulliv101/core";
import { Banner, Footer, Main } from "../landmarks";
import { NavConnected as Nav } from "./NavConnected";
import { LayoutProps } from "./LayoutProps";

const bgImage = "url(/landscape.png)";

export const LayoutFullViewport: React.FC<LayoutProps> = ({ children }) => {
  const {
    userTheme: { bgImage, bgPosition },
  } = useTheme();
  const landscapeImage = `url(${bgImage})`;
  console.log("LayoutFullViewport", Background);
  return (
    <>
      <Banner>
        <Nav />
      </Banner>
      <Background
        as="main"
        bgImage={landscapeImage}
        bgPosition={bgPosition}
        variant="gradient"
        w="100vw"
      >
        <Main as="div">{children}</Main>
      </Background>
      <Footer pos="fixed" bottom="0" left="50%" transform="translateX(-50%)" w="100vw" size="sm" />
    </>
  );
};
