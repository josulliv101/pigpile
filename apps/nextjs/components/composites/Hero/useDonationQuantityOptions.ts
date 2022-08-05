import { useMemo } from "react";
import { MORE_BUTTONS_BACK_ID } from "@josulliv101/composites";
import { getCurrency } from "@josulliv101/formatting";
import { useLabelBundle } from "hooks";

const MORE_BTN_INDEX = 4;

interface Option {
  value: number | string;
  price?: string;
  label: string;
}

function addMoreButton(options: Option[], label = "") {
  options.splice(MORE_BTN_INDEX, 0, { label, value: MORE_BUTTONS_BACK_ID });
  return options;
}

export default function useDonationQuantityOptions(
  options: number[],
  pricePerUnit: number
) {
  const { getLabel, getLabelForQuantity } = useLabelBundle();
  return useMemo(() => {
    const tranformedOptions = options.map((n: number): Option => {
      const label = `${n} ${getLabelForQuantity(
        { one: "item.alt", many: "items.alt" },
        n
      )}`;
      return {
        value: n,
        price: getCurrency(n * pricePerUnit),
        label,
      };
    });
    const customBtnOption = { label: getLabel("custom"), value: "custom" };
    return addMoreButton(tranformedOptions, getLabel("back")).concat(
      customBtnOption
    );
  }, [options]);
}
