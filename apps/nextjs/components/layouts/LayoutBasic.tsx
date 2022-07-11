import { Banner, Footer, Main, Nav } from "../landmarks";
import { LayoutProps } from "./LayoutProps";

export const LayoutBasic: React.FC<LayoutProps> = ({
  children,
  ...navProps
}) => {
  return (
    <>
      <Banner bgColor="black">
        <Nav {...navProps} />
      </Banner>
      <Main>{children}</Main>
      <Footer bgColor="gray.200" color="gray.700" />
    </>
  );
};
