import * as React from "react";
import { Donations } from "@josulliv101/types";
import { Box } from "@josulliv101/core";
import { DonationTabs, DonationTabsProps } from "./DonationTabs";
import { DonationsGrid } from "./DonationsGrid";
import { DonationsTable } from "./DonationsTable";

export interface SupportersProps extends DonationTabsProps {
  donations: Donations[];
}

export const Supporters: React.FC<SupportersProps> = ({
  donations,
  queryType,
  viewType,
  onChange,
  getLabel,
  ...props
}) => {
  return (
    <Box {...props}>
      <DonationTabs queryType={queryType} viewType={viewType} onChange={onChange} />
      {!!viewType ? (
        <DonationsTable donations={donations} getLabel={getLabel} />
      ) : (
        <DonationsGrid donations={donations} getLabel={getLabel} />
      )}
    </Box>
  );
};
