import { Banner, Footer, Main } from "../landmarks";
import { NavConnected as Nav } from "./NavConnected";
import { LayoutProps } from "./LayoutProps";

export const LayoutCampaign: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Banner>
        <Nav />
      </Banner>
      <Main maxW="full" p="0">
        {children}
      </Main>
      <Footer pos="fixed" bottom="0" left="0" w="100vw" h="56px" />
    </>
  );
};
