import { useState, useMemo } from "react";
import {
  defaultLabelBundle,
  frLabelBundle,
  makeGetLabelFromBundle,
  LabelBundleType,
} from "@josulliv101/labelBundles";
import { LabelBundleMap } from "@josulliv101/types";

const labelBundlesById: LabelBundleMap = {
  en: defaultLabelBundle,
  fr: frLabelBundle,
};

export function useLabelBundle() {
  const [labelBundleId, setLabelBundleId] = useState("en");

  return useMemo(() => {
    return {
      getLabel: makeGetLabelFromBundle(
        labelBundlesById[labelBundleId] || defaultLabelBundle
      ),
      setLabelBundleId,
    };
  }, [labelBundleId, setLabelBundleId]);
}
