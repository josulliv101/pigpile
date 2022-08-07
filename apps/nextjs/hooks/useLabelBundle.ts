import { useRouter } from "next/router";
import { useLabelBundle as useLabelBundleBase } from "@josulliv101/labelbundles";
import { selectCampaign } from "store";
import { useAppSelector } from "hooks";

export function useLabelBundle() {
  const router = useRouter();
  const { id: campaignId } = router.query;
  const { customLabels } = useAppSelector(selectCampaign(campaignId as string)) || {};

  const labelBundleProps = useLabelBundleBase({ customLabels });
  return labelBundleProps;
}
