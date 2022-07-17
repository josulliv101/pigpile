import { Nav } from "../landmarks";
import { useNavProps } from "../../hooks";

export const NavConnected = () => {
  const props = useNavProps();
  return <Nav {...props} />;
};
