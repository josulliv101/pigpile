import { Nav, NavProps } from "../landmarks";
import { useNavProps } from "../../hooks";

export const NavConnected: React.FC<NavProps> = () => {
  const props = useNavProps();
  return <Nav {...props} />;
};
