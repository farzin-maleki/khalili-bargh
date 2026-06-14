// Convert digits to Persian numerals everywhere
const FA = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export const toFa = (input: string | number) =>
  String(input).replace(/\d/g, (d) => FA[Number(d)]);