import { DonationsGrid } from "./DonationsGrid";
import { mockDonationProps } from "./mock";

export default {
  title: "Data Display / Supporters / DonationsGrid",
};

export const MultipleDonations = () => {
  return <DonationsGrid {...mockDonationProps} />;
};

export const OneDonation = () => {
  return <DonationsGrid donations={mockDonationProps.donations.slice(0, 1)} />;
};

export const TwoDonations = () => {
  return <DonationsGrid donations={mockDonationProps.donations.slice(0, 2)} />;
};

export const ThreeDonations = () => {
  return <DonationsGrid donations={mockDonationProps.donations.slice(0, 3)} />;
};

export const NoDonations = () => {
  return <DonationsGrid donations={[]} />;
};
