import { DonationsTable } from "./DonationsTable";
import { mockDonationProps } from "./mock";

export default {
  title: "Data Display / Supporters / DonationsTable",
};

export const MultipleDonations = () => {
  return <DonationsTable donations={mockDonationProps.donations.slice(0, 2)} />;
};

export const NoDonations = () => {
  return <DonationsTable donations={[]} />;
};
