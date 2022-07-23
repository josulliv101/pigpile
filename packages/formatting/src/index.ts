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
