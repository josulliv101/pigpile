const getColorName = (color: string): string => color.split(".")[0];

function isColor(c: unknown): c is string {
  return !!c && typeof c === "string";
}

export default function getColorNames(...colors: Array<unknown>): string {
  return colors.filter(isColor).map(getColorName).join(", ");
}
