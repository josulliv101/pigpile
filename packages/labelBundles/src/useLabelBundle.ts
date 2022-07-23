import { useState, useMemo } from "react";
import {
  defaultLabelBundle,
  frLabelBundle,
  makeGetLabelFromBundle,
  LabelBundleType,
} from "./";

export type LabelBundleMap = Record<string, LabelBundleType>;

const labelBundlesById: LabelBundleMap = {
  en: defaultLabelBundle,
  fr: frLabelBundle,
};

export function useLabelBundle() {
  const [labelBundleId, setLabelBundleId] = useState("en");

  return useMemo(() => {
    const getLabel = makeGetLabelFromBundle(
      labelBundlesById[labelBundleId] || defaultLabelBundle
    );
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
