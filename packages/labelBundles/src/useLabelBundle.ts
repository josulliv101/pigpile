import { useState, useMemo } from "react";
import { LabelBundleMap } from "@josulliv101/types";
import { defaultLabelBundle, frLabelBundle, makeGetLabelFromBundle } from "./";

// TODO load label bundles on-demand as needed
const labelBundlesById: LabelBundleMap = {
  en: defaultLabelBundle,
  fr: frLabelBundle,
};

export function useLabelBundle(initialLocale = "en") {
  const [labelBundleId, setLabelBundleId] = useState(initialLocale);

  return useMemo(() => {
    const getLabel = makeGetLabelFromBundle(labelBundlesById[labelBundleId] || defaultLabelBundle);
    const getLabelForQuantity = (
      value: string,
      quantity: number,
      ...replacementValues: string[]
    ) => {
      const suffix = quantity && quantity > 1 ? "default" : "1";
      return getLabel(`${value}.${suffix}`, ...replacementValues);
    };
    return {
      getLabel,
      getLabelForQuantity,
      setLabelBundleId,
    };
  }, [labelBundleId, setLabelBundleId]);
}
