import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useLabelBundle as useLabelBundleBase } from "@josulliv101/labelbundles";
import { selectCampaign } from "store";

export function useLabelBundle() {
  const router = useRouter();
  const { id: campaignId } = router.query;
  const { customLabels } = useSelector(selectCampaign(campaignId as string)) || {};

  const labelBundleProps = useLabelBundleBase({ customLabels });
  console.log("useCampaignSpecificLabelBundle", campaignId, labelBundleProps, customLabels);
  return labelBundleProps;
}
