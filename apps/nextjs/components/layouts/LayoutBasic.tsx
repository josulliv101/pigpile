import { Layout } from "@josulliv101/types";
import { Banner, Footer, Main } from "../landmarks";
import { NavConnected as Nav } from "./NavConnected";

export const LayoutBasic: React.FC<Layout> = ({ children }) => {
  return (
    <>
      <Banner bgColor="black">
        <Nav />
      </Banner>
      <Main pb="10">{children}</Main>
      <Footer />
    </>
  );
};
