import { Layout } from "@josulliv101/types";
import { Banner, Footer, Main } from "../landmarks";
import { NavConnected as Nav } from "./NavConnected";

export const LayoutCampaign: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <Banner>
        <Nav />
      </Banner>
      <Main maxW="full" p="0">
        {children}
      </Main>
      <Footer />
    </>
  );
};
