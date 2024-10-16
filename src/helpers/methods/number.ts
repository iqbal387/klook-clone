export const setShortNumber = (value: number) => {
  if (!value) return value;

  const currency = new Intl.NumberFormat("id-ID", {
    currency: "IDR",
  }).format(value);
  const currencies = currency.split(".");

  let shortValue = "";

  switch (true) {
    case value >= 1000000000:
      shortValue = "B+";
      break;
    case value >= 1000000:
      shortValue = "M+";
      break;
    case value >= 1000:
      shortValue = "K+";
      break;
    default:
      break;
  }

  return `${currencies[0]}${shortValue}`;
};
