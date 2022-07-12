import { Box, Container, HTMLChakraProps } from "@chakra-ui/react";
import { Banner, Footer, Main, Nav } from "../landmarks";
import { LayoutProps } from "./LayoutProps";

export const LayoutCampaign: React.FC<LayoutProps> = ({
  children,
  ...navProps
}) => {
  return (
    <>
      <Banner>
        <Nav {...navProps} />
      </Banner>
      <Main maxW="full" p="0">
        {children}
      </Main>
      <Footer pos="fixed" bottom="0" left="0" w="100vw" h="56px" />
    </>
  );
};
