import { useState, useMemo } from "react";
import { LabelBundleMap } from "@josulliv101/types";
import { mergeWith } from "@josulliv101/core";
import { defaultLabelBundle, frLabelBundle, makeGetLabelFromBundle } from "./";

// TODO load non-default label bundles on-demand
const labelBundlesById: LabelBundleMap = {
  default: defaultLabelBundle,
  fr: frLabelBundle,
};

export function useLabelBundle({ initialId = "default", customLabels = {} } = {}) {
  const [labelBundleId, setLabelBundleId] = useState(initialId);

  return useMemo(() => {
    const labelBundleWithOverrides = mergeWith(
      {},
      defaultLabelBundle,
      labelBundlesById[labelBundleId],
      customLabels[labelBundleId]
    );
    const getLabel = makeGetLabelFromBundle(labelBundleWithOverrides);
    const getLabelForQuantity = (
      { one, many }: { one: string; many: string },
      quantity: number,
      ...replacementValues: string[]
    ) => {
      const label = quantity && quantity > 1 ? many : one;
      return getLabel(label, ...replacementValues);
    };
    return {
      getLabel,
      getLabelForQuantity,
      setLabelBundleId,
    };
  }, [labelBundleId, setLabelBundleId]);
}
