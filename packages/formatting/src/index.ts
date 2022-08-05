import ago from "s-ago";

const currencyType = "usd";
const locale = "en-US";

const currencyWithDecimals = new Intl.NumberFormat(locale, {
  style: "currency",
  currency: currencyType,
  minimumFractionDigits: 2,
});

const currencyWithoutDecimals = new Intl.NumberFormat(locale, {
  style: "currency",
  currency: currencyType,
  minimumFractionDigits: 0,
});

const digits = new Intl.NumberFormat(locale, {
  minimumFractionDigits: 0,
});

export const getCurrency = (n: number) => {
  if (!n) {
    return currencyWithoutDecimals.format(0);
  }
  return currencyWithDecimals.format(n);
};

export const formatNumber = (n: number) => digits.format(n);

export function relativeDays(createdAtInMS: number) {
  return ago(new Date(createdAtInMS));
}

export function capitalizeFirstLetter(s) {
  if (typeof s !== "string" || !s) {
    return s;
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

interface Options {
  capitalizeAll: boolean;
}
export function formatIdAsText(s, options: Options) {
  if (typeof s !== "string" || !s) {
    return s;
  }
  const formatted = s.replace(/[-_]/g, " ");
  if (options?.capitalizeAll) {
    return formatted
      .split(" ")
      .map((str) => capitalizeFirstLetter(str))
      .join(" ");
  }
  return formatted;
}

export function formatPaymentAmount(amount: number): number {
  const numberFormat = new Intl.NumberFormat([locale], {
    style: "currency",
    currency: currencyType,
    currencyDisplay: "symbol",
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalCurrency = true;
  for (const part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100);
}
