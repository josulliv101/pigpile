import react from "react";
import { Container, HTMLChakraProps } from "@pigpile/core";
import { Banner, Footer, Main, Nav } from "../landmarks";

export const LayoutBasic: React.FC<HTMLChakraProps<"div">> = ({ children }) => {
  return (
    <>
      <Banner bgColor="black">
        <Nav />
      </Banner>
      <Main>
        Basic Layout
        {children}
      </Main>
      <Footer bgColor="gray.200" color="gray.700" />
    </>
  );
};

// export const LayoutBasic = (page):JSX.Element => <Basic>{ page }</Basic>

// LayoutBasic.displayName = "LayoutBasic";
