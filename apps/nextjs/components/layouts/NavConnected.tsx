import { HTMLChakraProps } from "@josulliv101/core";
import { useNavProps } from "hooks";
import { Nav } from "../landmarks";

export const NavConnected: React.FC<HTMLChakraProps<"div">> = () => {
  const props = useNavProps();
  return <Nav {...props} />;
};
