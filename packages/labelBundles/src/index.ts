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
  (
    valueArg: string | { value: string; modifier?: string },
    ...replacementValues: replacementValue[]
  ) => {
    const { modifier = "", value } = typeof valueArg === "object" ? valueArg : { value: valueArg };
    const valuePath = modifier ? `${value}.${modifier}` : value;

    const templateString = get(bundleToUse, valuePath) ?? value;
    console.log("templateString TEST", { templateString, bundleToUse, valuePath });
    if (typeof templateString !== "string") {
      console.log("templateString", { valuePath, value, modifier });
      return templateString.default ?? value;
    }

    return templateString.replace(regex, getReplaceMatchesFn(replacementValues));
  };
