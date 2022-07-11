import get from "lodash.get";
import { LabelBundleType } from "./LabelBundleType";

export * from "./bundleDefault";
export * from "./bundleFR";

export const makeGetLabelFromBundle =
  (bundleToUse: LabelBundleType) => (pathToLabel: string) =>
    get(bundleToUse, pathToLabel);
