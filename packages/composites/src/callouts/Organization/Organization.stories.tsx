import { Organization } from "./Organization";
import { mockProps } from "./mock";

export default {
  title: "Callouts / Organization",
};

export const Basic = () => {
  return <Organization {...mockProps} />;
};
