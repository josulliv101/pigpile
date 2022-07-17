import { Banner, Footer, Main } from "../landmarks";
import { NavConnected as Nav } from "./NavConnected";
import { LayoutProps } from "./LayoutProps";

export const LayoutBasic: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Banner bgColor="black">
        <Nav />
      </Banner>
      <Main>{children}</Main>
      <Footer bgColor="gray.200" color="gray.700" />
    </>
  );
};
