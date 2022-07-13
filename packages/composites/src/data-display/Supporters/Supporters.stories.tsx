import { Supporters } from "./Supporters";
import { mockDonationProps } from "./mock";

export default {
  title: "Data Display / Supporters",
};

export const Basic = () => {
  return <Supporters {...mockDonationProps} />;
};
