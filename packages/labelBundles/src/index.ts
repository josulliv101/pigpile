import get from "lodash.get";
import { LabelBundleType } from "./LabelBundleType";

export * from "./bundleDefault";
export * from "./bundleFR";

type replacementValue = string | number;

const regex = new RegExp("{{[a-zA-Z0-9]+}}", "g");

const getReplaceMatchesFn = (replacementValues: replacementValue[]) => {
  let i = 0;
  return () => replacementValues[i++];
};

export const makeGetLabelFromBundle =
  (bundleToUse: LabelBundleType) =>
  (value: string, ...replacementValues: replacementValue[]) => {
    const templateString = get(bundleToUse, value);
    if (!templateString) {
      return value;
    }
    return templateString.replace(
      regex,
      getReplaceMatchesFn(replacementValues)
    );
  };
