import { OrganizationCallout } from "./OrganizationCallout";
import { mockProps } from "./mock";

export default {
  title: "Callouts / Organization Callout",
};

export const Basic = () => {
  return <OrganizationCallout {...mockProps} />;
};
