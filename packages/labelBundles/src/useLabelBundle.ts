import { useState, useMemo } from "react";
import { mergeWith } from "@josulliv101/core";
import { makeGetLabelFromBundle } from "./";

export function useLabelBundle({
  initialId = "default",
  customLabels = {},
} = {}) {
  const [labelBundleId, setLabelBundleId] = useState(initialId);

  return useMemo(() => {
    const labelBundleWithOverrides = mergeWith({}, customLabels[labelBundleId]);
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
