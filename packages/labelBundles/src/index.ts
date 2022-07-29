import get from "lodash.get";
import { LabelBundle } from "@josulliv101/types";

export * from "./bundleDefault";
export * from "./bundleFR";
export * from "./useLabelBundle";

type replacementValue = string | number;

const regex = new RegExp("{{[a-zA-Z0-9]+}}", "g");

const getReplaceMatchesFn = (replacementValues: replacementValue[]) => {
  let i = 0;
  return () => replacementValues[i++];
};

export const makeGetLabelFromBundle =
  (bundleToUse: LabelBundle) =>
  (value: string, ...replacementValues: replacementValue[]) => {
    const templateString = get(bundleToUse, value) ?? value;

    if (!templateString) {
      return "";
    }

    return templateString.replace(regex, getReplaceMatchesFn(replacementValues));
  };
