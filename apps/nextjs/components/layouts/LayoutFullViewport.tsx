import { useSelector } from "react-redux";
import { Background, Box, Chester, useTheme } from "@josulliv101/core";
import { selectChesterAnimation } from "store";
import { Banner, FooterSmall, Main } from "../landmarks";
import { NavConnected as Nav } from "./NavConnected";
import { LayoutProps } from "./LayoutProps";

const bgImage = "url(/landscape.png)";

export const LayoutFullViewport: React.FC<LayoutProps> = ({ children }) => {
  const {
    userTheme: { bgImage, bgPosition, chesterPosition },
  } = useTheme();
  const chesterAnimationType = useSelector(selectChesterAnimation());
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
        <Box
          pos="absolute"
          bottom="20%"
          left={{ base: "28%", lg: "16%" }}
          transform="scale(.46)"
          {...chesterPosition}
        >
          <Chester animationType={chesterAnimationType} opacity=".9" />
        </Box>
      </Background>
      <FooterSmall pos="fixed" bottom="0" left="50%" transform="translateX(-50%)" w="100vw" />
    </>
  );
};
