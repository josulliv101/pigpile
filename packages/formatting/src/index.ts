import ago from "s-ago";

let currencyType = "USD";
let locale = "en-US";

const currencyWithDecimals = new Intl.NumberFormat(locale, {
  style: "currency",
  currency: currencyType,

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const currencyWithoutDecimals = new Intl.NumberFormat(locale, {
  style: "currency",
  currency: currencyType,
  minimumFractionDigits: 0,
});

const digits = new Intl.NumberFormat(locale, {
  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const getCurrency = (n: number) => {
  console.log("getCurrency", typeof n, n, currencyWithoutDecimals.format(0));
  if (!n) {
    return currencyWithoutDecimals.format(0);
  }
  return currencyWithDecimals.format(n);
};

export const formatNumber = (n: number) => digits.format(n);

export function relativeDays(createdAtInMS) {
  const rtf = new Intl.RelativeTimeFormat(locale, {
    numeric: "auto",
  });
  /*  const oneDayInMs = 1000 * 60 * 60 * 24;
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / oneDayInMs,
  );*/

  return ago(new Date(createdAtInMS));
}

export function capitalizeFirstLetter(s) {
  if (typeof s !== "string" || !s) {
    return s;
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatAsText(s, options) {
  if (typeof s !== "string" || !s) {
    return s;
  }
  let formatted = s.replace(/[-_]/g, " ");
  if (options?.capitalizeAll) {
    return formatted
      .split(" ")
      .map((str) => capitalizeFirstLetter(str))
      .join(" ");
  }
  return formatted;
}
