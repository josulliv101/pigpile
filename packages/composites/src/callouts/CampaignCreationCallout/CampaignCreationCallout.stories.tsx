import { CampaignCreationCallout } from "./CampaignCreationCallout";
import { mockProps } from "./mock";

export default {
  title: "Callouts / Campaign Creation Callout",
};

export const Basic = () => {
  return <CampaignCreationCallout {...mockProps} />;
};
