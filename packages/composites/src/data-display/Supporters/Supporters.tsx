import { Donation } from "@josulliv101/types";
import { Box } from "@josulliv101/core";
import { DonationTabs, DonationTabsProps } from "./DonationTabs";
import { DonationsGrid } from "./DonationsGrid";
import { DonationsTable } from "./DonationsTable";

export interface SupportersProps extends DonationTabsProps {
  donations: Donation[];
  getLabel: (n: number) => string;
}

export const Supporters: React.FC<SupportersProps> = ({
  donations,
  queryType,
  viewType,
  onChange,
  getLabel,
  ...props
}) => {
  const DisplayComponent = viewType === 1 ? DonationsTable : DonationsGrid;
  return (
    <Box {...props}>
      <DonationTabs
        queryType={queryType}
        viewType={viewType}
        onChange={onChange}
      />
      <DisplayComponent
        donations={donations}
        getLabel={getLabel}
      />
    </Box>
  );
};
