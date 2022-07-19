import * as React from "react";
import { Box } from "@josulliv101/core";
import { DonationTabs } from "./DonationTabs";
import { DonationsGrid } from "./DonationsGrid";
import { DonationsTable } from "./DonationsTable";

export interface SupportersProps {}

export const Supporters: React.FC<SupportersProps> = ({
  donations,
  ...props
}) => {
  const [activeViewIndex, setActiveViewIndex] = React.useState(0);
  return (
    <Box {...props}>
      <DonationTabs
        activeViewIndex={activeViewIndex}
        onViewChange={setActiveViewIndex}
      />
      {!!activeViewIndex ? (
        <DonationsTable donations={donations} />
      ) : (
        <DonationsGrid donations={donations} />
      )}
    </Box>
  );
};
