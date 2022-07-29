import { Organizer } from "./Organizer";
import { mockProps } from "./mock";

export default {
  title: "Callouts / Organizer",
};

export const Basic = () => {
  return <Organizer {...mockProps} />;
};
