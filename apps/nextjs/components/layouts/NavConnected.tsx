import { HTMLChakraProps } from "@josulliv101/core";
import { Nav } from "../landmarks";
import { useNavProps } from "../../hooks";

export const NavConnected: React.FC<HTMLChakraProps<"div">> = () => {
  const props = useNavProps();
  return <Nav {...props} />;
};
